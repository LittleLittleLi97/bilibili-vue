<template>
    <div class="image-wrapper">
        <div class="video-image"><img :src="pic"></div>
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
</template>

<script>
export default {
    name:'ImageArea',
    props:["pic", "playNum", "likeNum", "durationStr"],
    setup(props) {
        return {
            pic: props.pic,
            playNum: props.playNum,
            likeNum: props.likeNum,
            durationStr: props.durationStr,
        }   
    }
}
</script>

<style scoped lang="less">
    .image-wrapper{
        position: relative;

        border-radius: 6px;
        overflow: hidden;
        width: 100%;
        height: 100%;
        .video-image {
            width: 100%;
            height: 100%;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
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
</style>