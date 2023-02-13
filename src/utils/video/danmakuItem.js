import { getTextWidth, getTextPosition } from "./utils";

export default class DanmakuItem {
    constructor(danmaku, fCtx) {
        this.content = danmaku.content;
        this.runTime = danmaku.runTime;
        this.color = danmaku.color;
        this.speed = danmaku.speed;
        this.danmaku = danmaku;
        this.ctx = fCtx;

        this.initialize();
    }
    initialize() {
        this.fontSize = 20;
        this.width = getTextWidth(this.content, this.fontSize);
        getTextPosition(this.ctx.canvas, this.fontSize, this);
    }
    draw() {
        this.ctx.canvasCtx.font = `${this.fontSize}px PingFang SC`;
        this.ctx.canvasCtx.fillStyle = `#${this.color}`;
        this.ctx.canvasCtx.fillText(this.content, this.X, this.Y);
    }
}