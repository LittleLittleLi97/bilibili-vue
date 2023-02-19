import RandomQueue from "../data-structure/RandomQueue";
import DanmakuItem from "./danmakuItem";
import proto from './dm_pb.js';
import { transformColorDecToHex } from "./utils";


export default class Danmaku {
    constructor(video, canvas, danmakuData, danmakuType) {
        this.video = video;
        this.canvas = canvas;
        this.danmakuData = danmakuData;
        this.danmakuType = danmakuType;

        this.canvasCtx = canvas.getContext('2d');

        this.height = 30;
        this.inlineGap = 30;
        
        this.paused = true;
        this.danmakuPool = this.createDanmakuPool();
        this.track = [];
        this.trackQueue = new RandomQueue();

        this.init();
    }
    init() {
        this.initCanvas();
        this.initTrack();
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
    createDanmakuPool() {
        return this[this.danmakuType]();
    }
    render() { // 渲染前先清除再画
        this.clearRect();
        this.drawDanmaku();
        !this.paused && requestAnimationFrame(this.render.bind(this));
    }
    drawDanmaku() {
        const currentTime = this.video.currentTime;
        this.danmakuPool.map((dm)=>{
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
        this.clearRect();
        this.resetTrack()
        const currentTime = this.video.currentTime;
        this.danmakuPool.map((dm)=>{
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
        console.log(newTrackNum)
        if (newTrackNum > this.trackNum) { // 增轨
            for (let i = this.trackNum; i < newTrackNum; i++) {
                this.track.push({
                    id: i,
                    top: i * this.height, 
                    bottom: (i + 1) * this.height - 1,
                });
                this.trackQueue.push(i);
            }
            console.log(this.trackQueue)
        } else { // 减轨
            this.track.filter((item)=>item.id < newTrackNum);
            this.trackQueue.filter((item)=>item < newTrackNum);
        }
        this.trackNum = newTrackNum;
    }
    protobuf() {
        const result = proto.DmSegMobileReply.deserializeBinary(this.danmakuData);
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
}