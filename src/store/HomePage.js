import { reqVideoList, reqVideoRank } from "../api";

const state = ()=>{
    return {
        videoList:{},
        rankList:{},
    }
};

const actions = {
    async getVideoList({commit}, {rid, num, page}){
        let result = await reqVideoList(rid, num, page);
        if (result.status === 200) commit('GETVIDEOLIST', {data:result.data.data, rid});
    },
    async getRankList({commit}, {rid, day, original}){
        let result = await reqVideoRank(rid, day, original);
        if (result.status === 200) commit('GETRANKLIST', {data:result.data.data, rid});
    },
};

const mutations = {
    GETVIDEOLIST(state, {data, rid}){
        state.videoList[rid] = data;
    },
    GETRANKLIST(state, {data, rid}){
        state.rankList[rid] = data;
    },
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