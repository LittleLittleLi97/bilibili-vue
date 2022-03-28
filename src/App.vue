<template>
    <div>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'
import Footer from './components/Footer'
export default {
    name:'App',
    components: {
        HomePage,
        VideoPage,
        Footer,
    }
}
</script>

<style>

</style>