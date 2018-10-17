<template>
  <ul class="filters">

    <li v-for="(item, index) in filterList" :key="index">

      <a
        :class="{ 'selected': item === selectedFilter }"
        href=""
        @click.prevent="setFilter(item)"
      >
        {{ item }}
      </a>
    </li>

  </ul>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component
export default class TodoFilters extends Vue {
  private filterList = [ 'active', 'all', 'done' ];
  private selectedFilter = this.filterList[0];

  @Emit()
  private filter(name) {
    return name;
  }

  private setFilter(name: string) {
    this.selectedFilter = name;
    this.filter(name);
  }
}
</script>

<style scoped>
.filters {
	margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	right: 0;
	left: 0;
}

.filters li {
	display: inline;
}

.filters li a {
	color: inherit;
	margin: 3px;
	padding: 3px 7px;
	text-decoration: none;
	border: 1px solid transparent;
	border-radius: 3px;
}

.filters li a:hover {
	border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
	border-color: rgba(175, 47, 47, 0.2);
}

@media (max-width: 430px) {
  .filters {
		bottom: 10px;
	}
}
</style>
