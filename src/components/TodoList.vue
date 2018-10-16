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
          :value="newName"
          class="toggle"
          type="checkbox"
          @click.prevent="markTodo(todo, $event)"
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
import { mapGetters } from 'vuex';
import { Todo } from '../types';

@Component({
  computed: {
    ...mapGetters([
      'allTodos',
      'doneTodos',
      'activeTodos',
    ]),
  },
})
export default class TodoList extends Vue {
  @Prop()
  private filter!: string;

  private newName = '';

  get list() {
    switch (true) {
      case this.filter === 'done': return this.doneTodos;
      case this.filter === 'all': return this.allTodos;
      default: return this.activeTodos;
    }
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

  private markTodo(todo: Todo, event) {
    this.newName = event.target.value;
    this.$store.dispatch('MARK_TODO', todo);
  }
}
</script>
