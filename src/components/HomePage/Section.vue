<template>
    <div class="section">
        <AreaHeader/>
        <div class="card-list">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    </div>
</template>

<script>
import AreaHeader from './AreaHeader.vue'
export default {
    name:'Section',
    components:{
        AreaHeader
    },
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