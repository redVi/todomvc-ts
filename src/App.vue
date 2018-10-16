<template>
  <div id="app">
    <section class="todoapp">
      <the-header />
      <the-input @clear="clearInput($event)" />

      <main class="main">
        <input
          @click="markTodos"
          class="toggle-all"
          type="checkbox"
        >
        <todo-list :todos="filteredTodos" />
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
  computed: {
    ...mapGetters([
      'allTodos',
      'doneTodos',
      'activeTodos',
    ]),
  },
})
export default class App extends Vue {
  private flag = false;
  private filteredTodos = [];

  private markTodos() {
    this.flag = !this.flag;
    this.$store.dispatch('MARK_TODOS', this.flag);
  }

  private setFilter(event) {
    switch (event) {
      case 'done':
        this.filteredTodos = this.doneTodos;
        break;
      case 'all':
        this.filteredTodos = this.allTodos;
        break;
      default:
        this.filteredTodos = this.activeTodos;
        break;
    }
  }

  beforeMount() {
    this.setFilter();
  }
}
</script>

<style>
  @import url("./assets/todomvc.css");
</style>
