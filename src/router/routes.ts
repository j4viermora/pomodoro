import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/home.vue";
import ProfileView from "../views/profile.vue";

const routes: RouteRecordRaw[] = [
    { path: "", name: "home", component: HomeView },
    {
        path: "/profile",
        name: "profile",
        component: ProfileView,
    },
];

export { routes };
