<template>
    <Popover>
        <template v-slot:content>
            <div class="pop-content">
                <div class="title">精彩推荐</div>
                <div class="img-area"><img src="https://s1.hdslb.com/bfs/static/laputa-home/client/assets/vip-default-banner.6db4a7ed.png" alt=""></div>
                <div class="text common-fontblue">大会员可畅享各种专属内容，还有游戏礼包、个性装扮等你来拿</div>
            </div>
        </template>
    </Popover>
</template>

<script>
import Popover from './Popover.vue'
export default {
    name:'PopoverVIP',
    components:{
        Popover
    }
}
</script>

<style scoped lang="less">
    .pop-content {
        width: 230px;

        .title {
            font-size: 14px;
            color: #18191c;
            font-weight: 500;
        }
        .img-area {
            margin-top: 10px;

            width: 100%;
            height: 70px;
            img {
                width: 100%;
                height: 100%;

                border-radius: 5px;
            }
        }
        .text {
            margin-top: 10px;

            font-size: 14px;
            color: #18191c;
            line-height: 18px;
        }
    }
</style>