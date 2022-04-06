<template>
    <Popover>
        <template v-slot:content>
            <div class="pop-content">
                <div class="pop-text">登录即可查看消息记录</div>
                <div class="pop-button" @click="clickFunction">立即登录</div>
            </div>
        </template>
    </Popover>
</template>

<script>
import Popover from './Popover.vue'
export default {
    name:'PopoverWithoutLogin',
    components:{
        Popover,
    },
    props:["clickBtnEvent"],
    setup(props) {
        function clickFunction(){
            props.clickBtnEvent();
        }
        return {
            clickFunction,
        }  
    }
}
</script>

<style scpoed lang="less">
    .pop-content {
        width: 360px;

        .pop-text {
            text-align: center;
            color: #9499a0;
            font-size: 14px;
        }
        .pop-button {
            text-align: center;
            color: #fff;
            font-size: 14px;

            padding: 10px 0;

            background-color: #00aeec;

            border-radius: 8px;

            box-sizing: border-box;

            transition: background-color 0.3s;;

            cursor: pointer;

            &:hover {
                background-color: #00b5e5;
            }
        }
    }
</style>