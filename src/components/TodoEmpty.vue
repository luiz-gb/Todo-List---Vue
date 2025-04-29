<template>
    <div class="text-center text-lg text-gray-500" v-if="lista_todo.length === 0">
                Você ainda não tem nenhuma tarefa.
            </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue'
const store = useStore()

const lista_todo = ref(store.state.todos)


</script>