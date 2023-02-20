import { reqHotSearch, reqPlaceholder, reqSearch, reqSearchPropose, reqSearchTypeForPage } from "../api";

const state = ()=>{
    return {
        placeholderInfo:{},
        hotSearchList:[],
        searchResult:undefined,
        numPages:1,
        searchPropose: [],
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
    },
    async getSearchTypeForPage({commit}, {keyword, type, page}){
        let result = await reqSearchTypeForPage(keyword, type, page);
        if (result.status === 200) commit('GETSEARCHTYPEFORPAGE', {type, data: result.data.data})
    },
    async getSearchPropose({commit}, keyword) {
        const result = await reqSearchPropose(keyword);
        if (result.status === 200) commit('GETSEARCHPROPOSE', result.data);
    },
    clearSearchPropose({commit}) {
        commit('GETSEARCHPROPOSE', []);
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
        state.numPages = data.numPages;
    },
    GETSEARCHTYPEFORPAGE(state, {type, data}){
        state.searchResult[type] = data.result;
    },
    GETSEARCHPROPOSE(state, data) {
        state.searchPropose = data;
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