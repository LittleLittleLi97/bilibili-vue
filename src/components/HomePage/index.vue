<template>
    <div class="main-frame">
        <div class="main-recommend">
            <Carousel class="carousel"/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 主框架 */
.main-frame {
    padding: 0 56px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
}
/* 主页推荐区 */
.main-frame .main-recommend {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px 10px;
}
.carousel {
    grid-column: 1/3;
    grid-row: 1/3;
}
.card {
    width: 210px;
    height: 180px;
    background-color: #bfa;
}
</style>