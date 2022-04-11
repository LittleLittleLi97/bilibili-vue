<template>
    <Popover>
        <template v-slot:content>
            <div class="pop-content">
                <div class="user-name">Li97</div>
                <div class="user-vip">大会员</div>
                <div class="user-coin">
                    <div class="coin-left">
                        <span class="coin-key">硬币：</span><span class="coin-value">612</span>
                    </div>
                    <div class="coin-right">
                        <span class="coin-key">B币：</span><span class="coin-value">612</span>
                    </div>
                </div>
                <div class="user-level">
                    <div class="level-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-ic_userlevel_4"></use>
                        </svg>
                    </div>
                    <div class="level-progress"><div class="level-progress-inner"></div></div>
                    <div class="level-icon">
                        <!-- 这里直接用不带颜色的iconfont，方便改颜色 -->
                        <i class="iconfont icon-ic_userlevel_5"></i>
                    </div>
                </div>
                <div class="user-level-text">当前成长5256，距离升级Lv.5 还需要5544</div>
            </div>
        </template>
    </Popover>
</template>

<script>
import Popover from './Popover.vue'
export default {
    name:'PopoverUserPanel',
    components:{
        Popover,
    }
}
</script>

<style scoped lang="less">
    .pop-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 280px;
        
        .user-name {
            font-size: 18px;
            font-weight: 500;
            color: #18191c;
        }
        .user-vip {
            font-size: 12px;
            color: #fff;

            background-color: #fb7299;

            padding: 2px 10px;

            border-radius: 4px;
            
            box-sizing: border-box;
        }
        .user-coin {
            display: flex;

            .coin-right {
                margin-left: 10px;
            }
            // coin-key和coin-value通用样式
            .coin-key {
                font-size: 12px;
                color: #9499a0;
            }
            .coin-value {
                font-size: 12px;
                color: #18191c;
            }
        }
        .user-level {
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;

            .level-icon {
                font-size: 28px;

                .iconfont {
                    font-size: 28px;
                    color: #c9ccd0;
                }
            }
            .level-progress {
                position: relative;

                height: 2px;
                width: 200px;

                background-color: #e3e5e7;

                .level-progress-inner {
                    position: absolute;
                    top: 0;
                    left: 0;

                    height: 2px;
                    width: 50%;

                    background-color: #f3cb85;
                }
            }
        }
        .user-level-text {
            font-size: 12px;
            color: #c9ccd0;
        }
    }
</style>