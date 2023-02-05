<template>
    <el-skeleton style="width: 100%; height: 100%;" :loading="loading" v-for="item in length">
        <template #template>
            <el-skeleton-item variant="image" style="width: 100%; padding-bottom: 60%;" />
            <div style="margin: 10px 0;">
                <el-skeleton-item variant="p" style="width: 50%" />
                <div
                    style="
                        display: flex;
                        align-items: center;
                        justify-items: space-between;
                "
                >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
                </div>
            </div>
        </template>
    </el-skeleton>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'SkeletonVideoCard',
    props: ["loading", "length"],
    setup(props) {
        const loading = computed(()=>props.loading);
        const length = computed(()=>props.length);
        return {
            loading,
            length
        }
    }
}
</script>

<style scoped>

</style>