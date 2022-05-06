<template>
    <div class="video-card" v-if="videoInfo">
        <router-link :to="videoInfo.toVideoUrl" target="_blank" class="image-area">
            <ImageArea :pic="videoInfo.pic" :playNum="videoInfo.playNum" :likeNum="videoInfo.likeNum" :durationStr="videoInfo.durationStr" />
        </router-link>
        <router-link :to="videoInfo.toVideoUrl" target="_blank">
            <div class="video-title common-fontblue" v-html="videoInfo.title"></div>
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
            if (props.videoInfo) return parseVideoInfo(props.videoInfo, "@672w_378h_1c_100q.webp");
            else return undefined;
        });
        return {
            videoInfo,
        }
    }
}
</script>

<style scoped lang="less">
.video-card {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    .image-area {
        flex: 1;
    }

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

        height: 13px;

        margin-top: 5px;
    }
}
</style>