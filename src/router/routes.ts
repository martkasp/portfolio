import LandingPage from '@/views/LandingPage/index.vue';
import SocialsExample from '@/views/SocialsExample/index.vue';

export type RouteType = {
    path: string,
    name: string,
    component?: any,
    menu?: boolean,
    icon?: string,
    permissions?: string[],
    beforeEnter?: (to, from, next) => void,
    children?: RouteType[],
};

const routes = () => {
    const routesArr: RouteType[] = [
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

    return routesArr;
};

export { routes };
