<template>
    <div class="video-card" v-if="videoInfo">
        <a :href="videoInfo.short_link">
            <div class="video-image"><img :src="videoInfo.pic"></div>
            <div class="video-title common-fontblue" href="">{{ videoInfo.title }}</div>
        </a>
        <a class="video-info common-fontblue" href="">
            <i class="iconfont icon-UPzhu"></i>&nbsp;
            <span>{{ videoInfo.owner.name }}</span>&nbsp;·&nbsp;<span>{{ time.M }}-{{ time.D }}</span>
        </a>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import { changeTime } from '@/utils/index.js'
export default {
    name:'VideoCard',
    props:["videoInfo"],
    setup(props) {
        const videoInfo = computed(()=>props.videoInfo);
        const time = computed(()=>{
            return changeTime(props.videoInfo && props.videoInfo.pubdate*1000);
        })
        return {
            videoInfo,
            time,
        }
    }
}
</script>

<style scoped lang="less">
.video-card {
    width: 100%;
    height: 100%;

    .video-image {
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
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

        margin-top: 5px;
    }
}
</style>