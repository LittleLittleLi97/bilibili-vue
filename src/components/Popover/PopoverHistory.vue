<template>
    <PopoverOneColumn title="视频">
        <div class="today" v-if="historyInfoClassify.today.length > 0">
            <div class="date-title">今天</div>
            <HistoryCard 
                class="common-bgcgrey"
                v-for="(item, index) in historyInfoClassify.today" 
                :key="index"
                :videoInfo = "item"
            />
        </div>
        <div class="yesterday" v-if="historyInfoClassify.yesterday.length > 0">
            <div class="date-title">昨天</div>
                <HistoryCard 
                    class="common-bgcgrey"
                    v-for="(item, index) in historyInfoClassify.yesterday"
                    :key="index"
                    :videoInfo = "item"
                />
        </div>
        <div class="far" v-if="historyInfoClassify.far.length > 0">
            <div class="date-title">更早</div>
                <HistoryCard 
                    class="common-bgcgrey"
                    v-for="(item, index) in historyInfoClassify.far"
                    :key="index"
                    :videoInfo = "item"
                />
        </div>
    </PopoverOneColumn>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted, reactive } from 'vue'

import PopoverOneColumn from './base/PopoverOneColumn.vue'
import HistoryCard from '@/components/VideoCard/HistoryCard.vue'
export default {
    name: 'PopoverHistory',
    components: {
        PopoverOneColumn,
        HistoryCard,
    },
    setup(props) {
        const store = useStore();

        const historyInfoClassify = computed(()=>store.getters['UserInfo/historyInfoClassify']);
        onMounted(()=>{
            store.dispatch('UserInfo/getHistoryInfo');
        })
        return {
            historyInfoClassify,
        }
    }
}
</script>

<style scoped lang="less">
.date-title {
    color: var(--text1);
    font-size: 14px;
    font-weight: 500;

    margin: 15px 0 15px 15px;
}
</style>