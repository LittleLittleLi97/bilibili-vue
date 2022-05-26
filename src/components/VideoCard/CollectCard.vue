<template>
    <div class="collect-card">
        <div class="image-area">
            <img :src="videoInfo.cover" alt="">
        </div>
        <div class="right-info">
            <div class="title">{{ videoInfo.title }}</div>
            <div class="time font">{{ timeStr }}</div>
            <div class="author-name font"><i class="iconfont icon-UPzhu"></i>&nbsp;<span>{{ videoInfo.upper.name }}</span></div>
        </div>
    </div>
</template>

<script>
import { computed, reactive } from 'vue'

import { durationToStr } from '@/utils/index.js'
export default {
    name: 'CollectCard',
    props: {
        videoInfo: {
            type: Object,
            default: {},
        }
    },
    setup(props) {
        const timeStr = computed(()=>durationToStr(props.videoInfo.duration));
        return {
            videoInfo: props.videoInfo,
            timeStr,
        }
    }
}
</script>

<style scoped lang="less">
.collect-card {
    display: flex;

    padding: 8px 20px;

    .image-area {
        width: 128px;
        height: 72px;

        img {
            width: 100%;
            height: 100%;
            
            border-radius: 3px;
        }
    }
    .right-info {
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-left: 10px;

        .title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;

            width: 190px;
            height: 36px;

            color: var(--text1);
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
        }
        // 右侧下方文字统一样式
        .font {
            font-size: 12px;
            color: var(--text3);
            line-height: 14px;
        }
        .author-name {
            display: flex;
            align-items: center;
        }
    }
}
</style>