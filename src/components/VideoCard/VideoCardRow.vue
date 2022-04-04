<template>
    <div class="video-card-row">
        <router-link :to="toUrl" target="_blank">
            <div class="video-image"><img :src="pic" alt=""></div>
        </router-link>
        <div class="video-info">
            <router-link :to="toUrl" target="_blank">
                <div class="info-title">{{ title }}</div>
            </router-link>
            <div class="info-name">{{ authorName }}</div>
            <div class="info-popular">{{ playNum }} 播放 · {{ danmaku }} 弹幕</div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'

import { changeNum } from '@/utils'
export default {
    // 放在video页面的横向卡片
    name:'VideoCardRow',
    props:["videoInfo"],
    setup(props) {
        const pic = computed(()=>props.videoInfo.pic);
        const title = computed(()=>props.videoInfo.title);
        const authorName = computed(()=>props.videoInfo.owner.name);
        const playNum = computed(()=>changeNum(props.videoInfo.stat.view));
        const danmaku = computed(()=>props.videoInfo.stat.danmaku);
        const toUrl = computed(()=>`/video/${props.videoInfo.bvid}`);
        return {
            pic,
            title,
            authorName,
            playNum,
            danmaku,
            toUrl,
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