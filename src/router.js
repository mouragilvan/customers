import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [

    {
        path: "/",
        name: "app",
        component: App,

    },
    {
        path: "/home",
        name: "home",
        component: () => import("./pages/Home.vue")
    },
    {
        path: "/inicio",
        name: "inicio",
        component: () => import("./pages/inicio.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;