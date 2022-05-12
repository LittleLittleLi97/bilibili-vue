<template>
    <div class="dynamic-card common-bgcgrey">
        <div class="face"><img src="./images/face.jpeg" alt=""></div>
        <div class="video-info">
            <div class="author-name">AI算法与图像处理</div>
            <div class="title">Bilili-Vue3前端教学，就在小呀小呀小97的课堂</div>
            <div class="pub-date">5月9日</div>
        </div>
        <div class="right">
            <div class="video-image"><img src="./images/videoimage.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DynamicCard',
}
</script>

<style scoped lang="less">
.dynamic-card {
    display: flex;

    padding: 12px 20px;

    .face {
        width: 34px;
        height: 34px;

        img {
            width: 100%;
            height: 100%;

            border-radius: 50%;
        }
    }
    .video-info {
        flex: 1;

        margin-left: 15px;

        .author-name {
            color: var(--text2);
            font-size: 13px;
        }
        .title {
            color: var(--text1);
            font-size: 14px;

            margin-top: 5px;
        }
        .pub-date {
            color: var(--text3);
            font-size: 12px;

            margin-top: 5px;
        }
    }
    .right {
        display: flex;
        justify-content: center;
        align-items: center;

        .video-image {
            width: 82px;
            height: 46px;

            img {
                width: 100%;
                height: 100%;

                border-radius: 3px;
            }
        }
    }
}
</style>