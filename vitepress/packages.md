---
layout: page
outline: 2
outlineTitle: Packages
search:
  scope: ['./']
---
<script setup>
import PageContainer from './components/PageContainer.vue'
import PackageList from './components/PackageList.vue'
</script>

<div class="VPDoc content">
  <PageContainer>
    <PackageList />
  </PageContainer>
</div>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
}

</style>