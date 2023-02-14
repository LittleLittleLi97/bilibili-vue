<template>
    <!-- 视频防盗链鉴权，暂时使用此链接 -->
    <canvas ref="canvasBox"></canvas>
    <!-- <iframe :src="`//player.bilibili.com/player.html?aid=213485948&bvid=${videoInfo.bvid}&cid=${videoInfo.cid}`" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="600px"> </iframe> -->
    <!-- <video ref="videoBox" controls src="/video/upgcxcode/93/11/710761193/710761193_nb2-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1676006568&gen=playurlv2&os=bcache&oi=1021152223&trid=0000c6d197caa4544a3bbf7b8b4730a3cf65u&mid=0&platform=pc&upsig=a2939e59b8b84d5da3f4a2c3af8e04b4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=86604&bvc=vod&nettype=0&orderid=0,3&buvid=&build=0&agrr=1&bw=41463&logo=80000000"></video> -->
    <!-- <video :src="`https://api.bilibili.com/x/player/playurl?bvid=${videoInfo.bvid}&cid=${videoInfo.cid}`"></video> -->
    <video ref="videoBox" src="./src/temp.mp4" controls></video>
</template>

<script>
import { ref, onMounted } from 'vue'

import { reqDanmakuProtobuf } from '@/api/index.js'
import Video from '@/utils/video/video.js'
export default {
    name: 'Video',
    props: ['cid'],
    setup(props) {
        const canvasBox = ref();
        const videoBox = ref();
        onMounted(()=>{
            const danmakuResult = reqDanmakuProtobuf(1, props.cid, 1);
            danmakuResult.then((result)=>{
                new Video(videoBox.value, canvasBox.value, result.data, 'protobuf');
            })
        })
        return {
            canvasBox,
            videoBox
        }
    }
}
</script>

<style scoped lang="less">
video {
    width: 100%;
    height: 100%;

    object-fit: scale-down;
}
canvas {
    position: absolute;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 100%;
}
</style>

