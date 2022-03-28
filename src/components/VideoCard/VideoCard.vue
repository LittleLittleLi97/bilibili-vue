<template>
    <div class="video-card">
        <div class="video-image"><a href=""><img src="./images/videoimage.png"></a></div>
        <a class="video-title common-fontblue" href="">男生改造9㎡梦幻房间，电竞娱乐 家庭影院 智能家居</a>
        <a class="video-info common-fontblue" href="">
            <i class="iconfont icon-UPzhu"></i>&nbsp;
            <span>造物员的故事</span>&nbsp;·&nbsp;<span>3-1</span>
        </a>
    </div>
</template>

<script>
export default {
    name:'VideoCard',
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