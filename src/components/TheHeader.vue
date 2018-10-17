<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
  @Prop()
  private title!: string;
}
</script>
