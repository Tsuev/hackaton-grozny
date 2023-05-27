<template>
  <Header />
  <div>
    <slot />
  </div>
</template>

<script setup>
import { useFetchUserStore } from "@/store/index";

const store = useFetchUserStore();


// const showHeader = computed(()=> !store.dataUser.isFarmer)
</script>

<style lang="scss" scoped></style>
