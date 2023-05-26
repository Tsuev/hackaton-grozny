<template>
  <div class="container">
    <div
      v-if="categories"
      class="catalog flex flex-wrap gap-4 justify-between py-5"
    >
      <CategoryCard
        v-for="category in categories"
        :key="category._id"
        :objCategory="category"
      />
    </div>
    <Spinner v-else />
  </div>
</template>

<script setup lang="ts">
let categories: any = ref(null);

fetch(`http://192.168.88.151:3000/api/category/get-categories`)
  .then((res) => res.json())
  .then((res) => (categories.value = res));
</script>

<style lang="scss" scoped></style>
