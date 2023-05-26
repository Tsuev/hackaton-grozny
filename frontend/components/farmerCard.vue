<template>
  <div class="farmer"
        v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="farmer-card">
      <div class="farmer-rate">
        5
      </div>
    </div>
    <div class="farmer-title">
      <div class="farmer-title__name"> {{ title }} Boris</div>
      <div class="farmer-title__type"> <span> {{ subtitle }} поставщик: </span> {{ farmerType }}</div>
    </div>
   
  </div>
</template>

<script setup lang='ts'>
  defineProps({
    title: String,
    subtitle: String,
    image: String,
    farmerType: String,
  })
</script>

<style lang='scss' scoped>
  .farmer{
    width: 270px;
    height: 390px;
    background: green;
    border-radius: 16px;
    padding: 15px;
  }
</style>