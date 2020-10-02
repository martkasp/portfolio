<template>
    <Header />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Header from '@/components/Header/header.vue';

@Options({
    components: {
        Header,
    },
})
export default class LandingPage extends Vue {

}
</script>
