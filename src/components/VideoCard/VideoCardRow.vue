<template>
    <div class="video-card-row" v-if="videoInfo">
        <router-link :to="videoInfo.toVideoUrl" target="_blank">
            <div class="video-image"><img :src="videoInfo.pic" alt=""></div>
        </router-link>
        <div class="video-info">
            <router-link :to="videoInfo.toVideoUrl" target="_blank">
                <div class="info-title">{{ videoInfo.title }}</div>
            </router-link>
            <div class="info-name">{{ videoInfo.authorName }}</div>
            <div class="info-popular">{{ videoInfo.playNum }} 播放 · {{ videoInfo.danmaku }} 弹幕</div>
        </div>
    </div>
</template>

<script>
import ImageArea from './ImageArea.vue'

import { computed } from 'vue'

import { parseVideoInfo } from '@/utils'
export default {
    // 放在video页面的横向卡片
    name:'VideoCardRow',
    components:{
        ImageArea,
    },
    props:["videoInfo"],
    setup(props) {
        const videoInfo = computed(()=>{
            if (props.videoInfo) return parseVideoInfo(props.videoInfo, "@336w_190h_1c.webp");
            else return undefined;
        });
        return {
            videoInfo
        }
    }
}
</script>

<style scoped lang="less">
.video-card-row {
    display: flex;
    justify-content: space-between;

    .video-image {
        width: 140px;
        height: 80px;

        img {
            width: 100%;
            height: 100%;

            border-radius: 2px;
        }
    }
    .video-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        flex: 1;

        margin-left: 10px;

        .info-title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;

            font-size: 14px;
            color: #222222;
            font-weight: 500;
            line-height: 18px;
        }
        .info-name {
            font-size: 12px;
            color: #999999;
        }
        .info-popular {
            font-size: 12px;
            color: #999999;

            margin-bottom: 2px;
        }
    }
}
</style>