<script setup>
import { ref } from "vue"
import { data } from './PackageList.data'
import GridSection from './base/GridSection.vue'
import PackageListItem from "./PackageListItem.vue";

const pageSize = 12; // number of items per page
const currentPage = ref(1); // current page number
const totalPages = Math.ceil(data.packages.length / pageSize); // total number of pages

function paginatePackages() {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.packages.slice(startIndex, endIndex);
}
</script>

<template>
  <GridSection
    title="Packages"
    :headingLevel="1"
    class="package-group"
  >

    <!-- 
    <PackageListItem
      v-for="packageData in data.packages"
      :key="packageData.id"
      :packageData="packageData"
    /> -->

     <PackageListItem
      v-for="packageData in paginatePackages()"
      :key="packageData.id"
      :packageData="packageData"
    />
  </GridSection>

  <!-- pagination controls -->
  <div class="pagination">
    <button @click="currentPage = 1" :disabled="currentPage === 1">First</button>
    <button @click="currentPage -= 1" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }} of {{ totalPages }}</span>
    <button @click="currentPage += 1" :disabled="currentPage === totalPages">Next</button>
    <button @click="currentPage = totalPages" :disabled="currentPage === totalPages">Last</button>
  </div>
</template>

<style scoped>
.name {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
}

.package-group {
  margin-bottom: 96px;
}

.pagination {
  margin-top: 32px;
  text-align: center;
}

.pagination button {
  margin: 0 8px;
}
</style>
