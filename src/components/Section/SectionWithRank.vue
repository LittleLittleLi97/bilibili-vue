<template>
    <div class="section-with-rank">

        <div class="area-left">
            <AreaHeader/>
            <div class="card-list">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        </div>

        <Rank/>
    </div>
</template>

<script>
import AreaHeader from './AreaHeader.vue'
import Rank from './Rank.vue'
export default {
    name:'SectionWithRank',
    components:{
        AreaHeader,
        Rank,
    }
}
</script>

<style scoped>
.section-with-rank {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px 12px;
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