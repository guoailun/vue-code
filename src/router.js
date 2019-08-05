import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    path: '/',
    name: 'index',
    component(resolve) {
        require.ensure(['./App.vue'], () => {
            resolve(require('./App.vue'));
        });
    },
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
        }
    ]
})
