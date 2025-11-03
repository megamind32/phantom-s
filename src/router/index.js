import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"; // Adjust the path as needed

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../components/Login.vue"),
    },
    {
        path: "/:pathMatch(.*)*", // Catch-all route
        redirect: "/login", // Redirect to the login page
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
