import { createApp } from 'vue'
import App from './App.vue'

import TotalHeader from './components/TotalHeader/index.vue'
import MiniHeader from './components/TotalHeader/MiniHeader.vue'

const app = createApp(App);

app.component(TotalHeader.name, TotalHeader);
app.component(MiniHeader.name, MiniHeader);

app.mount('#app');