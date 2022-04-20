import { reqHotSearch, reqPlaceholder, reqSearch, reqSearchTypeForPage } from "../api";

const state = ()=>{
    return {
        placeholderInfo:{},
        hotSearchList:[],
        searchResult:undefined,
        numPages:1,
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