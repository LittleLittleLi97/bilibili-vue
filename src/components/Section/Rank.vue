<template>
    <div class="rank">
        <div class="rank-top">
            <a href="" class="common-title">排行榜</a>
            <a href="" class="common-border-button">更多<i class="iconfont icon-arrow"></i></a>
        </div>
        <div class="rank-list">
            <div class="rank-item"><span>1</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
            <div class="rank-item"><span>2</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
            <div class="rank-item"><span>3</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
            <div class="rank-item"><span>4</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
            <div class="rank-item"><span>5</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
            <div class="rank-item"><span>6</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
            <div class="rank-item"><span>7</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
            <div class="rank-item"><span>8</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
            <div class="rank-item"><span>9</span><a href="" class="item-title">这是我上课时犯困写出来的东西</a></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Rank',
}
</script>

<style scoped>
.rank-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.rank-list {
    display: grid;
    grid-template-rows: repeat(9,1fr);
    align-items: center;

    border: 1px solid #f1f2f3;
    border-radius: 6px;

    height: 100%;
}
.rank-list .rank-item a {
    font-size: 14px;
    color: #18191C;
}
</style>