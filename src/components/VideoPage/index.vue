<template>
    <MiniHeader/>
    <div class="video-frame">
        <div class="left-frame">
            <div class="video-header">
                <div class="video-title">纷吾既有内美兮，又重之以修能</div>
                <div class="video-info"><span>13.7万播放&nbsp;·&nbsp;总弹幕数200</span>&nbsp;&nbsp;&nbsp;<span>2022-03-18 19:00:05</span></div>
            </div>
            <div class="video-area"></div>
        </div>
        <div class="right-frame"></div>
    </div>
</template>

<script>
import MiniHeader from '../TotalHeader/MiniHeader.vue'
export default {
    name:'VideoPage',
    components: {
        MiniHeader,
    }
}
</script>

<style scoped lang="less">
    .video-frame {
        display: flex;
        justify-content: center;

        padding-top: 65px;

        box-sizing: border-box;
        
        height: 1000px;

        .left-frame {
            width: 638px;

            .video-header {
                margin-top: 30px;

                .video-title {
                    font-size: 18px;
                    color: #212121;
                    font-weight: 500;
                }
                .video-info {
                    margin: 15px 0 20px 0;
                    font-size: 12px;
                    color: #999;
                }
            }
            .video-area {
                width: 638px;
                height: 405px;

                background-color: #bfa;
            }
        }
        .right-frame {
            width: 320px;
            height: 200px;
            background-color: #adc;
        }
    }
</style>