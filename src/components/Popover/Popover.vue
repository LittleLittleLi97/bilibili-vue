<template>
    <div class="popover">
        <div class="popover-inner">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'Popover',
}
</script>

<style scoped lang="less">
    .popover {
        position: absolute;
        top: 100%;

        padding-top: 15px;

        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

        box-sizing: border-box;
    
        .popover-inner {
            padding: 22px 20px;

            background-color: #fff;
    
            border: 1px solid #e3e5e7;
            border-radius: 8px;

            box-sizing: border-box;
        }
    }
</style>