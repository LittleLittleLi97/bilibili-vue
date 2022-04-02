<template>
    <TotalHeader/>
    <div class="main-frame">
        <div class="main-recommend">
            <Carousel class="carousel"/>
            <VideoCard v-for="(item, index) in recommendVideoList" :key="index"
                :videoInfo="item" />
        </div>
        <Section v-for="(item, index) in sectionList" :key="index" 
            :sectionType="item"
            :videoList="videoList[item.rid] && videoList[item.rid].archives"
        />
        <SectionWithRank/>
    </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'

import TotalHeader from '@/components/TotalHeader/index.vue'
import Carousel from '@/components/Carousel/index.vue'
import VideoCard from '@/components/VideoCard/VideoCard.vue'
import Section from '@/components/Section/Section.vue'
import SectionWithRank from '@/components/Section/SectionWithRank.vue'
export default {
    name:'HomePage',
    components:{
        TotalHeader,
        Carousel,
        VideoCard,
        Section,
        SectionWithRank,
    },
    setup(props) {
        const store = useStore();
        // main-recommend区域
        function recommendConstruct(){
            const rid = 27;
            const num = 6;
            const recommendVideoList = computed(()=>store.state.HomePage.videoList[rid] && store.state.HomePage.videoList[rid].archives);
            onMounted(()=>{
                store.dispatch('HomePage/getVideoList', {rid, num});
            })
            return {
                recommendVideoList,
            }
        }
        // section区域
        function sectionConstruct(){
            const sectionList = reactive([
                {videoType:"动画", rid:1, num:5},
                {videoType:"国创", rid:167, num:5}
            ]);
            const videoList = computed(()=>store.state.HomePage.videoList);
            onMounted(()=>{
                sectionList.forEach((item)=>store.dispatch('HomePage/getVideoList', {rid:item.rid, num:item.num}));
            })
            return {
                sectionList,
                videoList,
            }
        }
        return {
            ...recommendConstruct(),
            ...sectionConstruct(),
        }
    }
}
</script>

<style scoped>
/* 主框架 */
.main-frame {
    padding: 0 56px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
}
/* 主页推荐区 */
.main-frame .main-recommend {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px 12px;

    /* 与下面Seciton的边距 */
    margin-bottom: 50px;
}
.main-recommend .carousel {
    grid-column: 1/3;
    grid-row: 1/3;
}
</style>