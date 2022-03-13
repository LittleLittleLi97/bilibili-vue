import { createApp } from 'vue'
import App from './App.vue'

import TotalHeader from './components/TotalHeader/index.vue'
import MiniHeader from './components/TotalHeader/MiniHeader.vue'
import Carousel from './components/Carousel'
import VideoCard from './components/VideoCard/VideoCard.vue'

const app = createApp(App);

app.component(TotalHeader.name, TotalHeader);
app.component(MiniHeader.name, MiniHeader);
app.component(Carousel.name, Carousel);
app.component(VideoCard.name, VideoCard);

app.mount('#app');