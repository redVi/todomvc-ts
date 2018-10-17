<template>
    <input
      v-model="newTodo"
      autocomplete="off"
      class="new-todo"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
    >
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheInput extends Vue {
  private newTodo = '';

  private addTodo() {
    this.$store.dispatch('todos/ADD_TODO', this.newTodo);
    this.newTodo = '';
  }
}
</script>
