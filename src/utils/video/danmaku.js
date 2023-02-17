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
        this.canvas.width = video.offsetWidth;
        this.canvas.height = video.offsetHeight;

        this.height = 30;
        this.inlineGap = 30;
        
        this.paused = true;
        this.danmakuPool = this.createDanmakuPool();
        this.track = [];
        this.trackQueue = new RandomQueue();

        this.init();
    }
    init() {
        this.initTrack();
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
        this.canvasCtx.font = `20px PingFang SC`;
        this.canvasCtx.fillStyle = `red`;
        this.canvasCtx.fillText('测试', 0, 20);
        !this.paused && requestAnimationFrame(this.render.bind(this));
    }
    drawDanmaku() {
        const currentTime = this.video.currentTime;
        this.danmakuPool.map((dm)=>{
            if (!dm.stopDrawing && currentTime >= dm.runTime) {
                if (!dm.isInitialized) { // 此danmakuItem是第一次绘制
                    const trackId = this.trackQueue.get();
                    const track = this.track[trackId];
                    if (track) { // 满轨
                        track.last = dm.id;
                        dm.initialize(track.top);
                        dm.trackId = track.id;
                        dm.isInitialized = true;
                    } else {
                        dm.stopDrawing = true;
                        return;
                    }
                }
                dm.X -= dm.speed;
                dm.draw();

                // danmakuItem移动距离超过inline-gap，释放轨道
                if (dm.id === this.track[dm.trackId].last && this.canvas.width - dm.X - dm.width > this.inlineGap) {
                    this.track[dm.trackId].last = undefined;
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
    xml() {
        const parser = new DOMParser();
        const xml = parser.parseFromString(this.danmakuData, 'text/xml');
        const pool = Array.from(xml.getElementsByTagName('d')).map((item)=>{
            const [time, type, font, color, sendTime, ..._] = item.getAttribute('p').split(',');
            return new DanmakuItem({
                content: item.textContent,
                runTime: time,
                color: transformColorDecToHex(color),
                speed: 2
            }, this);
        })
        return pool;
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