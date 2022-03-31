import { reqPlaceholder } from "../api";

const state = ()=>{
    return {
        placeholderInfo:{},
    }
};

const actions = {
    async getPlaceholder({commit}){
        let result = await reqPlaceholder();
        if (result === 200) commit('GETPLACEHOLDER')
    }
};

const mutations = {
    GETPLACEHOLDER(state, placeholderInfo){
        state.placeholderInfo = placeholderInfo;
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