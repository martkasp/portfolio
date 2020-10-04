<template>
    <Header title="John" />
    <div class="md-elevation-4 md-layout md-gutter md-size-100">
        <div class="md-layout-item md-size-100">
            <h3>Socials requests example page</h3>

            <div
                v-for="item in items"
                :key="item.id"
            >
                <a :href="item.link">{{ item.title }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Get } from '@/utils/vuex-module-mutators';
import Header from '@/components/Header/header.vue';
import socials from '@/modules/SocialsExample';
import { SocialType } from '@/modules/SocialsExample/types';

@Options({
    components: {
        Header,
    },
})
export default class SocialsExample extends Vue {
    @Get(socials, 'socials') private items!: SocialType[];

    async created() {
        await socials.getAllSocials();
        await socials.getSocial('1');
    }
}
</script>
