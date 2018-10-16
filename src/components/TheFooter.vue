<template>
  <footer class="footer">

    <span class="todo-count">
      <strong>{{ activeTodos.length | pluralize }}</strong>
    </span>

    <ul class="filters">

      <li v-for="(item, index) in filterList" :key="index">
        <a
          :class="{ 'selected': item === selectedFilter }"
          href=""
          @click.prevent="setFilter(item)"
        >{{ item }}</a>
      </li>

    </ul>

    <button
      v-show="doneTodos.length"
      class="clear-completed"
      @click="clearCompleted"
    >
      Clear completed
    </button>

  </footer>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Todo } from '../types';
import { CLEAR_COMPLETED } from '../store/mutation-types';

@Component({
  computed: {
    ...mapGetters([
      'activeTodos',
      'doneTodos',
    ]),
  },
  filters: {
    pluralize(length?: number): string {
      const word = length === 1 ? 'item' : 'items';
      return `${length} ${word} left`;
    },
  },
})
export default class TheFooter extends Vue {
  private filterList = [ 'active', 'all', 'done' ];
  private selectedFilter = this.filterList[0];

  @Emit()
  private filter(name) {
    return name;
  }

  private clearCompleted() {
    this.$store.dispatch(CLEAR_COMPLETED);
  }

  private setFilter(name: string) {
    this.selectedFilter = name;

    switch (name) {
      case 'active':
        this.filter('active');
        break;
      case 'done':
        this.filter('done');
        break;
      default:
        this.filter('all');
        break;
    }
  }
}
</script>
