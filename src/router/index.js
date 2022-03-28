import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../components/HomePage/index.vue'
import VideoPage from '../components/VideoPage/index.vue'

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
            path:'/video',
            component: VideoPage,
            meta: {
                MiniHeaderStatus:true,
            }
        }
    ]
})