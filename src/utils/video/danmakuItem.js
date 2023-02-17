import { getTextWidth, getTextPosition } from "./utils";

export default class DanmakuItem {
    constructor(danmaku, fCtx) {
        // this.content = danmaku.content;
        // this.runTime = danmaku.runTime;
        // this.color = danmaku.color;
        // this.speed = danmaku.speed;
        Object.assign(this, danmaku);
        this.fontsize = 18;
        this.ctx = fCtx;

        // this.initialize();
    }
    initialize(Y) {
        this.width = getTextWidth(this.content, this.fontsize);
        // getTextPosition(this.ctx.canvas, this.fontSize, Y, this);
        this.X = this.ctx.canvas.width;
        this.Y = Y + this.fontsize; // fillText的开始坐标是文字的左下角，不是左上角
    }
    draw() {
        this.ctx.canvasCtx.font = `${this.fontsize}px SimHei`;
        this.ctx.canvasCtx.fillStyle = `#${this.color}`;
        this.ctx.canvasCtx.fillText(this.content, this.X, this.Y);
    }
}