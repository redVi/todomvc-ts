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
import { ADD_TODO } from '@/store/mutation-types';

@Component
export default class TheInput extends Vue {
  private newTodo = '';

  private addTodo() {
    this.$store.dispatch(ADD_TODO, this.newTodo);
    this.newTodo = '';
  }
}
</script>
