<template>
    <Popover>
        <template v-slot:content>
            <div class="pop-content">
                <div class="collect-folder">
                    <div class="folder"
                        :class="{active:collect.id===showId}"
                        v-for="collect in collectList"
                        :key="collect.id"
                        @click="changeShow(collect.id)">
                        <span class="folder-title">{{ collect.title }}</span>
                        <span class="list-length">{{ collect.media_count }}</span>
                    </div>
                </div>
                <div class="collect-list" v-if="collectShow && collectShow.medias">
                    <CollectCard
                        v-for="item in collectShow.medias"
                        :key="item.id"
                        :videoInfo="item"
                    />
                </div>
            </div>
        </template>
    </Popover>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

import Popover from './base/Popover.vue'
import CollectCard from '@/components/VideoCard/CollectCard.vue'
export default {
    name: 'PopoverCollect',
    components: {
        Popover,
        CollectCard,
    },
    setup(props) {
        const store = useStore();

        const collectList = computed(()=>store.state.UserInfo.collectList);
        const collectShow = computed(()=>store.state.UserInfo.collectDetail[showId.value]);
        const showId = ref(0);
        watch(collectList, ()=>showId.value = collectList.value[0].id);
        function changeShow(id){
            showId.value = id;
        }
        onMounted(() => {
            store.dispatch('UserInfo/getUserCollect');
        })
        return {
            collectList,
            collectShow,
            showId,
            changeShow,
        }
    }
}
</script>

<style scoped lang="less">
.pop-content {
    display: flex;

    width: 520px;
    height: 540px;

    .collect-folder {
        width: 150px;

        border-right: 1px solid var(--line_regular);

        padding: 10px 0;

        overflow: scroll;
        overscroll-behavior: contain;

        .folder {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 0 20px;

            font-size: 14px;
            color: var(--text1);

            height: 46px;

            cursor: pointer;

            .folder-title {
                font-weight: 500;
            }
            .list-length {
                font-size: 12px;
                color: var(--text3);
            }
        }
        .active {
            // 点击后的样式
            color: #fff;

            background-color: var(--brand-blue);
            
            .list-length {
                color: #fff;
            }
        }
    }
    .collect-list {
        flex: 1;

        padding: 10px 0;

        overflow: scroll;
        overscroll-behavior: contain;
    }
}
</style>