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

        this.height = 50;
        this.inlineGap = 50;
        
        this.paused = true;
        this.danmakuPool = this.createDanmakuPool();
        this.track = []; // [[0, 50], [50, 100], ...]

        this.init();
    }
    init() {
        this.initTrack();
    }
    initTrack() {
        const trackNum = parseInt(this.canvas.width / this.height);

        for (let i = 0; i < trackNum; i++) {
            this.track.push([i * this.height, (i + 1) * this.height]);
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
                if (!dm.isInitialized) {
                    dm.initialize();
                    dm.isInitialized = true;
                }
                dm.X -= dm.speed;
                dm.draw();

                if (dm.X <= dm.width * -1) {
                    dm.stopDrawing = true;
                }
            }
        })
    }
    clearRect() {
        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    reset() {
        this.clearRect();
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