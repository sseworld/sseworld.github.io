<script setup>
import { useRouter } from 'vitepress';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import Card from './base/Card.vue';

// Using useRouter and destructuring go from it
const { go } = useRouter();

// Using defineProps in JavaScript without TypeScript-specific syntax
const props = defineProps(['packageData']);
</script>

<template>
  <div>
    <Card class="package">
      <header class="package-header">
        <div class="package-icon-well">
          <img :src="props.packageData.icon" alt="" class="package-icon" :class="{[props.packageData.iconClass]: true, light: props.packageData.iconDark}" />
          <img v-if="props.packageData.iconDark" :src="props.packageData.iconDark" alt="" class="package-icon dark" :class="props.packageData.iconClass" />
        </div>
        <div class="package-title">
          <h2 class="title">{{ props.packageData?.name }}</h2>
          <a v-for="shield in props.packageData.shields" :key="shield.href" :href="shield.href" class="package-shield" rel="noreferrer noopener">
            <img :src="shield.src" :alt="shield.href" />
          </a>
        </div>
      </header>
      <div class="package-details">
        {{ props.packageData.desc }}
      </div>
      <footer class="package-footer">
        <VPButton
          :href="props.packageData.documentation"
          text="Guide"
          theme="brand"
        />
        <VPButton
          :href="props.packageData.source"
          text="Source"
          theme="alt"
        />
      </footer>
    </Card>
  </div>
</template>

<style scoped>
.package {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}
.package-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
@media screen and (min-width: 480px) {
  .package-header {
    flex-direction: row;
  }
}
.package-icon-well {
  padding: 16px;
  border-radius: 12px;
  background-color: var(--vp-c-bg);
}
.package-icon {
  width: 64px;
  height: 64px;
}
h2.title {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 18px;
  font-weight: bold;
}
.package-title {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.package-details {
  flex-grow: 1;
}
.package-footer {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
html.dark .package-icon-invert {
  filter: invert(1) hue-rotate(180deg);
}
html.dark .package-icon.light {
  display: none;
}
html:not(.dark) .package-icon.dark {
  display: none;
}
</style>
