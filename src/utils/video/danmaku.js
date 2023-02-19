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
        
        this.currentPool = 0;
        this.paused = true;
        this.reqSended = [];
        this.danmakuPool = [];
        this.track = [];
        this.trackQueue = new RandomQueue();

        this.init();
    }
    init() {
        this.initCanvas();
        this.initTrack();
        this.reqDanmaku(1);
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
            if (!dm.stopDrawing && currentTime >= dm.runTime) {
                if (!dm.isInitialized) { // 此danmakuItem是第一次绘制
                    const trackId = this.trackQueue.get();
                    const track = this.track[trackId];
                    if (track) {
                        dm.speed = 2 + Math.random(); // 2 ~ 3
                        if (track.last && !track.last.stopDrawing) {
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
                        dm.stopDrawing = true;
                        return;
                    }
                }

                if (dm.trackId >= this.trackNum) { // 减轨后，溢出的弹幕不再渲染，并且防止溢出的轨道再次加入队列
                    dm.stopDrawing = true;
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
                    dm.stopDrawing = true;
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
        this.danmakuPool[this.lastPool].map((dm)=>{
            dm.stopDrawing = false;
            if (currentTime <= dm.runTime) {
                dm.isInitialized = false;
            } else {
                dm.stopDrawing = true;
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
        const result = proto.DmSegMobileReply.deserializeBinary(data);
        const pool = result.array[0].map((item)=>{
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
        })
        return pool;
    }
    reqDanmaku(segment_index) {
        const index = segment_index - 1;
        if (this.reqSended[index]) return;
        this.reqSended[index] = true;
        reqDanmakuProtobuf(1, this.cid, segment_index).then((result)=>{
            const pool = this.protobuf(result.data);
            this.danmakuPool[index] = pool;
        })
    }
    setSegment(segment_index) { // 切换使用的danmakuPool
        this.currentPool = segment_index - 1;
    }
}