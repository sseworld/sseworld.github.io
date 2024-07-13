<script setup>
import { computed } from 'vue';
import CardGrid from './CardGrid.vue';

// Using defineProps in JavaScript without TypeScript-specific syntax
const props = defineProps(['title', 'headingLevel']);

const headingElement = computed(() => `h${props.headingLevel}`);
</script>

<template>
  <section>
    <component :is="headingElement" class="name">{{ props.title }}</component>
    <CardGrid>
      <slot />
    </CardGrid>
  </section>
</template>

<style scoped>
.name {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 36px;
}

section {
  margin-bottom: 96px;
}
</style>
