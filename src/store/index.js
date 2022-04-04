import { createStore } from 'vuex'

import HomePage from './HomePage'
import VideoPage from './VideoPage'

export default createStore({
    modules: {
        HomePage,
        VideoPage,
    }
})