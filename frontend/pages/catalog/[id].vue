<template>
  <h1>Test</h1>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);

fetch("http://192.168.88.151:3000/api/");
</script>

<style lang="scss" scoped></style>
