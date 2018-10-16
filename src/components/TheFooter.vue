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
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Todo } from '../types';

@Component({
  computed: {
    ...mapGetters(['activeTodos']),
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
