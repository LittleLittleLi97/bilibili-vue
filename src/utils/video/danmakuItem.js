import { getTextWidth } from "./utils";

export default class DanmakuItem {

    static unInit = 'unInit';
    static rendering = 'rendering';
    static finish = 'finish';

    constructor(danmaku, fCtx) {
        Object.assign(this, danmaku);
        this.fontsize = 18;
        this.ctx = fCtx;

        this.unInit();
    }
    initialize(Y) {
        this.width = getTextWidth(this.content, this.fontsize);
        this.X = this.ctx.canvas.width;
        this.Y = Y + this.fontsize; // fillText的开始坐标是文字的左下角，不是左上角
        this.rendering();
    }
    draw() {
        this.ctx.canvasCtx.font = `${this.fontsize}px SimHei`;
        this.ctx.canvasCtx.fillStyle = `#${this.color}`;
        this.ctx.canvasCtx.fillText(this.content, this.X, this.Y);
    }
    unInit() {
        this.state = DanmakuItem.unInit;
    }
    rendering() {
        this.state = DanmakuItem.rendering;
    }
    finish() {
        this.state = DanmakuItem.finish;
    }
}