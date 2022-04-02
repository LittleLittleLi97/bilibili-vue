<template>
    <div class="section">
        <AreaHeader :videoType="sectionType.videoType" />
        <div class="card-list">
            <VideoCard v-for="(item, index) in videoList" :key="index"
                :videoInfo="item"
            />
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import AreaHeader from './AreaHeader.vue'
import VideoCard from '@/components/VideoCard/VideoCard.vue'
export default {
    name:'Section',
    components:{
        AreaHeader,
        VideoCard
    },
    props:["sectionType", "videoList"],
    setup(props) {
        const videoList = computed(()=>props.videoList);
        return {
            sectionType: props.sectionType,
            videoList,
        }
    }
}
</script>

<style scoped>
.section {
    margin: 30px 0;
}
.section .card-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 12px;

    margin-top: 10px;
}
</style>