

export default {
  namespaced: true,

  state: {
    loadFlag: false,
    actionCount: 1,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    testSetterCount: 30
  },
  mutations: { // mutation 都是同步事务
    changeLoadFlag (state, value) {
      state.loadFlag = value;
    },
    changeLoadFlag2 (state, value) {
      state.loadFlag = value.count;
    },
    changeAcount (state, value) {
      value++;
      state.actionCount = value;
    }
  },
  actions: {
    getAcount({commit}) {
      setTimeout(()=>{
        commit('changeAcount', 6)
      }, 3000)
    }
  },
  getters: {
    listCount: state =>  {
      return state.todos.length;
    }
  }
}

