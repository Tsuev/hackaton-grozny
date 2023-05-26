<template>
  <div class="bonus-card"
  v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <h2 class="bonus-card__title">Милые цены</h2>
  </div>  
</template>

<script setup lang='ts'>
  defineProps({
    title: String,
    image: String,
  })
</script>

<style lang='scss' scoped>
  .bonus-card{
    width: 175px;
    height: 175px;
    border-radius: 16px;
    padding: 10px;
    background-image: url("https://grandgames.net/puzzle/f1200/ovoshchi_9.jpg");
    background: green;
    color: white;
    font-size: 22px;
    font-weight: 500;
  }

  
</style>