<template>
    <div>
        <MiniHeader/>
        <HeaderBackground/>
        <HeaderMenu/>
    </div>
</template>

<script>
import MiniHeader from './MiniHeader.vue'
import HeaderBackground from './HeaderBackground.vue'
import HeaderMenu from './HeaderMenu.vue'
export default {
    name:'TotalHeader',
    components:{
        MiniHeader,
        HeaderBackground,
        HeaderMenu,
    }
}
</script>

<style>

</style>