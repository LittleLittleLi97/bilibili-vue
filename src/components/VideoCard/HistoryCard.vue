<template>
    <router-link :to="`/video/${videoInfo.history.bvid}`" target="_blank" class="history-card">
        <div class="image-area">
            <img v-lazy="videoInfo.cover" alt="">
        </div>
        <div class="right-info">
            <div class="title">{{ videoInfo.title }}</div>
            <div class="time font">{{ videoInfo.showTime }}</div>
            <div class="author-name font">{{ videoInfo.author_name.length > 0 ? videoInfo.author_name : videoInfo.show_title }}</div>
        </div>
    </router-link>
</template>

<script>
import { computed } from 'vue'

import { changeTime } from '@/utils/index.js'
export default {
    name: 'HistoryCard',
    props: {
        videoInfo: {
            type: Object,
            default: {},
        }
    },
    setup(props) {
        return {
            videoInfo: props.videoInfo,
        }
    }
}
</script>

<style scoped lang="less">
.history-card {
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
    }
}
</style>