<template>
  <ul class="todo-list">
    <li
      v-for="(todo, index) in list"
      :key="index"
      :class="{ completed: todo.done, editing: todo.editing }"
      class="todo"
      @dblclick="editTodo(todo)"
      @keydown.enter="updateTodo(todo, newName)"
    >

      <div class="view">

        <input
          :checked="todo.done"
          class="toggle"
          type="checkbox"
          @click.prevent="markTodo(todo)"
          v-model="newName"
        >

        <label>{{ todo.name }}</label>

        <button
          class="destroy"
          aria-label="destroy"
          @click.prevent="removeTodo(todo)"
        ></button>

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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Todo } from '../types';

@Component()
export default class TodoList extends Vue {
  @Prop() private todos!: [Todo];

  private newName = '';

  get list() {
    return this.todos.length ? this.todos : [];
  }

  private removeTodo(todo: Todo) {
    this.$store.dispatch('REMOVE_TODO', todo);
  }

  private updateTodo(todo: Todo, name: string) {
    this.$store.dispatch('UPDATE_TODO', {
      todo,
      newName: name || todo.name,
    });
  }

  private editTodo(todo: Todo) {
    this.newName = todo.name;
    this.$store.dispatch('EDIT_TODO', todo);
  }

  private markTodo(todo: Todo) {
    this.$store.dispatch('MARK_TODO', todo);
  }
}
</script>
