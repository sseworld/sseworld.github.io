// components/GoBackButton.vue
<template>
  <a href="#" @click.prevent="$router.go(-1)" class="go-back-button">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
    Go Back
  </a>
</template>

<script>
export default {
  name: 'GoBackButton',
}
</script>

<style scoped>
.go-back-button {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
  text-decoration: none;
}

.go-back-button svg {
  margin-right: 10px;
}
</style>