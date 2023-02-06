import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

import router from './router'
import store from './store'

import '../public/common.css'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueLazyload);

app.mount('#app');