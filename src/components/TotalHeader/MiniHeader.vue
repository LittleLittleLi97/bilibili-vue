<template>
    <div class="banner" :class="{'banner-slide':slideFlag}">
        <svg class="icon icon-bilibili" aria-hidden="true" v-show="slideFlag">
            <use xlink:href="#icon-bilibili"></use>
        </svg>
        <ul class="type-list">
            <li class="type-item"><a href=""><i class="iconfont icon-bilibili-line" v-show="!slideFlag"></i>首页</a></li>
            <li class="type-item"><a href="">番剧</a></li>
            <li class="type-item"><a href="">直播</a></li>
            <li class="type-item"><a href="">游戏中心</a></li>
            <li class="type-item"><a href="">会员购</a></li>
            <li class="type-item"><a href="">漫画</a></li>
            <li class="type-item"><a href="">赛事</a></li>
            <!-- <li class="type-item"><a href=""><i class="iconfont icon-iphone"></i>下载APP</a></li> -->
        </ul>
        <div class="search" ref="searchDiv">
            <div class="input-area" :style="inputAreaFocusStyle">
                <input type="text" placeholder="请输入搜索字段" @click="inputClick" :style="inputFocusStyle">
                <div class="search-button">
                    <i class="iconfont icon-search"></i>
                </div>
            </div>
            <div class="recommend-area" v-show="recommendShow">
                <div class="recommend-history">
                    <div class="recommend-title">搜索历史</div>
                    <ul class="history-list">
                        <li><a href="">凡人修仙传</a></li>
                        <li><a href="">猫和老鼠</a></li>
                        <li><a href="">猫和老鼠</a></li>
                        <li><a href="">猫和老鼠</a></li>
                        <li><a href="">猫和老鼠</a></li>
                        <li><a href="">猫和老鼠</a></li>
                        <li><a href="">猫和老鼠</a></li>
                        <li><a href="">猫和老鼠</a></li>
                        <li><a href="">猫和老鼠</a></li>
                        <li><a href="">猫和老鼠</a></li>
                    </ul>
                </div>
                <div class="recommend-hot">
                    <div class="recommend-title">热搜</div>
                    <ul class="hot-list">
                        <li><a href=""><span class="hot-rank hot-rank-top">1</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank hot-rank-top">2</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank hot-rank-top">3</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank">4</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank">5</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank">6</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank">7</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank">8</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank">9</span><span class="hot-title">今天你码代码了吗</span></a></li>
                        <li><a href=""><span class="hot-rank">10</span><span class="hot-title">今天你码代码了吗</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <ul class="user-manipulate">
            <li class="user-item"><a href="">登录</a></li>
            <li class="user-item">
                <a href=""><i class="iconfont icon-icon_dingdao_dahuiyuan"></i><span>大会员</span></a>
                <!-- <div class="vip-none">
                    <div class="vip-none-title">精彩推荐</div>
                    <img src="">
                    <div class="blue-button">开通大会员</div>
                </div> -->
            </li>
            <li class="user-item"><a href=""><i class="iconfont icon-mail"></i><span>消息</span></a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-fengche"></i><span>动态</span></a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-shoucang"></i><span>收藏</span></a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-history"></i><span>历史记录</span></a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-icon"></i><span>创作中心</span></a></li>
        </ul>
        <div class="upload"><span>投稿</span></div>
    </div>
</template>

<script>
import {ref, reactive, onMounted, toRefs, toRef} from 'vue';
export default {
    name:'MiniHeader',
    setup(props) {
        function searchShowEvent(){
            let searchDiv = ref();
            let searchStyleControl = reactive({
                recommendShow: false,
                inputAreaFocusStyle: null,
                inputFocusStyle: null,
            })
            function inputClick(){
                searchStyleControl.inputAreaFocusStyle = "border-radius: 8px 8px 0 0;";
                searchStyleControl.inputFocusStyle = "background-color: #e3e5e7;";
                searchStyleControl.recommendShow = true;
            }
            onMounted(() => {
                document.addEventListener('click', (event)=>{
                    if (!searchDiv.value.contains(event.target)) {
                        searchStyleControl.inputAreaFocusStyle = "";
                        searchStyleControl.inputFocusStyle = "";
                        searchStyleControl.recommendShow = false;
                    }
                })
            })
            return {
                searchDiv,
                ...toRefs(searchStyleControl),
                inputClick
            }
        }
        function slideEvent(){
            let slideFlag = ref(false);
            onMounted(() => {
                window.addEventListener('scroll', ()=>{
                    let scrollTop = document.documentElement.scrollTop;
                    if (scrollTop > 40) slideFlag.value = true;
                    else slideFlag.value = false;
                })
            })
            return {
                slideFlag
            }
        }
        return {
            ...searchShowEvent(),
            ...slideEvent(),
        }
    }
}   
</script>

