<template>
    <div class="comment-frame">
        <div class="person-face"><img src="./images/face.jpeg" alt=""></div>
        <div class="right-detail">
            <div class="person-info">
                <div class="person-name">哈喽哈喽</div>
                <div class="person-badge">
                    <svg class="icon svg-level" aria-hidden="true"><use xlink:href="#icon-ic_userlevel_6"></use></svg>
                    <svg class="icon svg-up" aria-hidden="true"><use xlink:href="#icon-UPzhu"></use></svg>
                </div>
            </div>
            <div class="comment-content">
                <p class="content-text"><span class="settle-top">置顶</span>豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。</p>
            </div>
            <div class="comment-info">
                <span class="comment-time">2022-03-05 15:39</span>
                <i class="iconfont icon-zan1"></i><span>128</span>
                <i class="iconfont icon--cai"></i>
                <span class="comment-reply">回复</span>
            </div>
            <slot name="reply"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    setup(props) {
        
    }
}
</script>

<style scoped lang="less">
.comment-frame {
    display: flex;
    justify-content: space-between;

    margin-top: 20px;

    .person-face {
        width: 48px;
        height: 48px;
        
        img {
            width: 100%;
            height: 100%;

            border-radius: 100%;
        }
    }
    .right-detail {
        flex: 1;

        margin-left: 15px;

        .person-info {
            display: flex;
            align-items: center;

            .person-name {
                font-size: 12px;
                color: #fb7299;
                font-weight: bold;
            }
            .person-badge {
                display: flex;
                align-items: center;

                margin-left: 10px;

                svg {
                    margin-left: 5px;
                }
                .svg-level {
                    width: 22px;
                    height: 22px;
                }
                .svg-up {
                    width: 22px;
                    height: 18px;
                }
            }
        }
        .comment-content {
            margin-top: 5px;

            .content-text {
                font-size: 14px;
                color: #222222;
                line-height: 20px;

                .settle-top {
                    font-size: 12px;
                    color: #ff81aa;

                    padding: 1px 2px;
                    margin-right: 5px;

                    border: 1px solid #ff81aa;
                    border-radius: 3px;

                    box-sizing: border-box;
                }
            }
        }
        .comment-info {
            margin-top: 10px;

            font-size: 12px;
            color: #99a2aa;
        }
    }
}
</style>