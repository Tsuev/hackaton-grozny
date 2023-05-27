<template>
  <div class="farmer"
        v-bind:style="{ backgroundImage: 'url(' + objFarmer.img + ')' }"
  >
    <div class="farmer-card">
      <div class="farmer-rate">
        5
      </div>
    </div>
    <div class="farmer-title">
      <div class="farmer-title__name"> {{ objFarmer.title }} </div>
      <div class="farmer-title__type"> <span> {{ objFarmer.subtitle }}:  </span> {{ objFarmer.farmType }}</div>
    </div>
   
  </div>
</template>

<script setup>
  defineProps({
    objFarmer: Object
  })
</script>

<style lang='scss' scoped>
  .farmer{
    width: 270px;
    height: 330px;
    border-radius: 16px;
    padding: 15px;
    background-color: green;
  }
</style>