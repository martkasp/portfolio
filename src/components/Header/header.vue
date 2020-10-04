<template>
    <div class="Header__Container md-layout md-elevation-4">
        <div class="Header__Image md-layout-item md-size-50">
            <img
                alt="Profile picture"
                src="profile_default.png"
            />
        </div>
        <div class="Header__Info md-layout-item md-size-50">
            <div class="md-layout-item md-size-100">
                <h4>{{ title }}</h4>
            </div>
            <div class="Header__Socials md-layout-item md-size-100">
                <div class="Header__SocialItem">
                    <a target="_blank" href="#">
                        <font-awesome-icon :icon="['fab', 'github']" /> MartynasKasp
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class Header extends Vue {
    @Prop({ required: true }) private title!: string;
}
</script>

<style lang="scss" scoped>
    @import './styles.scss';
</style>
