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
        <div class="video-area" v-if="searchResult">
            <!-- 这里key一定要用后端给的id，用index的话，图片更新不了（可能被视为数据没有更新） -->
            <VideoCard v-for="(item, index) in searchResult.video" :key="item.id" :videoInfo="item" />
        </div>
        <div class="pagination-area">
            <el-pagination background layout="prev, pager, next" :page-count="numPages" v-model:current-page="currentPage" />
        </div>
    </div>
</template>

<script>
import MiniHeader from '@/components/TotalHeader/MiniHeader.vue'
import VideoCard from '@/components/VideoCard/VideoCard.vue'

import { computed, onMounted, onUpdated, ref, watch } from 'vue'
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

        // 切换页数
        const currentPage = ref(1);
        watch(currentPage, (newValue)=>{
            store.dispatch('Search/getSearchTypeForPage', {
                keyword: route.query.keyword,
                type: 'video',
                page: newValue
            });
            document.documentElement.scrollTop = 0;
        })

        // 切入页面时的数据准备
        const searchResult = computed(()=>store.state.Search.searchResult);
        const numPages = computed(()=>store.state.Search.numPages);
        onMounted(()=>{
            store.dispatch('Search/getSearch', route.query.keyword);
        })
        return {
            currentPage,
            searchResult,
            numPages,
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
            grid-template-rows: repeat(4, 1fr);
            grid-gap: 20px 12px;
        }
        .pagination-area {
            display: flex;
            justify-content: center;

            margin: 50px 0;
        }
    }
</style>