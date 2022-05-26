<template>
    <PopoverOneColumn title="视频动态">
        <DynamicCard/>
        <DynamicCard/>
        <DynamicCard/>
    </PopoverOneColumn>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { getUid } from '@/utils/index.js'

import PopoverOneColumn from './base/PopoverOneColumn.vue'
import DynamicCard from '@/components/VideoCard/DynamicCard.vue'
export default {
    name: 'PopoverDynamic',
    components: {
        PopoverOneColumn,
        DynamicCard,
    },
    setup(props) {
        const store = useStore();

        // onMounted(()=>{
        //     store.dispatch('UserInfo/getVideoDynamic', getUid());
        // })
    }
}
</script>

<style scoped lang="less">

</style>