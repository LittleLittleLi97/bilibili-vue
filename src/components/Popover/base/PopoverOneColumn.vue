<template>
    <Popover>
        <template v-slot:content>
            <div class="pop-content">
                <div class="title">{{ title }}</div>
                <slot></slot>
            </div>
        </template>
    </Popover>
</template>

<script>
import Popover from './Popover.vue'
import DynamicCard from '@/components/VideoCard/DynamicCard.vue'
export default {
    name: 'PopoverOneColumn',
    components: {
        Popover,
        DynamicCard,
    },
    props: {
        title: {
            type: String,
            default: '标题',
        }
    },
    setup(props) {
        return {
            title: props.title,
        }
    }
}
</script>

<style scoped lang="less">
.pop-content {
    width: 370px;
    height: 540px;

    // https://developer.mozilla.org/zh-CN/docs/Web/CSS/overscroll-behavior
    overflow: scroll;
    overscroll-behavior: contain;

    .title {
            color: var(--text1);
            font-size: 14px;
            text-align: center;

            padding: 15px 0;

            border-bottom: 1px solid var(--line_regular);
        }
}
</style>