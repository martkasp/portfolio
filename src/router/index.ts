import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingPage from '@/views/LandingPage/index.vue';
import SocialsExample from '@/views/SocialsExample/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'landing',
        component: LandingPage,
    },
    {
        path: '/socials',
        name: 'socialsExample',
        component: SocialsExample,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
