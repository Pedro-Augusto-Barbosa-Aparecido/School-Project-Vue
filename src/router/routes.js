import Vue from "vue";
import VueRouter from "vue-router";

import HomeAdmin from "../pages/HomeAdmin";
import SubjectListPage from "../pages/SubjectListPage";
import NotFoundPage from "../pages/NotFoundPage";

Vue.use(VueRouter);


const routes = [
    {
        path: "/admin",
        component: HomeAdmin
    },
    {
        path: "/admin/subjects",
        component: SubjectListPage,
        meta: { title: "School - Subjects List" }
    },
    {
        path: "*",
        component: NotFoundPage,
        meta: { title: "Not Found" }
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;