<template>
    <div class="area-header">
        <div class="area-left">
            <div class="area-title">
                <i class="iconfont icon-guanggao"></i>&nbsp;
                <a href="" class="common-title">{{ videoType }}</a>
            </div>
            <div class="area-timer">
                <a href="" class="date-select active">最近更新</a>
                <a href="" class="date-select">周一</a>
                <a href="" class="date-select">周二</a>
                <a href="" class="date-select">周三</a>
                <a href="" class="date-select">周四</a>
                <a href="" class="date-select">周五</a>
                <a href="" class="date-select">周六</a>
                <a href="" class="date-select">周日</a>
            </div>
        </div>
        <div class="area-right">
            <a href="" class="common-border-button right-change"><i class="iconfont icon-shuaxin"></i>&nbsp;换一换</a>
            <a href="" class="common-border-button right-timer">新番时间表<i class="iconfont icon-arrow"></i></a>
            <a href="" class="common-border-button right-more">查看更多<i class="iconfont icon-arrow"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name:'AreaHeader',
    props:["videoType"],
    setup(props) {
        return {
            videoType: props.videoType,
        }
    }
}
</script>

<style scoped>
.area-header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
/* 左侧 */
.area-header .area-left {
    display: flex;
    justify-content: start;
    align-items: center;
}
/* 左侧标题 */
.area-title i {
    font-size: 24px;
}
/* 左侧日期选择 */
.area-timer {
    margin-left: 20px;
}
.area-timer .date-select {
    font-size: 14px;
    color: #61666D;

    padding: 6px 10px;
}
.active {
    /* color: #fff; */
    /* 激活时颜色怎么改 */
    background-color: skyblue;
    border-radius: 16px;
}
/* 右侧 */
.area-right {
    display: flex;
    align-items: center;
}
</style>