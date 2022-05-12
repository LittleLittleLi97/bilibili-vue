import { reqQRCode, reqQRCodeLoginState, reqLoginInfo, reqUserInfo, reqUserCardInfo, reqLogout } from "@/api";

import { setCookie, getCookie } from "@/utils";

import qs from 'qs';

// 有部分应该放在UserInfo中的函数，还没有动

const state = ()=>{
    return {
        QRCodeUrl:undefined,
        oauthKey:undefined,
        loginStep:-4,
        isLogin:false,
        loginInfo:undefined,
        userInfo:undefined,
        userCardInfo:undefined,
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
        if (result.data.status === true) {
            commit('SETLOGINCOOKIE', result.data.data.url);
            dispatch('getLoginInfo');
            return true;
        } else {
            commit('SETLOGINSTEP', result.data.data);
            return false;
        }
    },
    async getLogout(){
        let result = await reqLogout(qs.stringify({
            biliCSRF: getCookie('bili_jct')
        }));
        if (result.status === 200 && result.data.status) return true;
        else return false;
    },
    async getLoginInfo({commit, dispatch}){
        // ！！！ 页面初始化时发送，登录成功后也要记得发送，不然登录信息没更新 ！！！
        let result = await reqLoginInfo();
        if (result.status === 200) {
            commit('GETLOGININFO', result.data.data);
            if (result.data.data.isLogin === true) {
                dispatch('getUserInfo');
                dispatch('getUserCardInfo', result.data.data.mid);
            }
        }
    },
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        if (result.status === 200) commit('GETUSERINFO', result.data.data);
    },
    async getUserCardInfo({commit}, mid){
        let result = await reqUserCardInfo(mid);
        if (result.status === 200) commit('GETUSERCARDINFO', result.data.data);
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
    GETLOGININFO(state, loginInfo){
        state.isLogin = loginInfo.isLogin;
        state.loginInfo = loginInfo;
    },
    GETUSERINFO(state, userInfo){
        state.userInfo = userInfo;
    },
    GETUSERCARDINFO(state, userCardInfo){
        state.userCardInfo = userCardInfo;
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