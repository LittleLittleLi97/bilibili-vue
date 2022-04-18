import { reqHotSearch, reqPlaceholder, reqSearch } from "../api";

const state = ()=>{
    return {
        placeholderInfo:{},
        hotSearchList:[],
        searchResult:undefined,
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
    },
    async getSearch({commit}, keyword){
        let result = await reqSearch(keyword);
        if (result.status === 200) commit('GETSEARCH', result.data.data);
    }
};

const mutations = {
    GETPLACEHOLDER(state, placeholderInfo){
        state.placeholderInfo = placeholderInfo.data;
    },
    GETHOTSEARCH(state, data){
        state.hotSearchList = data.list;
    },
    GETSEARCH(state, data){
        const result = {};
        data.result.forEach(item => result[item.result_type] = item.data);
        state.searchResult = result;
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