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
    width: 270px;
    height: 270px;
    border-radius: 16px;
    cursor: pointer;
    background-color: red;
    transition: .5s;
  }

  .category:hover{
    transform: scale(1.05);
    transition: .5s;
  }

  .category-title{
    padding: 15px;
    font-size: 24px;
    color: white;
    font-weight: 600;
    text-shadow: 1px 4px 20px black;
  }
</style>