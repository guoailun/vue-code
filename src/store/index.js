import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

// import common from './module/common'
import listData from './module/test1'
import test2 from './module/test2'

export default new Vuex.Store({
  modules: {
    // common, // 公用
    listData,
    test2
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // 修改存储的状态
    })
  ] // 状态持久化
})