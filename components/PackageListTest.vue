<script setup>
import { ref } from 'vue';
import { data } from './PackageList.data'
import GridSection from './base/GridSection.vue'
import PackageListItem from "./PackageListItem.vue";

const pageSize = 9; // number of items per page
const currentPage = ref(1); // current page number
const totalPages = ref(Math.ceil(data.packages.length / pageSize)); // total number of pages

function paginatePackages() {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return filteredPackages.value.slice(startIndex, endIndex);
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++; // increment current page
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--; // decrement current page
  }
}
</script>

<template>
  <GridSection
    title="Packages"
    :headingLevel="1"
    class="package-group"
  >
    <!-- package list -->
    <PackageListItem
      v-for="packageData in paginatePackages()"
      :key="packageData.id"
      :packageData="packageData"
    />
  </GridSection>

  <!-- pagination controls -->
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage.value === 1">First</button>
    <button @click="prevPage" :disabled="currentPage.value === 1">Previous</button>
    <span>{{ currentPage.value }} of {{ totalPages.value }}</span>
    <button @click="nextPage" :disabled="currentPage.value === totalPages.value">Next</button>
    <button @click="nextPage" :disabled="currentPage.value === totalPages.value">Last</button>
  </div>
</template>