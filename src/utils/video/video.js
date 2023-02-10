import Danmaku from "./danmaku";

export default class Video {
    constructor(video, canvas, danmakuList) {
        this.video = video;
        this.canvas = canvas;

        this.danmaku = new Danmaku(video, canvas, danmakuList);

        this.bindEvent();
    }
    bindEvent() {
        this.video.addEventListener('play', this.handleVideoPlay, false);
        this.video.addEventListener('pause', this.hanldeVideoPause, false);
        this.video.addEventListener('seeked', this.handleVideoSeek, false);
    }
    handleVideoPlay() {
        this.danmaku.paused = false;
        this.danmaku.render();
    }
    hanldeVideoPause() {
        window.videoDanmaku.paused = true;
    }
    handleVideoSeek() {
        window.videoDanmaku.reset();
    }
}