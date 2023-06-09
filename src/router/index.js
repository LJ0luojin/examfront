import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'login',
        component:()=>import('../pages/Login.vue')
    },
    {
        path:'/register',
        name:'register',
        component:()=>import('../pages/Regist.vue')
    },
    {
        path:'/kglogin',
        name:'kglogin',
        component:()=>import('../pages/kgLogin.vue')

    }
]

const router  = new VueRouter({
    routes
})

export default router
