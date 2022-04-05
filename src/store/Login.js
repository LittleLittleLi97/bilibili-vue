import { reqQRCode, reqQRCodeLoginState } from "@/api";

import qs from 'qs'

const state = ()=>{
    return {
        QRCodeUrl:undefined,
        oauthKey:undefined,
    }
};

const actions = {
    async getQRCode({commit}){
        let result = await reqQRCode();
        if (result.status === 200) commit('GETQRCODE', result.data.data);
    },
    async getQRCodeLoginState({commit, state}){
        let result = await reqQRCodeLoginState(qs.stringify({
            oauthKey: state.oauthKey
        }));
        console.log(result);
    }
};

const mutations = {
    GETQRCODE(state, data){
        state.QRCodeUrl = data.url;
        state.oauthKey = data.oauthKey;
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