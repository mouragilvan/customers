import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [

    {
        path: "/",
        name: "app",
        component: App,
        children: [
            {
                path: "/inicio",
                component: () => import("./pages/inicio.vue")

            }
        ]
    },
    {
        path: "/home",
        name: "home",
        component: () => import("./pages/Home.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;