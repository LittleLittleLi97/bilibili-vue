<template>
    <Popover>
        <template v-slot:content>
            <div class="pop-content">
                <div class="message-item"><a href="javascript:;" class="message-link">回复我的</a></div>
                <div class="message-item"><a href="javascript:;" class="message-link">@我的</a></div>
                <div class="message-item"><a href="javascript:;" class="message-link">收到的赞</a></div>
                <div class="message-item"><a href="javascript:;" class="message-link">系统消息</a></div>
                <div class="message-item"><a href="javascript:;" class="message-link">我的消息</a></div>
            </div>
        </template>
    </Popover>
</template>

<script>
import Popover from './base/Popover.vue'
export default {
    name: 'PopoverMessage',
    components: {
        Popover
    }
}
</script>

<style scoped lang="less">
.pop-content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 142px;

    padding: 12px 0;

    box-sizing: border-box;

    .message-item {

        .message-link {
            display: block;

            color: var(--text2);
            font-size: 14px;

            padding: 10px 0 10px 20px;

            transition: background-color 0.3s;

            &:hover {
                background-color: var(--graph-bg-thick);
            }
        }
    }
}
</style>