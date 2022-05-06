<template>
    <Popover v-if="userInfo">
        <template v-slot:content>
            <div class="pop-content">
                <div class="user-name">{{ userInfo.name }}</div>
                <div class="user-vip" v-if="userInfo.vip.status===1">大会员</div>
                <div class="user-coin">
                    <div class="coin-left">
                        <span class="coin-key">硬币：</span><span class="coin-value">{{ userInfo.coins }}</span>
                    </div>
                    <div class="coin-right">
                        <span class="coin-key">B币：</span><span class="coin-value">612</span>
                    </div>
                </div>
                <div class="user-level">
                    <div class="level-icon">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="currentLevelClass"></use>
                        </svg>
                    </div>
                    <div class="level-progress"><div class="level-progress-inner" :style="levelProgressStyle" ></div></div>
                    <div class="level-icon">
                        <!-- 这里直接用不带颜色的iconfont，方便改颜色 -->
                        <i class="iconfont" :class="nextLevelClass"></i>
                    </div>
                </div>
                <div class="user-level-text">当前成长{{ userInfo.level_exp.current_exp }}，距离升级Lv.{{ userInfo.level+1 }}&nbsp;还需要{{ userInfo.level_exp.next_exp - userInfo.level_exp.current_exp }}</div>
                <div class="follow-area">
                    <a class="follow-item">
                        <div class="follow-value">{{ userCardInfo && userCardInfo.card.friend }}</div>
                        <div class="follow-key">关注</div>
                    </a>
                    <a class="follow-item">
                        <div class="follow-value">{{ userCardInfo && userCardInfo.card.fans }}</div>
                        <div class="follow-key">粉丝</div>
                    </a>
                    <a class="follow-item">
                        <div class="follow-value">6</div>
                        <div class="follow-key">动态</div>
                    </a>
                </div>
                <div class="logout-btn common-bgcgrey" @click="logoutFunction"><i class="iconfont icon-tuichu"></i><span>退出登录</span></div>
            </div>
        </template>
    </Popover>
</template>

<script>
import Popover from './Popover.vue'

import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    name:'PopoverUserPanel',
    components:{
        Popover,
    },
    setup(props) {
        const store = useStore();
        // 用户的信息有好几个接口，内容有重复，也有不同
        const userInfo = computed(()=>store.state.Login.userInfo);
        const userCardInfo = computed(()=>store.state.Login.userCardInfo);

        const currentLevelClass = computed(()=>`#icon-ic_userlevel_${store.state.Login.userInfo.level}`);
        const nextLevelClass = computed(()=>`icon-ic_userlevel_${store.state.Login.userInfo.level + 1}`);
        const levelProgressStyle = computed(()=>`width:${(store.state.Login.userInfo.level_exp.current_exp / store.state.Login.userInfo.level_exp.next_exp * 100).toFixed(2)}%;`)

        async function logoutFunction(){
            let result = await store.dispatch('Login/getLogout');
            console.log(result)
            if (result === true) window.location.reload();
        }
        return {
            userInfo,
            userCardInfo,

            currentLevelClass,
            nextLevelClass,
            levelProgressStyle,

            logoutFunction,
        }
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

            margin-top: 10px;
            padding: 2px 10px;

            border-radius: 4px;
            
            box-sizing: border-box;
        }
        .user-coin {
            display: flex;

            margin-top: 10px;

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
        .follow-area {
            display: flex;
            justify-content: space-between;

            width: 100%;

            margin-top: 10px;
            padding: 0 20px;

            box-sizing: border-box;

            .follow-item {

                &:hover .follow-value {
                    color: #00aeec;
                }
                &:hover .follow-key {
                    color: #00aeec;
                }
                .follow-value {
                    text-align: center;

                    font-size: 18px;
                    color: #18191c;
                    font-weight: 500;

                    transition: color 0.2s;
                }
                .follow-key {
                    font-size: 12px;
                    color: #9499a0;
                    font-weight: 400;

                    margin-top: 5px;

                    transition: color 0.2s;
                }
            }
        }
        .logout-btn {
            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: 500;

            width: 100%;

            margin-top: 30px;
            padding: 15px 0;

            border: 1px solid #e3e5e7;
            border-radius: 6px;

            box-sizing: border-box;

            cursor: pointer;

            .iconfont {
                margin-right: 10px;
            }
        }
    }
</style>