import { reqHotSearch, reqPlaceholder } from "../api";

const state = ()=>{
    return {
        placeholderInfo:{},
        hotSearchList:[],
    }
};

const actions = {
    async getPlaceholder({commit}){
        let result = await reqPlaceholder();
        if (result.status === 200) commit('GETPLACEHOLDER', result.data);
    },
    async getHotSearch({commit}){
        let result = await reqHotSearch();
        if (result.status === 200) commit('GETHOTSEARCH', result.data);
    }
};

const mutations = {
    GETPLACEHOLDER(state, placeholderInfo){
        state.placeholderInfo = placeholderInfo.data;
    },
    GETHOTSEARCH(state, data){
        state.hotSearchList = data.list;
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