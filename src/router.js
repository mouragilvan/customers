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
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;