<template>
    <div class="banner" :class="{'banner-slide':slideShow}">
        <router-link to="/">
            <svg class="icon icon-bilibili" aria-hidden="true" v-show="slideShow">
                <use xlink:href="#icon-bilibili"></use>
            </svg>
        </router-link>
        <ul class="type-list">
            <li class="type-item"><a href="javascript:;"><i class="iconfont icon-bilibili-line" v-show="!slideShow"></i>首页</a></li>
            <li class="type-item"><a href="javascript:;">番剧</a></li>
            <li class="type-item"><a href="javascript:;">直播</a></li>
            <li class="type-item"><a href="javascript:;">游戏中心</a></li>
            <li class="type-item"><a href="javascript:;">会员购</a></li>
            <li class="type-item"><a href="javascript:;">漫画</a></li>
            <li class="type-item"><a href="javascript:;">赛事</a></li>
            <!-- <li class="type-item"><a href=""><i class="iconfont icon-iphone"></i>下载APP</a></li> -->
        </ul>
        <div class="search" ref="searchDiv">
            <div class="input-area" :style="inputAreaFocusStyle">
                <input type="text" 
                    :placeholder="placeholderInfo.show_name" 
                    @click="inputClick" 
                    :style="inputFocusStyle" 
                    v-model="searchKeyword" 
                    @keyup.enter="searchJump(searchKeyword)"
                >
                <div class="search-button" @click="searchJump(searchKeyword)">
                    <i class="iconfont icon-search"></i>
                </div>
            </div>
            <div class="recommend-area" v-show="recommendShow">
                <div class="no-searching" v-show="!searchProposeShow">
                    <div class="recommend-history" v-show="historyList.length > 0">
                        <div class="recommend-title">搜索历史</div>
                        <ul class="history-list">
                            <li v-for="(item, index) in historyList" :key="index">
                                <div @click="searchJump(item)">{{ item }}</div>
                            </li>
                        </ul>
                    </div>
                    <div class="recommend-hot">
                        <div class="recommend-title">热搜</div>
                        <ul class="hot-list">
                            <!-- <li><a href=""><span class="hot-rank hot-rank-top">1</span><span class="hot-title">今天你码代码了吗</span></a></li> -->
                            <li v-for="(item, index) in hotSearchList" :key="item.id">
                                <div class="hot-item" @click="searchJump(item.keyword)">
                                    <span class="hot-rank" :class="{'hot-rank-top':item.id<=3}">{{ item.id }}</span>
                                    <span class="hot-title">{{ item.show_name }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="search-propose" v-show="searchProposeShow">
                    <div class="recommend-title">bilibili热搜</div>
                    <div class="propose-item" 
                        v-for="(item, index) in searchPropose" 
                        :key="item.value"
                        @click="searchJump(item.value)"
                    >
                        <span class="propose-rank" :class="{'propose-rank-top':index<3}">{{ parseInt(index) + 1 }}</span>
                        <span class="propose-title">{{ item.value }}</span>
                    </div>
                </div>
            </div>
        </div>
        <ul class="user-manipulate">
            <li class="user-item">
                <div class="login-btn" v-if="!isLogin" @click="openLoginWindow">登录</div>
                <div class="user-panel" v-else>
                    <div class="user-face"><img :src="loginInfo.face" alt=""></div>
                </div>
                <div class="pop-frame">
                    <PopoverUserPanel v-if="isLogin" style="left:-150px;" />
                </div>
            </li>
            <li class="user-item">
                <a href=""><i class="iconfont icon-icon_dingdao_dahuiyuan"></i><span>大会员</span></a>
                <div class="pop-frame">
                    <PopoverVIP style="left:-100px;" />
                </div>
            </li>
            <li class="user-item">
                <a href=""><i class="iconfont icon-mail"></i><span>消息</span></a>
                <div class="pop-frame">
                    <PopoverMessage v-if="isLogin" style="left:-20px;" />
                    <PopoverWithoutLogin v-else :clickBtnEvent="openLoginWindow" text="消息记录" style="left:-200px;" />
                </div>
            </li>
            <!-- 接口获取数据有问题，暂时不弄 -->
            <!-- <li class="user-item">
                <a href=""><i class="iconfont icon-fengche"></i><span>动态</span></a>
                <PopoverDynamic v-if="isLogin" style="left:-200px;" />
                <PopoverWithoutLogin v-else :clickBtnEvent="openLoginWindow" text="关注动态" style="left:-200px;" />
            </li> -->
            <li class="user-item">
                <a href=""><i class="iconfont icon-shoucang"></i><span>收藏</span></a>
                <div class="pop-frame">
                    <PopoverCollect v-if="isLogin" style="left:-300px;" />
                    <PopoverWithoutLogin v-else :clickBtnEvent="openLoginWindow" text="我的收藏" style="left:-200px;" />
                </div>
            </li>
            <li class="user-item">
                <a href=""><i class="iconfont icon-history"></i><span>历史记录</span></a>
                <div class="pop-frame">
                    <PopoverHistory v-if="isLogin" style="left:-200px"/>
                    <PopoverWithoutLogin v-else :clickBtnEvent="openLoginWindow" text="历史记录" style="left:-200px;" />
                </div>
            </li>
            <li class="user-item"><a href="javascript:;"><i class="iconfont icon-icon"></i><span>创作中心</span></a></li>
        </ul>
        <div class="upload"><span>投稿</span></div>
    </div>
    <Login v-if="isLoginExist" :closeLoginWindow="closeLoginWindow" />
</template>

<script>
import {ref, reactive, onMounted, toRefs, toRef, computed, watch, onBeforeUnmount} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'

import Login from '@/components/Login/index.vue'
import PopoverWithoutLogin from '@/components/Popover/PopoverWithoutLogin.vue'
import PopoverVIP from '@/components/Popover/PopoverVIP.vue'
import PopoverUserPanel from '@/components/Popover/PopoverUserPanel.vue'
import PopoverMessage from '@/components/Popover/PopoverMessage.vue'
import PopoverDynamic from '@/components/Popover/PopoverDynamic.vue'
import PopoverHistory from '@/components/Popover/PopoverHistory.vue'
import PopoverCollect from '@/components/Popover/PopoverCollect.vue'
export default {
    name:'MiniHeader',
    components:{
        Login,
        PopoverWithoutLogin,
        PopoverVIP,
        PopoverUserPanel,
        PopoverMessage,
        PopoverDynamic,
        PopoverHistory,
        PopoverCollect,
    },
    setup(props) {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        // 搜索样式和搜索控制
        function searchShowEvent(){
            // 点击搜索框的样式变化
            let searchDiv = ref();
            let searchStyleControl = reactive({
                recommendShow: false,
                inputAreaFocusStyle: null,
                inputFocusStyle: null,
            })
            // 添加样式
            function inputClick(){
                searchStyleControl.inputAreaFocusStyle = "border-radius: 8px 8px 0 0;";
                searchStyleControl.inputFocusStyle = "background-color: #e3e5e7;";
                searchStyleControl.recommendShow = true;
            }
            // 去除样式
            function removeStyle(){
                searchStyleControl.inputAreaFocusStyle = "";
                searchStyleControl.inputFocusStyle = "";
                searchStyleControl.recommendShow = false;
            }
            function mountClickFunction(event){
                if (!searchDiv.value.contains(event.target)) removeStyle();
            }
            onMounted(() => {
                document.addEventListener('click', mountClickFunction);
            })
            onBeforeUnmount(()=>{
                document.removeEventListener('click', mountClickFunction);
            })
            // 搜索控制
            const historyList = ref(JSON.parse(localStorage.getItem('history')) || []);
            function searchFunction(){
                const searchKeyword = ref();
                // 搜索跳转
                function searchJump(keyword){
                    store.dispatch('Search/getSearch', keyword);
                    router.push({
                        path:`/search`,
                        query: {
                            keyword: keyword
                        }
                    })
                    // 添加历史记录
                    const index = historyList.value.indexOf(keyword);
                    if (index !== -1) historyList.value.splice(index, 1);
                    historyList.value.unshift(keyword);
                    localStorage.setItem('history', JSON.stringify(historyList.value));
                    // 搜索后搜索框样式需要恢复
                    removeStyle();
                    store.dispatch('Search/clearSearchPropose'); // 跳转后清空搜索建议
                }

                // 搜索建议
                const searchPropose = computed(()=>store.state.Search.searchPropose);
                const searchProposeShow = computed(()=>Object.keys(searchPropose.value).length > 0);
                let searchProposeTimer;
                watch(()=>searchKeyword.value, ()=>{
                    clearTimeout(searchProposeTimer);
                    searchProposeTimer = setTimeout(() => {
                        store.dispatch('Search/getSearchPropose', searchKeyword.value);
                        clearTimeout(searchProposeTimer);
                    }, 200);
                })
            return {
                historyList,
                searchKeyword,
                searchJump,
                searchPropose,
                searchProposeShow,
            }
        }
            return {
                searchDiv,
                ...toRefs(searchStyleControl),
                inputClick,
                historyList,
                ...searchFunction(),
            }
        }
        // MiniHeader显示样式的控制，页面滑动后fixed到页面最顶部
        function slideEvent(){
            let slideLoctionFlag = ref(false);
            let slideShow = computed(()=>{
                return route.meta.MiniHeaderStatus || slideLoctionFlag.value;
            })
            onMounted(() => {
                window.addEventListener('scroll', ()=>{
                    let scrollTop = document.documentElement.scrollTop;
                    if (scrollTop > 40) slideLoctionFlag.value = true;
                    else slideLoctionFlag.value = false;
                })
            })
            return {
                slideShow,
            }
        }
        // 搜索框 数据加载
        function searchPanel(){
            const placeholderInfo = computed(()=>store.state.Search.placeholderInfo);
            const hotSearchList = computed(()=>store.state.Search.hotSearchList);
            onMounted(()=>{
                store.dispatch('Search/getPlaceholder');
                store.dispatch('Search/getHotSearch');
            })
            return {
                placeholderInfo,
                hotSearchList,
            }
        }
        // Login组件的控制
        function loginControl(){
            const isLoginExist = ref(false);
            function openLoginWindow(){
                isLoginExist.value = true;
            }
            function closeLoginWindow(){
                isLoginExist.value = false;
            }
            return {
                isLoginExist,
                openLoginWindow,
                closeLoginWindow,
            }
        }
        // 用户登录信息
        function acquireLoginInfo(){
            const isLogin = computed(()=>store.state.Login.isLogin);
            const loginInfo = computed(()=>store.state.Login.loginInfo);
            onMounted(()=>{
                store.dispatch('Login/getLoginInfo');
            })
            return {
                isLogin,
                loginInfo,
            }
        }
        return {
            ...searchShowEvent(),
            ...slideEvent(),
            ...searchPanel(),
            ...loginControl(),
            ...acquireLoginInfo(),
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
        min-width: 1200px;
        padding: 0 24px;

        box-sizing: border-box;

        .type-list {
            display: flex;

            .type-item {
                margin-right: 8px;

                a {
                    display: block;

                    line-height: 64px;
                    height: 64px;
                }
            }
        }
        .search {
            flex: 1;

            position: relative;

            margin: 0 20px;

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
                            justify-content: start;
                            flex-wrap: wrap;

                            padding: 0 20px;
                            box-sizing: border-box;

                            div {
                                display: block;
                                font-size: 12px;
                                color: #18191c;

                                margin: 0 10px 10px 0;
                                padding: 7px 10px 8px 10px;

                                background-color: #f6f7f8;

                                border-radius: 6px;

                                box-sizing: border-box;

                                cursor: pointer;

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
                            .hot-item {
                                display: flex;
                                justify-content: start;
                                align-items: center;

                                width: 100%;
                                height: 38px;

                                cursor: pointer;

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
                    .search-propose {

                        .propose-item {
                            font-size: 14px;
                            line-height: 38px;

                            padding-left: 20px;

                            height: 38px;

                            cursor: pointer;

                            &:hover {
                                background-color: #e3e5e7;
                            }

                            .propose-rank {
                                display: inline-flex;
                                justify-content: center;

                                color: #9499A0;

                                width: 30px;
                            }
                            .propose-rank-top {
                                color: #18191c;
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

                position: relative;

                // .popover {
                //     // display: none;
                // }
                // &:hover .popover {
                //     // display: block;
                // }

                .pop-frame {
                    display: none;
                }
                &:hover .pop-frame {
                    display: block;
                }

                // user-item中的通用样式
                a {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &:hover i {
                        animation: iconDance 0.3s 1;
                    }

                    i {
                        margin-bottom: 5px;
                    }
                }
                // 用户信息面板
                .login-btn {
                    width: 36px;
                    height: 36px;

                    color: #00aeec;
                    font-size: 14px;
                    line-height: 36px;
                    text-align: center;

                    background-color: #f6f6f6;

                    border-radius: 50%;

                    cursor: pointer;
                }
                .user-panel {
                    
                    .user-face {
                        width: 36px;
                        height: 36px;

                        cursor: pointer;
                        img {
                            width: 100%;
                            height: 100%;

                            border-radius: 50%;
                        }
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