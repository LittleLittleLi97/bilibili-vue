<template>
    <div>
        <MiniHeader/>
        <HeaderBackground/>
        <HeaderMenu/>
    </div>
</template>

<script>
import HeaderBackground from './HeaderBackground.vue'
import HeaderMenu from './HeaderMenu.vue'
export default {
    name:'TotalHeader',
    components:{
        HeaderBackground,
        HeaderMenu,
    }
}
</script>

<style>

</style>