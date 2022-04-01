<template>
    <div class="video-card">
        <div class="video-image"><a href=""><img :src="videoInfo && videoInfo.pic"></a></div>
        <a class="video-title common-fontblue" href="">{{ videoInfo && videoInfo.title }}</a>
        <a class="video-info common-fontblue" href="">
            <i class="iconfont icon-UPzhu"></i>&nbsp;
            <span>{{ videoInfo && videoInfo.owner.name }}</span>&nbsp;·&nbsp;<span>3-1</span>
        </a>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    name:'VideoCard',
    props:["rid", "videoIndex"],
    setup(props) {
        const store = useStore();
        const videoInfo = computed(()=>{
            // videoList可能已经有了值，但是videoList中的数据是逐步添加进来的，所以还要判断一下对应的rid是否已经有了值
            return store.state.HomePage.videoList && store.state.HomePage.videoList[props.rid] && store.state.HomePage.videoList[props.rid].archives[props.videoIndex];
        })
        return {
            videoInfo,
        }
    }
}
</script>

<style scoped lang="less">
.video-card {
    width: 100%;
    height: 100%;

    .video-image {
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
    }
    .video-title {
        display: block;

        color: #18191C;
        font-size: 15px;
        font-weight: 500;
        line-height: 22px;

        height: 44px;


        margin-top: 5px;
    }
    .video-info {
        // 使用flex时，hover触发的范围为一整行，改为inline-flex，hover触发的范围只有文字部分的大小
        display: inline-flex;
        align-items: center;

        color: #9499A0;
        font-size: 13px;

        margin-top: 5px;
    }
}
</style>