<template>
  <div class="bonus-card mx-1"
  v-bind:style="{ backgroundImage: 'url(' + objBonus.img + ')' }"
  >
    <h2 class="bonus-card__title"> {{ objBonus.title }}</h2>
  </div>  
</template>

<script setup>
  const props = defineProps({
   objBonus: Object
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
  
  .bonus-card__title{
    color: red;
  }

  
</style>