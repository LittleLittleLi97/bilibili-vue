<template>
    <div class="section-with-rank">

        <div class="area-left">
            <AreaHeader :videoType="sectionType.videoType" :svg="sectionType.svg" />
            <div class="card-list">
                <VideoCard v-for="(item, index) in videoList" :key="index"
                :videoInfo="item"
            />
            </div>
        </div>

        <Rank :rankList="rankList"/>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import AreaHeader from './AreaHeader.vue'
import VideoCard from '@/components/VideoCard/VideoCard.vue'
import Rank from './Rank.vue'
export default {
    name:'SectionWithRank',
    components:{
        AreaHeader,
        VideoCard,
        Rank,
    },
    props:["sectionType", "videoList", "rankList"],
    setup(props) {
        const videoList = computed(()=>props.videoList);
        const rankList = computed(()=>props.rankList);
        return {
            sectionType: props.sectionType,
            videoList,
            rankList,
        }
    }
}
</script>

<style scoped>
.section-with-rank {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px 12px;

    margin: 30px 0;
}
/* 左侧卡片区域 */
.section-with-rank .area-left {
    grid-column: 1/5;
}
.area-left .card-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px 12px;

    margin-top: 10px;
}
/* 右侧排行榜 */
</style>