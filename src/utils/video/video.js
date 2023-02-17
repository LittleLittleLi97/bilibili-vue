import Danmaku from "./danmaku";

export default class Video {
    constructor(video, canvas, danmakuData, danmakuType) {
        this.video = video;
        this.canvas = canvas;

        this.danmaku = new Danmaku(video, canvas, danmakuData, danmakuType);

        this.bindEvent();
    }
    bindEvent() {
        // 回调时this有问题，用bind解决
        this.video.addEventListener('play', this.handleVideoPlay.bind(this), false);
        this.video.addEventListener('pause', this.hanldeVideoPause.bind(this), false);
        this.video.addEventListener('seeked', this.handleVideoSeek.bind(this), false);
        // window.addEventListener('resize', this.handleVideoResize.bind(this), false);
    }
    handleVideoPlay() {
        this.danmaku.paused = false;
        this.danmaku.render();
    }
    hanldeVideoPause() {
        this.danmaku.paused = true;
    }
    handleVideoSeek() {
        this.danmaku.reset();
    }
    handleVideoResize() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.danmaku.resize();
            clearTimeout(this.timer);
        }, 200);
    }
}