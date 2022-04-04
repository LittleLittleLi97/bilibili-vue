<template>
    <div class="reply">
        <div class="reply-face"><img src="./images/face.jpeg" alt=""></div>
        <div class="right-reply">
            <div class="person-info">
                <div class="person-name">axiba</div>
                <div class="person-badge">
                    <svg class="icon svg-level" aria-hidden="true"><use xlink:href="#icon-ic_userlevel_6"></use></svg>
                </div>
                <p class="person-reply">今天你码代码了吗</p>
            </div>
            <div class="comment-info">
                <span class="comment-time">2022-03-15 12:03</span>
                <i class="iconfont icon-zan1"></i><span>21</span>
                <i class="iconfont icon--cai"></i>
                <span class="comment-reply">回复</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Reply',
}
</script>

<style scoped lang="less">
.reply {
    display: flex;
    justify-content: space-between;

    margin: 15px 0;

    .reply-face {
        width: 24px;
        height: 24px;

        img {
            width: 100%;
            height: 100%;

            border-radius: 100%;
        }
    }
    .right-reply {
        flex: 1;

        margin-left: 10px;

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
            }
            .person-reply {
                font-size: 14px;
                color: #222222;
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