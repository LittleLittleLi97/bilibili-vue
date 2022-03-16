<template>
    <div>
        <TotalHeader/>
        <HomePage/>
        <Footer/>
    </div>
</template>

<script>
import HomePage from './components/HomePage'
import Footer from './components/Footer'
export default {
    name:'App',
    components: {
        HomePage,
        Footer,
    }
}
</script>

<style>

</style>