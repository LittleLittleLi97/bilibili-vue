import DanmakuItem from "./danmakuItem";

export default class Danmaku {
    constructor(video, canvas, danmakuList) {
        this.video = video;
        this.canvas = canvas;
        this.danmakuList = danmakuList;

        this.canvasCtx = canvas.getContext('2d');
        this.canvas.width = video.offsetWidth;
        this.canvas.height = video.offsetHeight;
        
        this.paused = true;
        this.danmakuPool = this.createDanmakuPool();
    }
    createDanmakuPool() {
        return this.danmakuList.map(dm => new DanmakuItem(dm, this));
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
}