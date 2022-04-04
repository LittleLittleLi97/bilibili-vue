<template>
    <div class="video-card" v-if="videoInfo">
        <router-link :to="toUrl">
            <div class="image-wrapper">
                <div class="video-image"><img :src="videoInfo.pic"></div>
                <div class="mask">
                    <div class="mask-font">
                        <div class="font-left">
                            <div class="left-format">
                                <i class="iconfont icon-24gl-playSquare"></i><span>{{ playNum }}</span>
                            </div>
                            <div class="left-format">
                                <i class="iconfont icon-zan1"></i><span>{{ likeNum }}</span>
                            </div>
                        </div>
                        <span class="duration">{{ durationStr }}</span>
                    </div>
                </div>
            </div>
            <div class="video-title common-fontblue">{{ videoInfo.title }}</div>
        </router-link>
        <a class="video-info common-fontblue" href="">
            <i class="iconfont icon-UPzhu"></i>&nbsp;
            <span>{{ videoInfo.owner.name }}</span>&nbsp;·&nbsp;<span>{{ time.M }}-{{ time.D }}</span>
        </a>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import { changeTime, changeNum } from '@/utils/index.js'
export default {
    name:'VideoCard',
    props:["videoInfo"],
    setup(props) {
        const videoInfo = computed(()=>props.videoInfo);
        const time = computed(()=>{
            return changeTime(props.videoInfo && props.videoInfo.pubdate*1000);
        })
        const playNum = computed(()=>{
            return changeNum(props.videoInfo && props.videoInfo.stat.view);
        })
        const likeNum = computed(()=>{
            return changeNum(props.videoInfo && props.videoInfo.stat.like);
        });
        const durationStr = computed(()=>{
            if (props.videoInfo) {
                const duration = props.videoInfo.duration;
                let mm = parseInt(duration / 60);
                let s = duration - mm * 60;
                if (mm < 10) mm = '0' + mm;
                if (s < 10) s = '0' + s;
                return mm + ':' + s;
            }
            return undefined;
        })
        const toUrl = computed(()=>{
            return props.videoInfo && `/video/${props.videoInfo.bvid}`;
        })
        return {
            videoInfo,
            time,
            playNum,
            likeNum,
            durationStr,
            toUrl,
        }
    }
}
</script>

<style scoped lang="less">
.video-card {
    width: 100%;
    height: 100%;

    .image-wrapper{
        position: relative;
        height: 130px;

        border-radius: 6px;
        overflow: hidden;
        .video-image {
    
            img {
                width: 100%;
                height: 100%;
            }
        }
        .mask {
            position: absolute;
            bottom: 0;

            width: 100%;
            height: 38px;

            border-radius: 0 0 6px 6px;

            background-image: linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.8) 100%);

            .mask-font {
                display: flex;
                justify-content: space-between;
                align-items: center;

                position: absolute;
                bottom: 5px;

                color: white;
                font-size: 13px;
                
                width: 100%;

                padding: 0 10px;

                box-sizing: border-box;
                .font-left {
                    display: flex;
                    justify-content: start;

                    .left-format {
                        display: flex;
                        align-items: center;
                        margin-right: 10px;

                        span {
                            margin-left: 3px;
                        }
                    }
                }
            }
        }
    }
    .video-title {
        // 文字溢出隐藏，用...代替 https://blog.csdn.net/liqun_super/article/details/109747014
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;

        color: #18191C;
        font-size: 15px;
        font-weight: 500;
        line-height: 22px;

        height: 44px;


        margin-top: 5px;
    }
    .video-info {
        // 使用flex时，hover触发的范围为一整行，改为inline-flex，hover触发的范围只有文字部分的大小
        display: inline-flex;
        align-items: center;

        color: #9499A0;
        font-size: 13px;

        margin-top: 5px;
    }
}
</style>