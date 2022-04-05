import { createStore } from 'vuex'

import HomePage from './HomePage'
import VideoPage from './VideoPage'
import Login from './Login'

export default createStore({
    modules: {
        HomePage,
        VideoPage,
        Login,
    }
})