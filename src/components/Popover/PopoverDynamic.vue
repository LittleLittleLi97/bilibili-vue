<template>
    <PopoverOneColumn title="视频动态">
        <DynamicCard/>
        <DynamicCard/>
        <DynamicCard/>
    </PopoverOneColumn>
</template>

<script>
import PopoverOneColumn from './base/PopoverOneColumn.vue'
import DynamicCard from '@/components/VideoCard/DynamicCard.vue'
export default {
    name: 'PopoverDynamic',
    components: {
        PopoverOneColumn,
        DynamicCard,
    }
}
</script>

<style scoped lang="less">

</style>