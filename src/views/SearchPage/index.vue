<template>
    <MiniHeader/>
    <div class="main-frame">
        <!-- 搜索框直接用MiniHeader的吧 -->
        <!-- <div class="search-area">
            <div class="search-box">
                <i class="iconfont icon-search"></i>
                <input class="search-input" type="text" placeholder="输入关键字搜索">
                <div class="search-btn">搜索</div>
            </div>
        </div> -->
        <div class="video-area">
            <VideoCard  v-for="(item, index) in videoList" :key="index" :videoInfo="item" />
        </div>
    </div>
</template>

<script>
import MiniHeader from '@/components/TotalHeader/MiniHeader.vue'
import VideoCard from '@/components/VideoCard/VideoCard.vue'

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
    name:'SearchPage',
    components:{
        MiniHeader,
        VideoCard,
    },
    setup(props) {
        const route = useRoute();
        const store = useStore();

        const videoList = computed(()=>store.state.Search.searchResult && store.state.Search.searchResult.video);
        onMounted(() => {
            store.dispatch('Search/getSearch', route.query.keyword);
        })
        return {
            videoList,
        }
    }
}
</script>

<style scoped lang="less">
    .main-frame {
        padding: 100px 56px 0 56px;

        box-sizing: border-box;

        .video-area {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 20px 12px;
        }
    }
</style>