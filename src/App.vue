<template>
    <div id="app">
        <Navigation />
        <router-view class="App__Layout"/>
    </div>
</template>

<script>
import Navigation from '@/views/Navigation/index.vue';

export default {
    name: 'App',
    components: {
        Navigation,
    },
};
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
        overflow: hidden;
    }

    body {
        margin: 0;

        // Typography of body1
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.5px;
    }

    #app {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $textColor;
        display: flex;
        flex-direction: row;
        line-height: 21px;
    }

    .App__Layout {
        overflow: auto;
        background-color: $backgroundColor;
        scroll-behavior: smooth;
    }
</style>
