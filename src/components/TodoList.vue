<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTodosStore } from '@/store'
import { ITodo } from '@/types.ts'
import { TodoButton } from '@/components'

const store = useTodosStore()
const newName = ref('')
const list = computed(() => store[`${store.filterName}Todos`])

function removeTodo(todo: ITodo) {
  store.removeTodo(todo)
}

function makeTodoComplete(id: string) {
  store.makeTodoComplete(id)
}
</script>

<template>
  <ul class="todo-list">
    <li
      v-for="todo in list"
      :key="todo.id"
      :class="{ completed: todo.done, editing: todo.editing }"
      class="todo"
    >
      <div class="view">
        <input
          :checked="todo.done"
          :value="newName"
          class="toggle"
          type="checkbox"
          @change="makeTodoComplete(todo.id)"
        >

        <label>{{ todo.name }}</label>

        <TodoButton
          class="destroy"
          @action="removeTodo(todo)"
        />
      </div>

      <input
        v-show="todo.editing"
        v-model="newName"
        type="text"
        class="edit"
      >
    </li>
  </ul>
</template>
