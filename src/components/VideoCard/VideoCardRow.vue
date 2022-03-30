<template>
    <div class="video-card-row">
        <div class="video-image"><img src="./images/videoimage2.png" alt=""></div>
        <div class="video-info">
            <div class="info-title">世之奇伟、瑰怪，非常之观，常在于险远</div>
            <div class="info-name">hisname</div>
            <div class="info-popular">35.2万 播放 · 1237 弹幕</div>
        </div>
    </div>
</template>

<script>
export default {
    // 放在video页面的横向卡片
    name:'VideoCardRow',
    setup(props) {
        
    }
}
</script>

<style scoped lang="less">
.video-card-row {
    display: flex;
    justify-content: space-between;

    .video-image {
        width: 140px;
        height: 80px;

        img {
            width: 100%;
            height: 100%;

            border-radius: 2px;
        }
    }
    .video-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        flex: 1;

        margin-left: 10px;

        .info-title {
            font-size: 14px;
            color: #222222;
            font-weight: 500;
            line-height: 18px;
        }
        .info-name {
            font-size: 12px;
            color: #999999;
        }
        .info-popular {
            font-size: 12px;
            color: #999999;

            margin-bottom: 2px;
        }
    }
}
</style>