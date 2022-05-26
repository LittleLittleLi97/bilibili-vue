import { reqGetHistory, reqUserCollect, reqUserCollectDetail, reqVideoDynamic } from "@/api";
import { changeTime, getUid, paddingNum } from "@/utils/index.js";

const state = ()=>{
    return {
        historyInfo: [],
        collectList: [],
        collectDetail: {},
    }
};

const actions = {
    async getHistoryInfo({commit}){
        const result = await reqGetHistory();
        if (result.status === 200) commit('GETHISTORYINFO', result.data.data.list);
    },
    async getUserCollect({commit, dispatch}){
        const result = await reqUserCollect(getUid());
        if (result.status === 200) {
            commit('GETUSERCOLLECT', result.data.data.list);
            result.data.data.list.forEach(item => {
                dispatch('getUserCollectDetail', item.id);
            });
        }
    },
    async getUserCollectDetail({commit}, id){
        const result = await reqUserCollectDetail(id);
        if (result.status === 200) commit('GETUSERCOLLECTDETAIL', result.data.data);
    }
};

const mutations = {
    GETHISTORYINFO(state, data){
        state.historyInfo = data;
    },
    GETUSERCOLLECT(state, data){
        state.collectList = data;
    },
    GETUSERCOLLECTDETAIL(state, data){
        // 有多个收藏夹，每个收藏夹使用自己的id存储其自己的视频列表
        state.collectDetail[data.info.id] = data;
    }
};

const getters = {
    historyInfoClassify(state){
        const historyInfoClassify = {
            today: [],
            yesterday: [],
            far: []
        };
        state.historyInfo.forEach(item => {
            if (item.history.bvid === "") return; // 只要视频，番剧没有bvid，return跳出本次循环
            const viewTime = changeTime(item.view_at*1000);
            const nowTime = changeTime(new Date().getTime());
            const padding_h = paddingNum(viewTime.h, 2);
            const padding_mm = paddingNum(viewTime.mm, 2);
            function addFar(){
                const month = paddingNum(viewTime.M, 2);
                const day = paddingNum(viewTime.D, 2);
                item.showTime = `${month}-${day} ${padding_h}:${padding_mm}`
                historyInfoClassify.far.push(item);
            }
            if (nowTime.Y === viewTime.Y && nowTime.M === viewTime.M) {
                if (nowTime.D === viewTime.D) {
                    item.showTime = `今天 ${padding_h}:${padding_mm}`;
                    historyInfoClassify.today.push(item);
                }
                else if (nowTime.D - 1 === viewTime.D) {
                    item.showTime = `昨天 ${padding_h}:${padding_mm}`;
                    historyInfoClassify.yesterday.push(item);
                }
                else addFar();
            }else {
                addFar();
            }
        });
        return historyInfoClassify;
    }
};

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}