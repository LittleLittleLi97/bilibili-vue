<template>
    <div class="block" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <div class="image-list">
            <div class="image-item" v-for="(item, index) in carouselList" :key="index">
                <router-link :to="`/video/${item.bvid}`" target="_blank">
                    <transition>
                    <img 
                        :src="item.image_url"
                        class="image-link"
                        v-show="currentIndex === index"
                    >
                    </transition>
                </router-link>
            </div>
        </div>
        <div class="turn-page">
            <div class="turn-page-button" @click="changeIndex(currentIndex - 1)">
                <i class="iconfont icon-prev"></i>
            </div>
            <div class="turn-page-button" @click="changeIndex(currentIndex + 1)">
                <i class="iconfont icon-next"></i>
            </div>
        </div>
        <div class="dot">
            <div class="dot-item"
                :style="currentIndex === index-1 ? 'width:14px; height:14px;' : ''"
                v-for="index in imageLength"
                @click="changeIndex(index-1)"
            ></div>
        </div>
        <div class="image-title">{{ carouselList[currentIndex]&&carouselList[currentIndex].title }}</div>
        <div class="carousel-mask" :style="`background-color:${carouselList[currentIndex]&&carouselList[currentIndex].RGB};`"></div>
    </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex';
export default {
    name:'Carousel',
    setup(props) {
        const store = useStore();
        // 准备数据
        const carouselList = computed(()=>store.state.HomePage.carouselList);
        const imageLength = computed(()=>carouselList.value.length);
        // 定时器
        const currentIndex = ref(0);
        let timer = null;
        function autoplay(){
            clearInterval(timer);
            timer = setInterval(() => {
                currentIndex.value += 1;
            }, 3000);
        }
        watch(currentIndex, (value)=>{
            if (currentIndex.value >= imageLength.value) currentIndex.value = 0;
            else if (currentIndex.value < 0) currentIndex.value = imageLength.value - 1;
        })
        function changeIndex(index){
            currentIndex.value = index;
            clearInterval(timer);
            autoplay();
        }
        function mouseEnter(){
            clearInterval(timer);
            timer = null;
        }
        function mouseLeave(){
            autoplay();
        }
        onMounted(()=>{
            autoplay();
            store.dispatch('HomePage/getCarouselInfo');
        })
        onBeforeUnmount(()=>{
            clearInterval(timer);
            timer = null;
        })
        return {
            carouselList,
            imageLength,
            currentIndex,
            changeIndex,
            mouseEnter,
            mouseLeave,
        }
    }
}
</script>

<style scoped lang="less">
.block {
    position: relative;

    width: 100%;
    height: 83.5%;

    border-radius: 6px;
    overflow: hidden;

    .image-list {
        position: relative;

        .image-item {
            position: absolute;
            left: 0;
            top: 0;

            .image-link {
                width: 100%;
                height: 100%;
            }
        }
    }
    .turn-page {
        display: flex;

        position: absolute;
        right: 10px;
        bottom: 20px;
        z-index: 2;

        .turn-page-button {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 28px;
            height: 28px;

            margin: 0 8px;

            border-radius: 8px;

            background-color: rgba(225, 225, 225, 0.2);

            cursor: pointer;

            &:hover {
                background-color: rgba(225, 225, 225, 0.5);
            }
            .iconfont {
                color: #fff;
                font-weight: 1000;
            }
        }
    }
    .dot {
        display: flex;
        align-items: center;

        position: absolute;
        left: 20px;
        bottom: 20px;
        z-index: 2;

        .dot-item {
            width: 8px;
            height: 8px;

            border-radius: 50%;

            margin: 0 5px;

            background-color: #fff;

            cursor: pointer;
        }
    }
    .image-title {
        position: absolute;
        left: 20px;
        bottom: 50px;
        z-index: 2;

        font-size: 18px;
        font-weight: 400;
        color: #fff;
    }
    .carousel-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;

        height: 850px;
        background-color: #fff;
        -webkit-mask-image: linear-gradient(0,#2f3238 11%,transparent 20%);

        // mask盖住图片会阻止点击事件，使用此来解决
        pointer-events: none;
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 0.2s;
}
.v-enter-from {
    transform: translateX(100%);
}
.v-leave-to {
    transform: translateX(-100%);
}
</style>