<script setup lang="ts">
import { ref } from 'vue'
import { useTodosStore } from '@/store'

const store = useTodosStore()
const newTodo = ref('')

async function addTodo() {
  if (newTodo.value) {
    await store.addTodo({
      id: new Date().valueOf().toString(),
      name: newTodo.value,
      done: false,
    })
  }
  newTodo.value = ''
}
</script>

<template>
  <input
    v-model="newTodo"
    autocomplete="off"
    class="new-todo"
    placeholder="What needs to be done?"
    @keyup.enter="addTodo"
  >
</template>
