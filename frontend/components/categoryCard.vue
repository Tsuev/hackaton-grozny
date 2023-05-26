 <template>
  <div class="category"
      v-bind:style="{ backgroundImage: 'url(' + objCategory.img + ')' }"
  >
    <h2 class="category-title">{{ objCategory.title }}</h2>
  </div>
 </template>

 <script setup>
  const props = defineProps({
    objCategory: Object,
  })
</script>

 <style lang="scss" scoped>
  .category{
    width: 290px;
    height: 270px;
    border-radius: 16px;
    cursor: pointer;
    background-color: red;
  }

  .category-title{
    padding: 15px;
    font-size: 24px;
    color: white;
    font-weight: 600;
  }
</style>