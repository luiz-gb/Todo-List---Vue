import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    StoreTodo (state, newTodo) {
      state.todos = newTodo
    }
  },
  actions: {
  },
  modules: {
  }
})
