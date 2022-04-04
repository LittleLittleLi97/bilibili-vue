import { reqHotSearch, reqPlaceholder, reqVideoList, reqVideoRank } from "../api";

const state = ()=>{
    return {
        placeholderInfo:{},
        videoList:{},
        rankList:{},
        hotSearchList:[],
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
    },
    async getRankList({commit}, {rid, day, original}){
        let result = await reqVideoRank(rid, day, original);
        if (result.status === 200) commit('GETRANKLIST', {data:result.data.data, rid});
    },
    // async getHotSearchList({commit}){
    //     let result = await reqHotSearch();
    //     if (result.code === 0) commit('GETHOTSEARCHLIST', result.data);
    // }
};

const mutations = {
    GETPLACEHOLDER(state, placeholderInfo){
        state.placeholderInfo = placeholderInfo.data;
    },
    GETVIDEOLIST(state, {data, rid}){
        state.videoList[rid] = data;
    },
    GETRANKLIST(state, {data, rid}){
        state.rankList[rid] = data;
    },
    // GETHOTSEARCHLIST(state, data){
    //     state.hotSearchList = data.list;
    // }
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