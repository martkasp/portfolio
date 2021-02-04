<template>
    <div class="LandingPage__Container">
        <Header />
        <Content />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from './header.vue';
import Content from './Content/index.vue';

@Component({
    components: {
        Header,
        Content,
    },
})
export default class LandingPage extends Vue {

}
</script>

<style lang="scss" scoped>
    @import './styles.scss';
</style>
