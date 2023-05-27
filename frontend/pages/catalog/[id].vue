<template>
  <div class="container py-5">
    <div v-if="!isLoading">
      <div v-if="productArr.length" class="flex flex-wrap gap-10">
        <product-card
          v-for="item in productArr"
          :key="item._id"
          :obj-prod="item"
        />
      </div>
      <div v-else class="text-lg font-bold">В категории нет товаров</div>
    </div>
    <Spinner v-else />
  </div>
</template>

<script setup>
const route = useRoute();
const productArr = ref([]);
const isLoading = ref(true);
try {
  fetch(
    `http://192.168.88.151:3000/api/get-product-by-category?categoryId=${route.params.id}`
  )
    .then((res) => res.json())
    .then((res) => {
      productArr.value = res;
    })
    .finally((res) => (isLoading.value = false));
} catch (error) {
  alert(error);
}
</script>

<style lang="scss" scoped></style>
