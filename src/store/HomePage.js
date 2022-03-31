import { reqPlaceholder, reqVideoList } from "../api";

const state = ()=>{
    return {
        placeholderInfo:{},
        videoList:{},
    }
};

const actions = {
    async getPlaceholder({commit}){
        let result = await reqPlaceholder();
        if (result.status === 200) commit('GETPLACEHOLDER', result.data);
    },
    async getVideoList({commit}, {rid, num, page}){
        let result = await reqVideoList(rid, num, page);
        if (result.status === 200) commit('GETVIDEOLIST', {data:result.data.data, rid});
    }
};

const mutations = {
    GETPLACEHOLDER(state, placeholderInfo){
        state.placeholderInfo = placeholderInfo.data;
    },
    GETVIDEOLIST(state, {data, rid}){
        state.videoList[rid] = data;
    }
};

const getters = {

};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}