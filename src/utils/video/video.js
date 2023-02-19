import Danmaku from "./danmaku";

export default class Video {
    constructor(video, canvas, cid) {
        this.video = video;
        this.canvas = canvas;
        this.cid = cid;

        this.segmentLength = 360; // 视频弹幕6min一个包

        this.danmaku = new Danmaku(video, canvas, cid);

        this.bindEvent();
    }
    bindEvent() {
        // 回调时this有问题，用bind解决
        this.video.addEventListener('play', this.handleVideoPlay.bind(this));
        this.video.addEventListener('pause', this.hanldeVideoPause.bind(this));
        this.video.addEventListener('seeked', this.handleVideoSeek.bind(this));
        window.addEventListener('resize', this.handleVideoResize.bind(this));
        this.video.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
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
        const currentTime = this.video.currentTime;
        const currentSegment = Math.ceil(currentTime / this.segmentLength);
        this.danmaku.reqDanmaku(currentSegment);
    }
    handleVideoResize() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.danmaku.resize();
            clearTimeout(this.timer);
        }, 500);
    }
    handleTimeUpdate() {
        const currentTime = this.video.currentTime;
        const currentSegment = Math.ceil(currentTime / this.segmentLength);

        // 更改segment标号
        this.danmaku.setSegment(currentSegment)

        // 播放时，距离下一个segment剩余10s内，请求下一个segment的弹幕
        if (this.segmentLength - currentTime % this.segmentLength < 10) {
            this.danmaku.reqDanmaku(currentSegment + 1);
        }
    }
}