<style scoped lang="less">
    a {
        font-size: 14px;
        color: #fff;
    }
    .banner {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: absolute;

        width: 100%;
        padding: 0 24px;

        box-sizing: border-box;

        .type-list {
            display: flex;

            .type-item {
                margin-right: 8px;

                line-height: 64px;
            }
        }
        .search {
            flex: 1;

            position: relative;

            .input-area {
                display: flex;
                justify-content: center;
                align-items: center;

                
                flex: 1;

                height: 40px;
                padding: 0 5px;

                box-sizing: border-box;
                border: 1px solid #e3e5e7;
                border-radius: 8px;

                background-color: #f1f2f3;


                &:hover {
                    background-color: #fff;
                }
    
                input {
                    flex: 1;

                    height: 30px;

                    padding-left: 10px;
                    margin-right: 5px;

                    background-color: transparent;

                    box-sizing: border-box;
                    border: none;
                    border-radius: 8px;

                    color: #61666d;

                    outline: none;
                }
                .search-button {
                    // background-color: pink;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    height: 30px;
                    width: 30px;

                    border-radius: 8px;

                    cursor: pointer;

                    &:hover {
                        background-color: #e3e5e6;
                    }

                    .iconfont {
                        font-size: 20px;
                    }
                }
            }
            .recommend-area {
                    position: absolute;
                    top: 39px;
                    z-index: 100;

                    background-color: #fff;

                    width: 100%;

                    padding: 10px 0 20px 0;

                    border: 1px solid #e3e5e7;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                    
                    box-sizing: border-box;

                    // 推荐中标题的统一样式
                    .recommend-title {
                        font-size: 16px;
                        color: #18191c;

                        margin: 10px 0;
                        padding: 0 20px;

                        box-sizing: border-box;
                    }


                    .recommend-history {

                        .history-list {
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;

                            padding: 0 20px;
                            box-sizing: border-box;

                            a {
                                display: block;
                                font-size: 12px;
                                color: #18191c;

                                margin: 0 10px 10px 0;
                                padding: 7px 10px 8px 10px;

                                background-color: #f6f7f8;

                                border-radius: 6px;

                                box-sizing: border-box;

                                &:hover {
                                    color: #00aeec;
                                }
                            }
                        }
                    }
                    .recommend-hot {
                        .hot-list {
                            display: grid;
                            grid-template-rows: repeat(5,1fr);
                            grid-auto-flow: column;
                            grid-gap: 0 10px;
                            a {
                                display: flex;
                                justify-content: start;
                                align-items: center;

                                width: 100%;
                                height: 38px;

                                &:hover {
                                    background-color: #e3e5e7;
                                }
                                .hot-rank {
                                    display: flex;
                                    justify-content: center;

                                    font-size: 14px;
                                    color: #9499A0;

                                    width: 30px;

                                    margin-left: 10px;
                                }
                                .hot-rank-top {
                                    // 前3个rank使用此样式
                                    color: #18191c;
                                }
                                .hot-title {
                                    font-size: 14px;
                                    color: #18191c;

                                }
                            }
                        }
                    }
                }
        }
        .user-manipulate {
            display: flex;

            .user-item {
                display: flex;
                align-items: center;

                margin-left: 8px;

                a {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &:hover i {
                        animation: iconDance 0.5s 1;
                    }

                    i {
                        margin-bottom: 5px;
                    }
                }
            }
        }

        .upload {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 90px;
            height: 34px;

            margin-left: 12px;

            background-color: #fb7299;

            border-radius: 8px;

            cursor: pointer;

            span {
                font-size: 14px;
                color: #fff;
            }
        }
    }
    @keyframes iconDance {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(0, -5px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
    .banner-slide {
        position: fixed;
        z-index: 100;

        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

        animation: slideShow 0.5s 1 forwards;

        // a标签的统一颜色，除了右侧iconfont底下的字颜色不同
        a {
            color: #18191c;
        }
        .icon-bilibili {
            width: 60px;
            height: 64px;
            margin-right: 10px;
        }
        .user-manipulate {
            span {
                color: #61666d;
            }
        }
    }
    @keyframes slideShow {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>