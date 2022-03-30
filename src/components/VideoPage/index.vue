<template>
    <MiniHeader/>
    <div class="video-frame">
        <div class="left-frame">
            <div class="video-header">
                <div class="video-title">纷吾既有内美兮，又重之以修能</div>
                <div class="video-info"><span>13.7万播放&nbsp;·&nbsp;总弹幕数200</span>&nbsp;&nbsp;&nbsp;<span>2022-03-18 19:00:05</span></div>
            </div>
            <div class="video-area"></div>
            <div class="support-bar">
                <ul class="support-list">
                    <li class="support-item"><i class="iconfont icon-zan"></i><span>14.6万</span></li>
                    <li class="support-item"><i class="iconfont icon-Bbi"></i><span>4.5万</span></li>
                    <li class="support-item"><i class="iconfont icon-shoucangtianchong"></i><span>5.8万</span></li>
                    <li class="support-item"><i class="iconfont icon-zhuanfa"></i><span>6181</span></li>
                </ul>
                <div class="bar-extra">
                    <div class="extra-report">稿件投诉</div>
                    <div class="extra-note">笔记</div>
                    <div class="extra-more"><i class="iconfont icon-gengduo"></i></div>
                </div>
            </div>
            <div class="video-text">
                更新了！
            </div>
            <div class="video-tag">
                <ul class="tag-list">
                    <li class="tag-item"><a href="">2022冬季国产动画创作</a></li>
                    <li class="tag-item"><a href="">修仙</a></li>
                    <li class="tag-item"><a href="">解读</a></li>
                    <li class="tag-item"><a href="">剧情解析</a></li>
                    <li class="tag-item"><a href="">深度解析</a></li>
                    <li class="tag-item"><a href="">战斗解析</a></li>
                    <li class="tag-item"><a href="">战斗解析</a></li>
                    <li class="tag-item"><a href="">战斗解析</a></li>
                    <li class="tag-item"><a href="">战斗解析</a></li>
                    <li class="tag-item"><a href="">战斗解析</a></li>
                    <li class="tag-item"><a href="">战斗解析</a></li>
                    <li class="tag-item"><a href="">战斗解析</a></li>
                    <li class="tag-item"><a href="">战斗解析</a></li>
                </ul>
            </div>
            <div class="comment-area">
                <Comment>
                    <template  v-slot:reply>
                        <Reply/>
                        <Reply/>
                        <Reply/>
                    </template>
                </Comment>
                <Comment>
                    <template  v-slot:reply>
                        <Reply/>
                        <Reply/>
                        <Reply/>
                    </template>
                </Comment>
            </div>
        </div>
        <div class="right-frame">
            <div class="up-info">
                <div class="info-face"><img src="./images/face.jpeg" alt=""></div>
                <div class="info-right">
                    <div class="first-row">
                        <div class="up-name">啊哈name</div>
                        <div class="send-message"><i class="iconfont"></i><span>发消息</span></div>
                    </div>
                    <div class="info-description">来了就点个关注呗～</div>
                    <div class="extra-manipulate">
                        <a href="" class="charge">为TA充电</a>
                        <a href="" class="focus">+&nbsp;&nbsp;关注30.3万</a>
                    </div>
                </div>
            </div>
            <div class="recommend-list">
                <VideoCardRow/>
                <VideoCardRow/>
                <VideoCardRow/>
                <VideoCardRow/>
                <VideoCardRow/>
                <VideoCardRow/>
            </div>  
        </div>
    </div>
</template>

<script>
import MiniHeader from '../TotalHeader/MiniHeader.vue'
import Comment from './Comment.vue'
import Reply from './Reply.vue'
import VideoCardRow from '../VideoCard/VideoCardRow.vue'
export default {
    name:'VideoPage',
    components: {
        MiniHeader,
        Comment,
        Reply,
        VideoCardRow,
    }
}
</script>

<style scoped lang="less">
    .video-frame {
        display: flex;
        justify-content: center;

        padding: 95px 80px 0 80px;

        box-sizing: border-box;

        .left-frame {
            flex: 2.5;

            .video-header {

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
                width: 100%;


                background-color: #bfa;
            }
            .support-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;

                margin-top: 15px;
                padding-bottom: 15px;

                color: #505050;

                box-sizing: border-box;

                border-bottom: 1px solid #e5e9f0;

                .support-list {
                    display: flex;

                    .support-item {
                        display: flex;
                        align-items: center;

                        margin-right: 10px;

                        cursor: pointer;

                        &:hover {
                            color: #00aeec;
                        }
                        .iconfont {
                            font-size: 28px;
                        }
                        span {
                            transition: all 0.2s;

                            font-size: 14px;
                        }
                    }
                }
                .bar-extra {
                    display: flex;
                    align-items: center;

                    font-size: 12px;

                    div {
                        cursor: pointer;
                    }
                    .extra-note {
                        margin-left: 15px;
                        padding: 5px 10px;

                        color: #00a1d6;

                        border: 1px solid #00a1d6;
                        border-radius: 2px;

                        box-sizing: border-box;
                    }
                    .extra-more {
                        margin-left: 20px;
                    }
                }
            }
            .video-text {
                margin: 20px 0;

                font-size: 12px;
                color: #212121;
            }
            .video-tag {
                padding-bottom: 12px;

                border-bottom: 1px solid #e5e9ef;

                box-sizing: border-box;

                .tag-list {
                    display: flex;
                    flex-wrap: wrap;

                    .tag-item {
                        margin: 0 10px 15px 0;
                        
                        a {
                            background-color: #f6f7f8;

                            font-size: 12px;
                            color: #61666D;
    
                            padding: 3px 12px;

                            border-radius: 10px;
    
                            box-sizing: border-box;
                        }
                    }
                }
            }
        }
        .right-frame {
            flex: 1;
            
            margin-left: 30px;

            .up-info {
                display: flex;
                justify-content: space-between;

                .info-face {
                    width: 48px;
                    height: 48px;

                    img {
                        width: 100%;
                        height: 100%;

                        border-radius: 100%;
                    }
                }
                .info-right {
                    flex: 1;

                    margin-left: 20px;

                    .first-row {
                        display: flex;
                        align-items: center;

                        line-height: 20px;

                        .up-name {
                            font-size: 14px;
                            color: #fb7299;
                            font-weight: bold;
                        }
                        .send-message {
                            font-size: 12px;
                            color: #505050;

                            margin-left: 10px;
                        }
                    }
                    .info-description {
                        font-size: 12px;
                        color: #999999;
                        line-height: 20px;
                    }
                    .extra-manipulate {
                        display: flex;
                        justify-content: space-between;

                        // line-height: 30px;

                        .charge {
                            font-size: 14px;
                            color: #fb7299;

                            padding: 5px 15px;

                            border: 1px solid #fb7299;
                            border-radius: 3px;

                            box-sizing: border-box;
                        }
                        .focus {
                            font-size: 14px;
                            color: #fff;

                            padding: 5px 25px;

                            border: 1px solid #00a1d6;
                            border-radius: 3px;

                            background-color: #00a1d6;

                            box-sizing: border-box;
                        }
                    }
                }
            }
            .recommend-list {
                display: grid;
                grid-gap: 12px;

                margin-top: 20px;
            }
        }
    }
</style>