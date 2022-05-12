import { reqGetHistory } from "@/api";
import { changeTime, paddingNum } from "@/utils/index.js";

const state = ()=>{
    return {
        historyInfo: [],
    }
};

const actions = {
    async getHistoryInfo({commit}){
        const result = await reqGetHistory();
        if (result.status === 200) commit('GETHISTORYINFO', result.data.data.list);
    }
};

const mutations = {
    GETHISTORYINFO(state, data){
        state.historyInfo = data;
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
            // 只要视频，番剧没有bvid，return跳出本次循环
            if (item.history.bvid === "") return;
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