<template>
    <div class="rank">
        <div class="rank-top">
            <a href="" class="common-title">排行榜</a>
            <a href="" class="common-border-button">更多<i class="iconfont icon-arrow"></i></a>
        </div>
        <div class="rank-list" ref="rankListDiv">
            <a href="" class="rank-item" v-for="(item, index) in rankList" :key="index">
                <span class="item-index" :data-index="index+1">{{ index+1 }}</span><span class="item-title">{{ item.title }}</span>
            </a>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, onUpdated, ref } from 'vue'
export default {
    name:'Rank',
    props:["rankList"],
    setup(props) {
        // 设置排行榜的bgc，已改为css
        // function rankListStyle(){
        //     const rankListDiv = ref(null);
        //     onUpdated(()=>{
        //         const rankItem = rankListDiv.value.getElementsByClassName('rank-item');
        //         // rankItem为HTMLCollection，不是数组，需要用Array.from转为数组
        //         Array.from(rankItem).forEach((currentItem, index) => {
        //             if (index % 2) currentItem.style = "background-color: #f1f2f3;"
        //         });
        //     })
        //     return {
        //         rankListDiv,
        //     }
        // }
        const rankList = computed(()=>props.rankList && props.rankList.slice(0,9));
        return {
            // ...rankListStyle(),
            rankList,
        }
    }
}
</script>

<style scoped lang="less">
.rank {
    .rank-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .rank-list {
        display: grid;
        grid-template-rows: repeat(9,1fr);
        align-items: center;

        margin-top: 10px;
    
        border: 1px solid #f1f2f3;
        border-radius: 6px;
    
        .rank-item{
            display: flex;

            padding: 15px;

            box-sizing: border-box;

            &:nth-of-type(2n) {
                background-color: #f1f2f3;
            }
            .item-index {
                font-size: 14px;
                font-family: Avenir;
                font-style: italic;
                font-weight: 600;
                
                &[data-index="1"] {
                    color: #ff473d;
                }
                &[data-index="2"] {
                    color: #ff6a29;
                }
                &[data-index="3"] {
                    color: #ff9214;
                }
            }
            .item-title {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                margin-left: 15px;

                font-size: 14px;
                color: #18191C;
                font-weight: 500;
            }
        }
    }

}
</style>