<template>
    <div class="LandingPage__HeaderContainer">
        <div class="LandingPage__HeaderMaskView">
            <particles-bg
                type="cobweb"
                :num="particlesCount"
                color="#faffbf"
                :bg="false"
            />
            <div class="LandingPage__HeaderMask">
                <div class="LandingPage__HeaderMaskContent md-layout">
                    <div class="md-layout-item md-size-100 md-layout md-alignment-center-center">
                        <div class="md-layout-item md-size-40 md-medium-size-100">
                            <img src="/img/profile.png" />
                        </div>
                        <div class="md-layout-item md-size-60 md-medium-size-100">
                            <h1>Martynas Kasparavičius</h1>
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ParticlesBg } from 'particles-bg-vue';

export default {
    name: 'Header',
    components: {
        ParticlesBg,
    },
    computed: {
        particlesCount() {
            return window.innerWidth / 12;
        },
    },
};
</script>

<style lang="scss" scoped>
    @import './styles.scss';
</style>
