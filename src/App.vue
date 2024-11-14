<script setup lang="ts">
import { TheFooter, TheHeader, TheInput, TodoList } from '@/components'
import { onMounted } from 'vue'
import { useTodosStore } from '@/store'
const store = useTodosStore()

onMounted(async () => {
  await store.apiGetTodos()
})
</script>

<template>
  <div id="app">
    <section class="todoapp">
      <TheHeader title="todos" />

      <TheInput />

      <main class="main">
        <input
          type="checkbox"
          class="toggle-all"
        >
        <TodoList />
      </main>

      <TheFooter />
    </section>

    <footer
      class="info"
      role="contentinfo"
    >
      <p>Double-click to edit a todo</p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>
