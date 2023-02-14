import DanmakuItem from "./danmakuItem";
import proto from './dm_pb.js';


export default class Danmaku {
    constructor(video, canvas, danmakuData, danmakuType) {
        this.video = video;
        this.canvas = canvas;
        this.danmakuData = danmakuData;
        this.danmakuType = danmakuType;

        this.canvasCtx = canvas.getContext('2d');
        this.canvas.width = video.offsetWidth;
        this.canvas.height = video.offsetHeight;
        
        this.paused = true;
        this.danmakuPool = this.createDanmakuPool();
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
                color: parseInt(color, 10).toString(16),
                speed: 2
            }, this);
        })
        return pool;
    }
    protobuf() {
        const a = proto.DmSegMobileReply.deserializeBinary(this.danmakuData);
        console.log(a)
    }
}