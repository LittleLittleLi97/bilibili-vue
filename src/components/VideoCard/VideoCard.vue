<template>
    <div class="video-card" v-if="videoInfo">
        <router-link :to="videoInfo.toVideoUrl" target="_blank">
            <ImageArea :pic="videoInfo.pic" :playNum="videoInfo.playNum" :likeNum="videoInfo.likeNum" :durationStr="videoInfo.durationStr" />
            <div class="video-title common-fontblue">{{ videoInfo.title }}</div>
        </router-link>
        <a class="video-info common-fontblue" href="">
            <i class="iconfont icon-UPzhu"></i>&nbsp;
            <span>{{ videoInfo.authorName }}</span>&nbsp;·&nbsp;<span>{{ videoInfo.pubDate }}</span>
        </a>
    </div>
</template>

<script>
import ImageArea from './ImageArea.vue'

import { computed } from 'vue'

import { parseVideoInfo } from '@/utils/index.js'
export default {
    name:'VideoCard',
    components:{
        ImageArea,
    },
    props:["videoInfo"],
    setup(props) {
        const videoInfo = computed(()=>{
            if (props.videoInfo) return parseVideoInfo(props.videoInfo);
            else return undefined;
        });
        // const videoInfo = computed(()=>props.videoInfo);
        // const time = computed(()=>{
        //     return changeTime(props.videoInfo && props.videoInfo.pubdate*1000);
        // })
        // const playNum = computed(()=>{
        //     return changeNum(props.videoInfo && props.videoInfo.stat.view);
        // })
        // const likeNum = computed(()=>{
        //     return changeNum(props.videoInfo && props.videoInfo.stat.like);
        // });
        // const durationStr = computed(()=>{
        //     if (props.videoInfo) {
        //         const duration = props.videoInfo.duration;
        //         let mm = parseInt(duration / 60);
        //         let s = duration - mm * 60;
        //         if (mm < 10) mm = '0' + mm;
        //         if (s < 10) s = '0' + s;
        //         return mm + ':' + s;
        //     }
        //     return undefined;
        // })
        // const toUrl = computed(()=>{
        //     return props.videoInfo && `/video/${props.videoInfo.bvid}`;
        // })
        return {
            videoInfo,
            // time,
            // playNum,
            // likeNum,
            // durationStr,
            // toUrl,
        }
    }
}
</script>

<style scoped lang="less">
.video-card {
    width: 100%;
    height: 100%;

    .video-title {
        // 文字溢出隐藏，用...代替 https://blog.csdn.net/liqun_super/article/details/109747014
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;

        color: #18191C;
        font-size: 15px;
        font-weight: 500;
        line-height: 22px;

        height: 44px;


        margin-top: 5px;
    }
    .video-info {
        // 使用flex时，hover触发的范围为一整行，改为inline-flex，hover触发的范围只有文字部分的大小
        display: inline-flex;
        align-items: center;

        color: #9499A0;
        font-size: 13px;

        margin-top: 5px;
    }
}
</style>