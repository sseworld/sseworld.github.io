<template>
  <div class="block">
    <div class="block-header">
      <div class="block-title">{{ title }}</div>
    </div>
    <div class="block-body">
      <div class="block-shields">
        <a v-for="(shield, index) in shields" :key="index" :href="shield.href" target="_blank" rel="noopener noreferrer">
          <img :src="shield.src" :alt="shield.alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    shields: Array
  }
}
</script>

<style scoped>
.block {
  border: 1px solid #eaeaea;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
}

.block-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.block-title {
  font-weight: bold;
  margin-right: auto;
}

.block-body {
  padding-top: 8px;
}

.block-shields img {
  margin-right: 8px;
}
</style>
