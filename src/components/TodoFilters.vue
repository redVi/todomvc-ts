<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useTodosStore } from '@/store'

const store = useTodosStore()
const selectedFilter = ref('active')
const filterList = reactive([ 'active', 'all', 'done' ])

function setFilter(name: string) {
  selectedFilter.value = name
  store.setFilter(selectedFilter.value)
}
</script>

<template>
  <ul class="filters">
    <li
      v-for="name in filterList"
      :key="`filter-${name}`"
    >
      <a
        :class="{ 'selected': name === store.filterName }"
        href=""
        @click.prevent="setFilter(name)"
      >
        {{ name }}
      </a>
    </li>
  </ul>
</template>

<style scoped>
.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}

@media (max-width: 430px) {
  .filters {
    bottom: 10px;
  }
}
</style>