import { getTextWidth, getTextPosition } from "./utils";

export default class DanmakuItem {
    constructor(danmaku, fCtx) {
        this.content = danmaku.content;
        this.runTime = danmaku.runTime;
        this.danmaku = danmaku;
        this.ctx = fCtx;

        this.initialize();
    }
    initialize() {
        this.color = this.danmaku.color || this.ctx.color;
        this.speed = this.danmaku.speed || this.ctx.speed;
        this.fontSize = 30;
        this.width = getTextWidth(this.content, this.fontSize);
        getTextPosition(this.ctx.canvas, this.fontSize, this);
    }
    draw() {
        this.ctx.canvasCtx.font = this.fontSize + 'px';
        this.ctx.canvasCtx.fillStyle = this.color;
        this.ctx.canvasCtx.fillText(this.content, this.X, this.Y);
    }
}