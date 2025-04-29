<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <TodoSpinner v-if="loading"></TodoSpinner>

            <template v-else>
              <TodoForm></TodoForm>

            <TodoItems></TodoItems>
            
            <TodoEmpty></TodoEmpty>
            </template>

        </div>
    </div>
    <!--/ Content -->
</template>

<script setup>

import axios from 'axios'
import TodoEmpty from './components/TodoEmpty.vue';
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';
import TodoForm from './components/TodoForm.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()
const loading = ref(false)

function esperarUmSegundo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000); // 1000 milissegundos = 1 segundo
  });
}

async function requisition () {
  loading.value = true

  const requisicao = await axios.get('http://localhost:3000/todos')
  store.commit('StoreTodo', requisicao.data)

  await esperarUmSegundo()
  loading.value = false
}

requisition()

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>

