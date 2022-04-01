<template>
    <div class="section">
        <AreaHeader/>
        <div class="card-list">
            <!-- <VideoCard v-if="videoList" v-for="(item, index) in videoList.archives" :key="index" :videoInfo="item" /> -->
            <VideoCard v-for="index in sectionType.num" :key="index" :rid="sectionType.rid" :videoIndex="index-1" />
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import AreaHeader from './AreaHeader.vue'
export default {
    name:'Section',
    components:{
        AreaHeader
    },
    props:["sectionType"],
    setup(props) {
        // const store = useStore();
        // const videoList = computed(()=>{
        //     return store.state.HomePage.videoList[props.sectionType.rid];
        // })
        return {
            sectionType: props.sectionType,
            // videoList
        }
    }
}
</script>

<style scoped>
.section .card-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 12px;

    margin-top: 10px;
}
</style>