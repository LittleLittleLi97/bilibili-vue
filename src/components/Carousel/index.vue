<template>
  <div class="block">
    <el-carousel trigger="click">
      <el-carousel-item><img src="./images/01.png"></el-carousel-item>
      <el-carousel-item><img src="./images/02.png"></el-carousel-item>
      <el-carousel-item><img src="./images/03.png"></el-carousel-item>
      <el-carousel-item><img src="./images/04.png"></el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name:'Carousel',
}
</script>

<style>
img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
}
</style>