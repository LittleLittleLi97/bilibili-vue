import { reqQRCode, reqQRCodeLoginState, reqUserInfo } from "@/api";

import { setCookie } from "@/utils";

import qs from 'qs'

const state = ()=>{
    return {
        QRCodeUrl:undefined,
        oauthKey:undefined,
        loginStep:-4,
        isLogin:false,
        userInfo:undefined,
    }
};

const actions = {
    async getQRCode({commit}){
        let result = await reqQRCode();
        if (result.status === 200) commit('GETQRCODE', result.data.data);
    },
    async getQRCodeLoginState({commit, state, dispatch}){
        let result = await reqQRCodeLoginState(qs.stringify({
            oauthKey: state.oauthKey
        }));
        console.log(result);
        if (result.data.status === true) {
            commit('SETLOGINCOOKIE', result.data.data.url);
            dispatch('getUserInfo');
        } else {
            commit('SETLOGINSTEP', result.data.data);
        }
    },
    async getUserInfo({commit}){
        // ！！！ 页面初始化时发送，登录成功后也要记得发送，不然登录信息没更新 ！！！
        let result = await reqUserInfo();
        if (result.status === 200) commit('GETUSERINFO', result.data.data);
    }
};

const mutations = {
    GETQRCODE(state, data){
        state.QRCodeUrl = data.url;
        state.oauthKey = data.oauthKey;
    },
    SETLOGINCOOKIE(state, url){
        const parseUrl = new URL(url);
        const cookieList = ['DedeUserID', 'DedeUserID__ckMd5', 'SESSDATA', 'bili_jct'];
        cookieList.forEach((item)=>setCookie(item, parseUrl.searchParams.get(item), parseInt(parseUrl.searchParams.get('Expires') * 1000)));
    },
    SETLOGINSTEP(state, step){
        state.loginStep = step;
    },
    GETUSERINFO(state, userInfo){
        state.isLogin = userInfo.isLogin;
        state.userInfo = userInfo;
    }
};

const getters = {

};

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}