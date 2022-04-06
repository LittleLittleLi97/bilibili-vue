<template>
    <div class="login">
        <div class="login-wraper">
            <div class="close-btn" @click="closeLoginWindow"><i class="iconfont icon-close"></i></div>
            <div class="QR-area">
                <div class="QR-title">扫描二维码登录</div>
                <div class="QRCode" ref="QRCodeLocation"></div>
                <div class="QR-description">
                    <p>请使用<span>哔哩哔哩客户端</span></p>
                    <p>扫码登录或扫码下载APP</p>
                </div>
            </div>
        </div>
        <div class="login-mask"></div>
    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import QRCode from 'qrcodejs2'
export default {
    name:'Login',
    props:["closeLoginWindow"],
    setup(props) {
        const store = useStore();

        function generateQRCode(){
            const QRCodeLocation = ref();
            const QRCodeUrl = computed(()=>store.state.Login.QRCodeUrl);
            watch(QRCodeUrl, (newValue, oldValue)=>{
                new QRCode(QRCodeLocation.value, {
                    text:QRCodeUrl.value,
                    width:200,
                    height:200,
                });
            })
            return {
                QRCodeLocation,
                QRCodeUrl,
            }
        }

        function queryLoginStep(){
            let timer = null;
            const loginStep = computed(()=>store.state.Login.loginStep);
            onMounted(()=>{
                store.dispatch('Login/getQRCode');
                timer = setInterval(async()=>{
                    let result = await store.dispatch('Login/getQRCodeLoginState');
                    if (result) props.closeLoginWindow();
                }, 3000);
            })
            onUnmounted(()=>{
                clearInterval(timer);
            })
            return {
                loginStep,
            }
        }


        function closeLoginWindow(){
            props.closeLoginWindow();
        }
        return {
            ...generateQRCode(),
            ...queryLoginStep(),
            closeLoginWindow,
        }
    }
}
</script>

<style scpoed lang="less">
    .login {
        .login-wraper {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;

            padding: 52px 65px 29px 65px;

            border-radius: 8px;

            box-sizing: border-box;

            background-color: #fff;

            .close-btn {
                position: absolute;
                right: 20px;
                top: 20px;

                cursor: pointer;

                .iconfont {
                    font-size: 20px;
                }
            }
            .QR-area {
                display: flex;
                flex-direction: column;
                align-items: center;

                .QR-title {
                    font-size: 18px;
                    color: #212121;
                }
                .QRCode {
                    margin-top: 25px;

                    width: 220px;
                    height: 220px;

                    padding: 10px;

                    border: 1px solid #e7e7e7;
                    border-radius: 8px;

                    box-sizing: border-box;
                }
                .QR-description {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    margin-top: 20px;

                    font-size: 14px;
                    color: #212121;
                    line-height: 20px;

                    span {
                        color: #00a1d6;
                    }
                }
            }
        }
        .login-mask {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 99;

            width: 100%;
            height: 100%;

        }
    }
</style>