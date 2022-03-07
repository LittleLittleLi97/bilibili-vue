<template>
    <div class="wrap">
        <div class="menu-abstract">
            <a href="" class="abstract-item"><div class="abstract-bgc bgc-dynamic"><i class="iconfont icon-fengche"></i></div>动态</a>
            <a href="" class="abstract-item"><div class="abstract-bgc bgc-hot"><i class="iconfont icon-remen"></i></div>热门</a>
            <a href="" class="abstract-item"><div class="abstract-bgc bgc-channel"><i class="iconfont icon-channel"></i></div>频道</a>
        </div>
        <div class="right-grid">
            <div class="menu-channel">
                <a href="" class="channel-item">番剧</a>
                <a href="" class="channel-item">国创</a>
                <a href="" class="channel-item">综艺</a>
                <a href="" class="channel-item">动画</a>
                <a href="" class="channel-item">鬼畜</a>
                <a href="" class="channel-item">舞蹈</a>
                <a href="" class="channel-item">娱乐</a>
                <a href="" class="channel-item">科技</a>
                <a href="" class="channel-item">美食</a>
                <a href="" class="channel-item">电影</a>
                <a href="" class="channel-item">电视剧</a>
                <a href="" class="channel-item">纪录片</a>
                <a href="" class="channel-item">游戏</a>
                <a href="" class="channel-item">音乐</a>
                <a href="" class="channel-item">影视</a>
                <a href="" class="channel-item">知识</a>
                <a href="" class="channel-item">资讯</a>
                <a href="" class="channel-item">更多</a>
            </div>
            <div class="menu-activity">
                <a href="" class="activity-item"><i class="iconfont icon-icon-zhuanlan-zhuanlanwenzhang"></i>专栏</a>
                <a href="" class="activity-item"><i class="iconfont icon-qiziz"></i>活动</a>
                <a href="" class="activity-item"><i class="iconfont icon-nav_shequzhongxin"></i>社区中心</a>
                <a href="" class="activity-item"><i class="iconfont icon-zhibo"></i>直播</a>
                <a href="" class="activity-item"><i class="iconfont icon-ketang"></i>课堂</a>
                <a href="" class="activity-item"><i class="iconfont icon-gequ"></i>新歌热榜</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'HeaderMenu'
}
</script>

<style scoped>
    a {
        font-size: 13px;
    }
    .wrap {
        margin-top: 20px;
        /*background-color: #bfa;*/
        padding: 0 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    /* 左侧abstract */
    .menu-abstract {
        display: flex;
        }
    .abstract-item {
        color: #18191c;
        margin-right: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .abstract-item .abstract-bgc {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
    }
    .abstract-bgc i {
        color: #fff;
    }
    .bgc-dynamic {
        background-color: #ff9212;
    }
    .bgc-hot {
        background-color: #f07775;
    }
    .bgc-channel {
        background-color: #59ca73;
    }
    /* 右侧grid */
    .right-grid {
        display: grid;
        grid-template-columns: 3fr 1fr;
        justify-items: end;
        width: 100%;
    }
    /* 中间channel */
    .menu-channel {
        display: grid;
        grid-template-columns: repeat(9,1fr);
        grid-gap: 10px;
        grid-auto-flow: row;
        justify-items: center;
        margin-left: 10px;
        width: 100%;
        border-right: 1px solid #e3e5e7;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .menu-channel .channel-item {
        background-color: #f6f7f8;
        color: #61666d;
        height: 26px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        letter-spacing: 2px;
    }
    /* 右侧activity */
    .menu-activity {
        display: grid;
        grid-template-columns: 1fr 1fr 1.5fr;
        grid-gap: 10px;
        width: 230px;
        grid-template-rows: 1fr 1fr;
        justify-items: end;
    }
    .menu-activity .activity-item {
        letter-spacing: 2px;
        height: 26px;
        line-height: 26px;
        color: #61666d;
    }
</style>