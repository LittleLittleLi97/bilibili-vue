<template>
    <Popover>
        <template v-slot:content>
            <div class="pop-content">
                <div class="content-header">
                    <div class="title-active title">视频动态</div>
                    <div class="title">直播</div>
                    <div class="title">{{ columnsName[2] }}</div>
                </div>
                <slot></slot>
            </div>
        </template>
    </Popover>
</template>

<script>
// 未添加非普通视频，暂时不用此组件
import Popover from './Popover.vue'
export default {
    name: 'PopoverThreeColumns',
    components: {
        Popover
    },
    props: {
        columnsName: {
            type: Array,
            default: []
        }
    },
    setup(props) {
        return {
            columnsName: props['columnsName'],
        }  
    }
}
</script>

<style scoped lang="less">
.pop-content {
    width: 370px;
    
    .content-header {
        display: flex;
        justify-content: space-around;

        border-bottom: 1px solid var(--line_regular);

        .title {
            // 由于padding左右为0，而div两边有空隙，不能点击，使用flex: 1占满，使其能被点击
            flex: 1;

            color: var(--text1);
            font-size: 14px;
            text-align: center;

            padding: 15px 0;

            border-bottom: 3px solid transparent;

            cursor: pointer;
        }
        .title-active {
            color: var(--brand-blue);
            border-bottom: 3px solid var(--brand-blue);
        }
    }
}
</style>