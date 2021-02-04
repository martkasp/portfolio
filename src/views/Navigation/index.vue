<template>
    <div :class="elementStyle">
        <div class="Navigation__Logo">
            <span>MartynasKasp</span>
        </div>
        <div class="Navigation__Menu">
            <ul>
                <li class="Navigation__MenuItem">
                    <a href="#cv">CV</a>
                </li>
                <li class="Navigation__MenuItem">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li class="Navigation__MenuItem">
                    <a href="#contact">Contact me</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
    private dense: boolean = false;

    private onScroll: Function = () => {};

    created() {
        this.onScroll = () => {
            console.log('on scroll happened, scrollY', window.scrollY);
            if (window.screenY > 10) {
                this.dense = true;
            } else {
                this.dense = false;
            }
        };
        document.addEventListener('scroll', this.onScroll as EventListener);
    }

    destroyed() {
        document.removeEventListener('scroll', this.onScroll as EventListener);
    }

    get elementStyle() {
        return [
            'Navigation__Content',
            { 'Navigation__Content--dense': this.dense },
        ];
    }
}
</script>

<style lang="scss" scoped>
    @import './styles.scss';
</style>
