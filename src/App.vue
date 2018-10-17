<template>
  <div id="app">

    <section class="todoapp">

      <the-header title="todos" />

      <the-input />

      <main class="main">
        <input
          @click="markTodos"
          class="toggle-all"
          :checked="!doneTodos"
          type="checkbox"
        >

        <todo-list :filter="currentFilter" />
      </main>

      <the-footer @filter="setFilter" />

    </section>

    <footer class="info" role="contentinfo">
      <p>Double-click to edit a todo</p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import TheHeader from './components/TheHeader.vue';
import TheInput from './components/TheInput.vue';
import TodoList from './components/TodoList.vue';
import TheFooter from './components/TheFooter.vue';

@Component({
  components: {
    TheHeader,
    TheInput,
    TodoList,
    TheFooter,
  },
})
export default class App extends Vue {
  private flag = true;
  private currentFilter = 'active';

  get doneTodos() {
    return this.$store.state.todos.every((todo) => todo.done);
  }

  private markTodos() {
    this.flag = this.doneTodos ? false : true;
    this.$store.dispatch('MARK_TODOS', this.flag);
  }

  private setFilter(event: string) {
    this.currentFilter = event;
  }
}
</script>

<style>
@import url("./assets/todomvc.css");
</style>
