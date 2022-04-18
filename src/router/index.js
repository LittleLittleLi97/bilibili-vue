import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '@/views/HomePage/index.vue'
import VideoPage from '@/views/VideoPage/index.vue'
import SearchPage from '@/views/SearchPage/index.vue';

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component: HomePage,
            meta: {
                MiniHeaderStatus:false,
            }
        },
        {
            path:'/video/:bvid',
            component: VideoPage,
            meta: {
                MiniHeaderStatus:true,
            }
        },
        {
            path:'/search',
            component: SearchPage,
            meta: {
                MiniHeaderStatus:true,
            }
        },
    ]
})