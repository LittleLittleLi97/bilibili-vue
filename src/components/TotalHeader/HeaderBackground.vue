<template>
    <div class="background">
        <div class="background-inner">
            <img src="./images/logo.png">
        </div>
    </div>
</template>

<script>
export default {
    name:'HeaderBackground',
}
</script>

<style scoped>
    .background {
        background-image: url('./images/background.png');
        background-repeat: no-repeat;
        background-position: center 0;
        background-size: cover;
        height: 155px;
        padding: 0 56px;
    }
    .background-inner {
        display: flex;
        align-items: end;
        height: 155px;
    }
    .background-inner img {
        width: 162px;
        height: 78px;
        margin-bottom: 10px;
    }
</style>