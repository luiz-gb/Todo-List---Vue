import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    StoreTodo (state, newTodo) {
      state.todos = newTodo
    },

    DeleteteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
  actions: {
    async RequisicaoPost ({commit}, newtodo) {
      requisicao = await axios.post("http://localhost:3000/todos", newtodo)
      commit("StoreTodo", newtodo)
    },

    async AtualizarJson (context, Todo) {
      await axios.patch(`http://localhost:3000/todos/${Todo.id}`, Todo)
    },

    async DeletarTodo ({commit}, Todo) {
      await axios.delete(`http://localhost:3000/todos/${Todo.id}`)
      commit('DeleteTodo', Todo.id)
    }
  },
  modules: {
  }
})
