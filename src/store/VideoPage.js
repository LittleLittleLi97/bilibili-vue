import { reqVideoDesc, reqVideoInfo, reqVideoRelated } from "@/api";

const state = ()=>{
    return {
        videoInfo:undefined,
        videoDesc:'',
        videoRelated:undefined,
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
    },
    async getVideoRelated({commit}, bvid){
        let result = await reqVideoRelated(bvid);
        if (result.status === 200) commit('GETVIDEORELATED', result.data);
    }
};

const mutations = {
    GETVIDEOINFO(state, videoInfo){
        state.videoInfo = videoInfo.data;
    },
    GETVIDEODESC(state, videoDesc){
        state.videoDesc = videoDesc.data;
    },
    GETVIDEORELATED(state, videoRelated){
        state.videoRelated = videoRelated.data;
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