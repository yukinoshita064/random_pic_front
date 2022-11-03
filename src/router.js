import randomPageIndex from "@/pages/randomPageIndex";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import adminPostPicture from "@/pages/adminPostPicture";
import loginFromAcgn from "@/components/loginFromAcgn";


const routes=[
    {
        path:"/",
        component:randomPageIndex
    },
    {
        path:"/admin",
        component: adminPostPicture
    },
    {
        path: "/login/callback",
        component: loginFromAcgn
    }
]

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router