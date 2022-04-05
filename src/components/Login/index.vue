<template>
    <div class="login">
        <div class="login-window" ref="QRCodeLocation"></div>
        <div class="login-mask"></div>
    </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import QRCode from 'qrcodejs2'
export default {
    name:'Login',
    setup(props) {
        const store = useStore();
        const QRCodeLocation = ref();
        const QRCodeUrl = computed(()=>store.state.Login.QRCodeUrl);
        watch(QRCodeUrl, (newValue, oldValue)=>{
            console.log(newValue, oldValue);
            new QRCode(QRCodeLocation.value, {
                text:QRCodeUrl.value,
                width:200,
                height:200,
            });
        })
        onMounted(()=>{
            // store.dispatch('Login/getQRCode');
            // setTimeout(() => {
            //     store.dispatch('Login/getQRCodeLoginState');
            // }, 10000);
        })
        return {
            QRCodeLocation,
            QRCodeUrl,
        }
    }
}
</script>

<style scpoed lang="less">
    .login {
        .login-window {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
            
            background-color: #bfa;
        }
    }
</style>