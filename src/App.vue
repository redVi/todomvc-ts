<template>
  <div id="app">
    <section class="todoapp">
      <the-header />
      <the-input />

      <main class="main">
        <input
          @click="markTodos"
          class="toggle-all"
          type="checkbox"
        >

        <todo-list
          :todos="filteredTodos"
          :filter="currentFilter"
        />
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
  private flag = false;
  private filteredTodos = [];
  private currentFilter = 'active';

  private markTodos() {
    this.flag = !this.flag;
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
