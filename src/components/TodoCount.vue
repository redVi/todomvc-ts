<script setup lang="ts">
defineProps<({
  list: number;
})>()
</script>

<template>
  <span class="todo-count">
    <strong>{{ list }}</strong>
  </span>
</template>

<style scoped>
.todo-count {
  float: left;
  text-align: left;
}

.todo-count strong {
  font-weight: 300;
}
</style>