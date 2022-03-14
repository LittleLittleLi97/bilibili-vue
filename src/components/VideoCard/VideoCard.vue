<template>
    <div class="video-card">
        <div class="video-image"><a href=""><img src="./images/videoimage.png"></a></div>
        <div class="video-title">男生改造9㎡梦幻房间，电竞娱乐 家庭影院 智能家居</div>
        <div class="video-info">
            <i class="iconfont icon-UPzhu"></i>&nbsp;
            <span>造物员的故事</span>&nbsp;·&nbsp;<span>3-1</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'VideoCard',
}
</script>

<style scoped>
.video-card {
    width: 100%;
    height: 100%;
}
.video-card .video-image {
    width: 100%;
}
.video-image img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
}
.video-card .video-title {
    color: #18191C;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;

    height: 44px;


    margin-top: 5px;
}
.video-card .video-info {
    display: flex;
    align-items: center;
    color: #9499A0;
    font-size: 13px;
    margin-top: 5px;
}
</style>