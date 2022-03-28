<template>
    <MiniHeader/>
    <div class="video-frame">
    </div>
</template>

<script>
import MiniHeader from '../TotalHeader/MiniHeader.vue'
export default {
    name:'VideoPage',
    components: {
        MiniHeader,
    }
}
</script>

<style scoped lang="less">
    .video-frame {
        height: 1000px;
    }
</style>