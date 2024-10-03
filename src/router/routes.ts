import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/home.vue";
import ProfileView from "../views/profile.vue";

const routes: RouteRecordRaw[] = [
    { path: "", component: HomeView },
    {
        path: "/profile",
        component: ProfileView,
    },
];

export { routes };
