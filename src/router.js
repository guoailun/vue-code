import Vue from 'vue';
// import Router from 'vue-router';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import UserProfile from './views/UserProfile.vue';
import UserPosts from './views/UserPosts.vue';
import UserProfilePreview from './views/UserProfilePreview.vue';
import AasHelloWorld from './views/AasHelloWorld.vue';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.use(VueRouter)

export default new VueRouter({
    
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/a',
            redirect: { name: 'HelloWorld' }
        },
        // { path: '/a', component: AasHelloWorld, alias: '/hello' },  不好使

        {
            path: '/hello',
            name: 'HelloWorld',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/HelloWorld.vue'),
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    // name: 'helper',
                    component: UserProfile,
                    // default: UserProfile,
                    // helper: UserProfilePreview // 不好使
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'posts/:id',
                    name: "postsName",
                    component: UserPosts,
                    props: true
                }
            ]
        }
    ],
    // scrollBehavior (to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
})
