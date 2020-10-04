<template>
    <Header :title="fullName" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get } from '@/utils/vuex-module-mutators';
import Header from '@/components/Header/header.vue';
import landingPage from '@/modules/LandingPage';

@Component({
    components: {
        Header,
    },
})
export default class LandingPage extends Vue {
    @Get(landingPage) private fullName!: string;

    created() {
        console.log('Default value', this.fullName);
        landingPage.changeFullName('John Doe');
        console.log('New value', this.fullName);
    }
}
</script>
