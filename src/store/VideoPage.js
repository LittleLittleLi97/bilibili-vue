import { reqVideoDesc, reqVideoInfo } from "@/api";

const state = ()=>{
    return {
        videoInfo:undefined,
        videoDesc:'',
    }
};

const actions = {
    async getVideoInfo({commit}, bvid){
        let result = await reqVideoInfo(bvid);
        if (result.status === 200) commit('GETVIDEOINFO', result.data);
    },
    async getVideoDesc({commit}, bvid){
        let result = await reqVideoDesc(bvid);
        if (result.status === 200) commit('GETVIDEODESC', result.data);
    }
};

const mutations = {
    GETVIDEOINFO(state, videoInfo){
        state.videoInfo = videoInfo.data;
    },
    GETVIDEODESC(state, videoDesc){
        state.videoDesc = videoDesc.data;
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