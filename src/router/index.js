import { createWebHistory, createRouter } from "vue-router";
// import App from "./../App.vue";
import _503 from "./../components/errors/503.vue"
import _404 from "./../components/errors/404.vue"
import home from "./../components/homepage/home.vue";

const routes = [{
        path: "/",
        name: "home",
        component: home,
    }, {
        path: "/publications",
        name: "Publications",
        component: _503,
    }, {
        path: '/:pathMatch(.*)*',
        name: "notfound",
        component: _404,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;