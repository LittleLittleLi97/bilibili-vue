<template>
    <TotalHeader/>
    <div class="main-frame">
        <div class="main-recommend">
            <Carousel class="carousel"/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
        <Section/>
        <SectionWithRank/>
    </div>
</template>

<script>
import TotalHeader from '../TotalHeader/index.vue'
import Carousel from '../Carousel/index.vue'
import VideoCard from '../VideoCard/VideoCard.vue'
import Section from './Section.vue'
import SectionWithRank from './SectionWithRank.vue'
export default {
    name:'HomePage',
    components:{
        TotalHeader,
        Carousel,
        VideoCard,
        Section,
        SectionWithRank,
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