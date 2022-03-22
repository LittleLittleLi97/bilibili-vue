<template>
    <div class="banner">
        <ul class="type-list">
            <li class="type-item"><a href=""><i class="iconfont icon-bilibili-line"></i>首页</a></li>
            <li class="type-item"><a href="">番剧</a></li>
            <li class="type-item"><a href="">直播</a></li>
            <li class="type-item"><a href="">游戏中心</a></li>
            <li class="type-item"><a href="">会员购</a></li>
            <li class="type-item"><a href="">漫画</a></li>
            <li class="type-item"><a href="">赛事</a></li>
            <!-- <li class="type-item"><a href=""><i class="iconfont icon-iphone"></i>下载APP</a></li> -->
        </ul>
        <div class="search">
            <div class="input-area">
                <input type="text" placeholder="请输入搜索字段">
                <div class="search-button">
                    <i class="iconfont icon-search"></i>
                </div>
            </div>
            <div class="recommend-area"></div>
        </div>
        <ul class="user-manipulate">
            <li class="user-item"><a href="">登录</a></li>
            <li class="user-item">
                <a href=""><i class="iconfont icon-icon_dingdao_dahuiyuan"></i><span>大会员</span></a>
                <!-- <div class="vip-none">
                    <div class="vip-none-title">精彩推荐</div>
                    <img src="">
                    <div class="blue-button">开通大会员</div>
                </div> -->
            </li>
            <li class="user-item"><a href=""><i class="iconfont icon-mail"></i><span>消息</span></a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-fengche"></i><span>动态</span></a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-shoucang"></i><span>收藏</span></a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-history"></i><span>历史记录</span></a></li>
            <li class="user-item"><a href=""><i class="iconfont icon-icon"></i><span>创作中心</span></a></li>
        </ul>
        <div class="upload"><span>投稿</span></div>
    </div>
</template>

<script>
export default {
    name:'MiniHeader',
}
</script>

<style scoped lang="less">
    a {
        font-size: 14px;
        // color: #fff;
    }
    .banner {
        background-color: #bfa;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 24px;

        .type-list {
            display: flex;

            .type-item {
                margin-right: 8px;

                line-height: 64px;
            }
        }
        .search {
            flex: 1;

            .input-area {
                display: flex;
                justify-content: center;
                align-items: center;
                
                flex: 1;

                height: 40px;
                padding: 0 5px;

                box-sizing: border-box;
                border-radius: 8px;

                background-color: #f1f2f3;


                &:hover {
                    background-color: #fff;
                }
    
                input {
                    flex: 1;

                    height: 30px;

                    padding-left: 10px;
                    margin-right: 5px;

                    background-color: pink;

                    box-sizing: border-box;
                    border: none;
                    border-radius: 8px;

                    color: #61666d;

                    outline: none;
                }
                .search-button {
                    // background-color: pink;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    height: 30px;
                    width: 30px;

                    border-radius: 8px;

                    cursor: pointer;

                    &:hover {
                        background-color: #e3e5e6;
                    }

                    .iconfont {
                        font-size: 20px;
                    }
                }
            }
        }
        .user-manipulate {
            display: flex;

            .user-item {
                display: flex;
                align-items: center;

                margin-left: 8px;

                a {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    i {
                        margin-bottom: 5px;
                    }
                }
            }
        }

        .upload {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 90px;
            height: 34px;

            margin-left: 12px;

            background-color: #fb7299;

            border-radius: 8px;

            span {
                font-size: 14px;
                color: #fff;
            }
        }
    }
</style>