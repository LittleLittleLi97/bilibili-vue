import { reqDanmakuProtobuf } from "@/api";
import RandomQueue from "../data-structure/RandomQueue";
import DanmakuItem from "./danmakuItem";
import proto from './dm_pb.js';
import { transformColorDecToHex } from "./utils";


export default class Danmaku {
    constructor(video, canvas, cid) {
        this.video = video;
        this.canvas = canvas;
        this.cid = cid;

        this.canvasCtx = canvas.getContext('2d');

        this.height = 30;
        this.inlineGap = 30;
        
        this.lastTime = 0;
        this.currentPool = 0;
        this.paused = true;
        this.reqSended = [];
        this.danmakuData = [];
        this.danmakuPool = [];
        this.track = [];
        this.trackQueue = new RandomQueue();

        this.init();
    }
    init() {
        this.initCanvas();
        this.initTrack();
        this.reqDanmaku(1); // 默认请求第一个segment
    }
    initCanvas() {
        this.canvas.width = this.video.offsetWidth;
        this.canvas.height = this.video.offsetHeight;
    }
    initTrack() {
        this.trackNum = parseInt(this.canvas.height / this.height);

        for (let i = 0; i < this.trackNum; i++) {
            this.track.push({
                id: i,
                top: i * this.height, 
                bottom: (i + 1) * this.height - 1,
            });
            this.trackQueue.push(i);
        }

    }
    render() { // 渲染前先清除再画
        this.clearRect();
        this.drawDanmaku();
        !this.paused && requestAnimationFrame(this.render.bind(this));
    }
    drawDanmaku() {
        if (!this.danmakuPool[this.currentPool]) return;

        const currentTime = this.video.currentTime;
        this.danmakuPool[this.currentPool].map((dm)=>{
            if (dm.state !== DanmakuItem.finish && currentTime >= dm.runTime) {
                if (dm.state === DanmakuItem.unInit) { // 此danmakuItem是第一次绘制
                    const trackId = this.trackQueue.get();
                    const track = this.track[trackId];
                    if (track) {
                        dm.speed = 2 + Math.random(); // 2 ~ 3
                        if (track.last && track.last.state !== DanmakuItem.finish) {
                            const last = track.last;
                            // 追及问题，保证前后弹幕间距始终大于inline-gap
                            const maxSpeed = (this.canvas.width - this.inlineGap) / ((last.X + last.width) / last.speed);
                            if (maxSpeed < dm.speed) dm.speed = maxSpeed;
                        }
                        track.release = dm;
                        track.last = dm;
                        dm.initialize(track.top);
                        dm.trackId = track.id;
                    } else { // 满轨
                        dm.finish();
                        return;
                    }
                }

                if (dm.trackId >= this.trackNum) { // 减轨后，溢出的弹幕不再渲染，并且防止溢出的轨道再次加入队列
                    dm.finish();
                    return;
                }
                dm.X -= dm.speed;
                dm.draw();

                // danmakuItem移动距离超过inline-gap，释放轨道
                if (dm === this.track[dm.trackId].release && this.canvas.width - dm.X - dm.width > this.inlineGap) {
                    this.track[dm.trackId].release = undefined; // 防止重复释放
                    this.trackQueue.push(dm.trackId);
                }

                if (dm.X <= dm.width * -1) { // 此danmakuItem绘制结束
                    dm.finish();
                }
            }
        })
    }
    clearRect() {
        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    resetTrack() {
        this.trackQueue.clear();
        for (let i = 0; i < this.trackNum; i++) {
            this.trackQueue.push(i);
        }
    }
    reset() {
        /** seek时的reset，清除屏幕，重置轨道，重置弹幕的stopDrawing状态，时间点之前的为true，之后的为false。
         *  但会有几秒的弹幕不满屏，效果不好。可以试着以随机speed计算弹幕在屏幕上的位置并填充。
         */
        this.clearRect();
        this.resetTrack();
        const currentTime = this.video.currentTime;
        this.danmakuPool[this.currentPool].map((dm)=>{
            if (currentTime <= dm.runTime) {
                dm.unInit();
            } else {
                dm.finish();
            }
        })
    }
    resize() {
        this.initCanvas();
        const newTrackNum = parseInt(this.canvas.height / this.height);
        if (newTrackNum > this.trackNum) { // 增轨
            for (let i = this.trackNum; i < newTrackNum; i++) {
                this.track.push({
                    id: i,
                    top: i * this.height, 
                    bottom: (i + 1) * this.height - 1,
                });
                this.trackQueue.push(i);
            }
        } else { // 减轨
            this.track = this.track.filter((item)=>item.id < newTrackNum);
            this.trackQueue.filter((item)=>item < newTrackNum);
        }
        this.trackNum = newTrackNum;
    }
    protobuf(data) {
        return proto.DmSegMobileReply.deserializeBinary(data).array[0];
    }
    createPool(data) {
        return data.map((item)=>{
            const [id, runTime, mode, fontsize, color, midHash, content, ctime, weight, action, pool, idStr] = item;
            return new DanmakuItem({
                id,
                content,
                runTime: runTime / 1000,
                color: transformColorDecToHex(color),
                mode,
                fontsize,
                speed: 2, // 速度现在这里固定，随机速度需要在第一次绘制前确定
            }, this);
        });
    }
    reqDanmaku(segment_index) {
        const index = segment_index - 1;
        if (this.reqSended[index]) return;
        this.reqSended[index] = true;
        return reqDanmakuProtobuf(1, this.cid, segment_index).then((result)=>{
            const data = this.protobuf(result.data);
            this.danmakuData[index] = data;
            this.danmakuPool[index] = this.createPool(data);
        })
    }
    setSegment(segment_index) { // 切换使用的danmakuPool
        const newPool = segment_index - 1;
        const currentTime = this.video.currentTime;

        if (newPool !== this.currentPool) {

            if (currentTime - this.lastTime < 1) {  // 正常播放
                // 用于解决切换时弹幕出现断层的问题
                if (!this.danmakuPool[newPool]) this.danmakuPool[newPool] = [];
                this.danmakuPool[this.currentPool].map((dm)=>{
                    if (dm.state === DanmakuItem.rendering) {
                        this.danmakuPool[newPool].push(dm);
                    }
                });

            } else { // seek
                console.log('seek')
            }

            // 恢复上一分区
            this.danmakuPool[this.currentPool] = this.createPool(this.danmakuData[this.currentPool]);
        }

        this.currentPool = newPool;
        this.lastTime = currentTime;
    }
}