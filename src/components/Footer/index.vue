<template>
    <div class="footer">
        <div class="footer-left">
            <div class="footer-title">bilibili</div>
            <div class="link-list">
                <a href="">关于我们</a>
                <a href="">联系我们</a>
                <a href="">用户协议</a>
                <a href="">加入我们</a>
                <a href="">友情链接</a>
                <a href="">隐私协议</a>
                <a href="">bilibili认证</a>
                <a href="">Investor Relations</a>
            </div>
        </div>
        <div class="footer-middle">
            <div class="footer-title">传送门</div>
            <div class="link-list">
                <a href="">协议汇总</a>
                <a href="">活动中心</a>
                <a href="">活动专题页</a>
                <a href="">侵权申诉</a>
                <a href="">帮助中心</a>
                <a href="">社区中心</a>
                <a href="">壁纸站</a>
                <a href="">广告合作</a>
                <a href="">名人堂</a>
                <a href="">MCN管理中心</a>
                <a href="">高级弹幕</a>
                <a href="">品牌号官网</a>
            </div>
        </div>
        <div class="footer-right">
            <a href="">
                <i class="iconfont icon-xiazai bgc-download"></i>
                <div class="icon-title">下载APP</div>
            </a>
            <a href="">
                <i class="iconfont icon-gongyizhongxin bgc-gongyi"></i>
                <div class="icon-title">公益</div>
            </a>
            <a href="">
                <i class="iconfont icon-xinlangweibo bgc-weibo"></i>
                <div class="icon-title">官方微博</div>
            </a>
            <a href="">
                <i class="iconfont icon-weixin bgc-wechat"></i>
                <div class="icon-title">官方微信</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
}
</script>

<style scoped>
/* 布局 */
.footer {
    display: flex;
    justify-content: space-between;

    padding: 30px 56px;
    box-sizing: border-box;

    background-color: #f6f7f8;
}
.footer-left {
    width: 350px;
}
.footer-middle {
    width: 450px;
}
/* 基本样式 */
.footer-title {
    font-size: 16px;
    color: #9499A0;

    margin-bottom: 10px;
}
.link-list a {
    display: inline-block;

    margin-right: 12px;
    margin-bottom: 4px;

    font-size: 14px;
    color: #18191C;

    line-height: 25px;
}
.icon-title {
    font-size: 14px;
    color: #18191C;

}
/* 右侧图标区域 */
.footer-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-right a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-left: 15px;
}
.footer-right i {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 56px;
    height: 56px;

    margin-bottom: 15px;
    
    border-radius: 50%;

    font-size: 26px;
    color: #fff;
}
/* 右侧图标颜色 */
.bgc-download {
    background-color: #3752C8;
}
.bgc-gongyi {
    background-color: #00aeec;
}
.bgc-weibo {
    background-color: #db4437;
}
.bgc-wechat {
    background-color: #57bb40;
}
</style>