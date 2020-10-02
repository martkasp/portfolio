import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingPage from '@/views/LandingPage/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'landing',
        component: LandingPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
