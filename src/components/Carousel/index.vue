<template>
    <div class="block">
        <el-carousel indicator-position="outside" trigger="click" arrow="always">
            <el-carousel-item><img src="./images/01.png"></el-carousel-item>
            <el-carousel-item><img src="./images/02.png"></el-carousel-item>
            <el-carousel-item><img src="./images/03.png"></el-carousel-item>
            <el-carousel-item><img src="./images/04.png"></el-carousel-item>
        </el-carousel>
        <!-- 遮罩层问题以后用js来解决 -->
        <div class="carousel-mask"></div>
    </div>
</template>

<script>
export default {
    name:'Carousel',
}
</script>

<style scoped>
.block {
    position: relative;

    width: 100%;
    height: 82.5%;

    border-radius: 6px;
    overflow: hidden;
}
.block img {
    width: 100%;
    height: 100%;
}
.el-carousel__button {
    /* 加上scoped后，此选择器不能生效 */
}
.block .carousel-mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    height: 700px;
    /* background-color: #adc; */
    -webkit-mask-image: linear-gradient(0,#2f3238 11%,transparent 20%);
}
</style>