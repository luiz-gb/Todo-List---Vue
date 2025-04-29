<template>
  <form
    class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
    @submit.prevent="submit()">
    <input
      placeholder="Adicione um novo item ..."
      type="text" v-model="input_form"
      class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"/>

    <button
      class="text-green-400 text-xs font-semibold focus:outline-none"
      type="submit" style="cursor: pointer;"
      >
      ADICIONAR
    </button>
  </form>
</template>

<script setup>
import axios from "axios"
import {ref} from "vue"
import { useStore } from 'vuex';

let input_form = ref("")
const store = useStore()

function GetId () {
    if (store.state.todos.length !== 0) {
        const item = Number(store.state.todos[store.state.todos.length - 1].id) + 1
        return String(item)
    }
    
    return "1"
    
}   

async function submit() {
    console.log("opa");
    
    let newUser = {
        "id": GetId(),
        "title": input_form.value,
        "completed": false
    }

    await store.dispatch('RequisicaoPost', newUser)
}


</script>