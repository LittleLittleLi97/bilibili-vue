<template>
    <transition>
        <div class="popover">
            <div class="popover-inner">
                <slot name="content"></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name:'Popover',
}
</script>

<style scoped lang="less">
    .popover {
        position: absolute;
        z-index: 100;
        top: 100%;

        padding-top: 15px;

        box-sizing: border-box;

        // animation: popoverShow 0.5s 1;
    
        .popover-inner {
            // padding: 22px 20px;

            background-color: #fff;
    
            border: 1px solid #e3e5e7;
            border-radius: 8px;

            box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

            box-sizing: border-box;
        }
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s;
    }
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    @keyframes popoverShow {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>