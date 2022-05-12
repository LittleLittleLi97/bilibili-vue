import { createStore } from 'vuex'

import HomePage from './HomePage'
import VideoPage from './VideoPage'
import Login from './Login'
import Search from './Search'
import UserInfo from './UserInfo'

export default createStore({
    modules: {
        HomePage,
        VideoPage,
        Login,
        Search,
        UserInfo,
    }
})