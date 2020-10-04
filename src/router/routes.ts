import LandingPage from '@/views/LandingPage/index.vue';

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
    ];

    return routesArr;
};

export { routes };
