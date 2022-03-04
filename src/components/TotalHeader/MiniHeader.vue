<template>
    <div class="banner clearfix">
        <div class="banner-inner">
            <ul class="type-list">
                <li class="type-item"><a href=""><i class="iconfont icon-bilibili-line"></i>主站</a></li>
                <li class="type-item"><a href="">番剧</a></li>
                <li class="type-item"><a href="">游戏中心</a></li>
                <li class="type-item"><a href="">直播</a></li>
                <li class="type-item"><a href="">会员购</a></li>
                <li class="type-item"><a href="">漫画</a></li>
                <li class="type-item"><a href="">赛事</a></li>
                <li class="type-item"><a href=""><i class="iconfont icon-iphone"></i>下载APP</a></li>
            </ul>
            <div class="search">
                <input type="text" placeholder="请输入搜索字段">
                <div class="search-button">
                    <i class="iconfont icon-search"></i>
                </div>
            </div>
            <div class="upload"><a href="">投稿</a></div>
            <ul class="user-manipulate clearfix">
                <li class="user-item"><a href="">登录</a></li>
                <li class="user-item"><a href="">大会员</a></li>
                <li class="user-item"><a href="">消息</a></li>
                <li class="user-item"><a href="">动态</a></li>
                <li class="user-item"><a href="">收藏</a></li>
                <li class="user-item"><a href="">历史记录</a></li>
                <li class="user-item"><a href="">创作中心</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'MiniHeader',
}
</script>

<style scoped>
    i {
        float: left;
        font-size: 20px;
        margin-right: 2px;
    }
    a{
        color: #fff;
        font-size: 14px;
        line-height: 36px;
    }
    .banner {
        min-width: 1300px;
        position: absolute;
        width: 100%;
        background-color: rgba(0, 0, 0, 0);
    }
    .banner-inner {
        padding: 10px 24px;
        /* display: flex;
        align-items:flex-start; */
    }
    /* 左侧 */
    .type-list {
        float: left;
    }
    .type-list .type-item {
        margin-right: 12px;
        float: left;
    }
    /* 中间搜索 */
    .search {
        position: relative;
        width: 320px;
        margin-left: 10px;
        float: left;
    }
    .search input {
        width: 80%;
        float: left;
        height: 34px;
        line-height: 34px;
        padding-left: 15px;
        border: none;
        border-radius: 2px;
        outline:none;
    }
    .search .search-button {
        float: left;
        height: 34px;
        width: 40px;
        background-color: #e7e7e7;
        border: 1px solid #e7e7e7;
        border-radius: 2px;

        position: relative;
        left: -2px;
    }
    .search-button i {
        margin-left: 10px;
        line-height: 32px;
    }
    /* 右侧用户选项 */
    .user-manipulate {
        float: right;
    }
    .user-manipulate .user-item {
        float: left;
        margin-left: 12px;
    }
    /* 右侧投稿 */
    .upload {
        margin-left: 20px;
        float: right;
        width: 100px;
        height: 36px;
        background-color: #fb7299;
        border-radius: 2px;
        text-align: center;
    }
</style>