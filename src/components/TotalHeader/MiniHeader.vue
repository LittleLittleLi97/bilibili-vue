<template>
    <div class="banner">
        <ul class="type-list">
            <li class="type-item"><a href=""><i class="iconfont icon-bilibili-line"></i>首页</a></li>
            <li class="type-item"><a href="">番剧</a></li>
            <li class="type-item"><a href="">直播</a></li>
            <li class="type-item"><a href="">游戏中心</a></li>
            <li class="type-item"><a href="">会员购</a></li>
            <li class="type-item"><a href="">漫画</a></li>
            <li class="type-item"><a href="">赛事</a></li>
            <!-- <li class="type-item"><a href=""><i class="iconfont icon-iphone"></i>下载APP</a></li> -->
        </ul>
        <div class="search">
            <input type="text" placeholder="请输入搜索字段">
            <div class="search-button">
                <i class="iconfont icon-search"></i>
            </div>
        </div>
        <ul class="user-manipulate">
            <li class="user-item"><a href="">登录</a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-icon_dingdao_dahuiyuan"></i>大会员</a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-mail"></i>消息</a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-fengche"></i>动态</a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-shoucang"></i>收藏</a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-history"></i>历史记录</a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-icon"></i>创作中心</a></li>
        </ul>
        <div class="upload"><a href="">投稿</a></div>
    </div>
</template>

<script>
export default {
    name:'MiniHeader',
}
</script>

<style scoped>
    i {
        font-size: 18px;
    }
    a{
        color: #fff;
        font-size: 14px;
    }
    .banner {
        position: absolute;
        width: 100%;
        padding: 10px 24px;
        /* 0 24 */
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }
    /* 左侧 */
    .type-list {
        display: flex;
        align-items: baseline;
    }
    .type-list .type-item {
        margin-right: 10px;
    }
    /* 中间搜索 */
    .search {
        position: relative;
        display: flex;
        flex: 1 auto;
        justify-content: center;
    }
    .search input {
        padding-left: 10px;
        width: 80%;
        height: 40px;
        background-color: #f1f2f3;
        /* color: ; */
        border: none;
        border-radius: 8px;
        outline: none;
    }
    .search .search-button {
        position: relative;
        left: -20px;
        width: 50px;
        background-color: #f1f2f3;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-button i {
        font-size: 25px;
    }
    /* 右侧用户操作 */
    .user-manipulate {
        display: flex;
        align-items: center;
    }
    .user-manipulate .user-item {
        margin-right: 10px;
    }
    .user-item a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user-item a i {
        margin-bottom: 10px;
    }
    /* 右侧投稿 */
    .upload {
        display: flex;
        width: 90px;
        height: 34px;
        background-color: #fb7299;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }
</style>