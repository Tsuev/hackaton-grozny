<template>
  <div class="container">
    <CategoryCard />
  </div>
</template>

<script setup lang="ts">
const categories = reactive([]);

fetch("http://192.168.88.151:3000/api/category/get-categories")
  .then((res) => res.json())
  .then((res) => console.log(res));
</script>

<style lang="scss" scoped></style>
