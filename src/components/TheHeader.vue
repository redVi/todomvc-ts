<template>
    <header class="header">
        <h1>{{ heading }}</h1>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
  private heading = 'todos';
}
</script>

