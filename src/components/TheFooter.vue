<script setup lang="ts">
import { computed } from 'vue'
import { useTodosStore } from '@/store'
import { TodoCount, TodoFilters, TodoButton } from '@/components'

const store = useTodosStore()

function clearCompleted() {
  store.clearCompleted()
}

const countedTasks = computed(() => store[`${store.filterName}Todos`].length | 0)
</script>

<template>
  <footer class="footer">
    <TodoCount :list="countedTasks" />

    <TodoFilters />

    <TodoButton
      class="clear-completed"
      @action="clearCompleted"
    >
      Clear completed
    </TodoButton>
  </footer>
</template>

<style scoped>
.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
  0 8px 0 -3px #f6f6f6,
  0 9px 1px -3px rgba(0, 0, 0, 0.2),
  0 16px 0 -6px #f6f6f6,
  0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

@media (max-width: 430px) {
  .footer {
    height: 50px;
  }
}
</style>