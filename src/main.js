import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import $ from 'jquery'
import '@/assets/css/index.less'


Vue.config.productionTip = false

Vue.prototype.loading = true; // 挂载到 Vue 实例上


router.beforeEach((to, from, next) => {
  // ...
    // console.log('=====>1', to);
    // console.log('=====>2', from);
    // console.log('=====>3', next);
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
