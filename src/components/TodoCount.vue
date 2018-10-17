<template>
  <span class="todo-count">
    <strong>{{ list | pluralize }}</strong>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    pluralize(length?: number): string {
      const word = length === 1 ? 'item' : 'items';
      return `${length} ${word} left`;
    },
  },
})
export default class TodoCount extends Vue {
  @Prop()
  private list!: number;
}
</script>

<style scoped>
.todo-count {
	float: left;
	text-align: left;
}

.todo-count strong {
	font-weight: 300;
}
</style>
