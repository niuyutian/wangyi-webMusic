import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/Layout';
import Home from '@/views/Home';
import Search from '@/views/Search';
import Friend from '@/views/Friend';
import Set from '@/views/Set';
import NotFound from '@/views/Notfound';
import Play from '@/views/Play';
import Login from '@/views/Login';


// import Play from '@/views/Play/index.vue';

Vue.use(VueRouter)
const routes =[
    {
        path: '/',
        redirect:'/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect:'/layout/home',
        children:[
            {
                path:'home',
                component: Home,
                meta:{
                    title:"首页"
                }
            },
            {
                path:'search',
                component: Search,
                meta:{
                    title:"搜索"
                }
            },
            {
                path:'set',
                component: Set,
                meta:{
                    title:"设置"
                }
            },
            {
                path:'friend',
                component: Friend,
                meta:{
                    title:"朋友"
                }
            }
        ]
    },
    {
        path: '/play',
        component: Play,
    },
    {
        path: '/Login',
        component: Login,
    },
    {
        path: '*',
        component: NotFound
    }
    // {
    //     path: '/play',
    //     component: Play
    // },
] 
const  router =new VueRouter({
    routes
})
export default router