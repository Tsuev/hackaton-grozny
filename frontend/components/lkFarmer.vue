<template>
  <div>
     <div v-if="actPage == 0">
        <h1 class="text-[30px] font-bold mb-[40px]">Личный Кабинет</h1>
        <ul class="text-gray-800 max-w-[500px] font-semibold space-y-[20px]">
           <li class="flex" v-for="i in lkUserData" :key="i.title">
              <span class="min-w-[200px] mr-[20px] text-gray-400">{{ i.title }}</span> {{ i.txt }}
           </li>
        </ul>
        <button @click="modalUserChange = true"
           class="py-[10px] px-[20px] mt-[40px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Изменить</button>
        <ChangeUserInf v-if="modalUserChange" @close="modalUserChange = false" />
     </div>
     <div v-if="actPage == 1">
        <h1 class="text-[30px] font-bold mb-[40px]">Список товаров</h1>

     </div>
     <div v-if="actPage == 2">
        <h1 class="text-[30px] font-bold mb-[40px]">Добавить товар</h1>
        <!-- <CreditCard :card-obj="cardObj" v-if="cardObj" />
        <div v-else>
           <button @click="modalCardCash = true"
              class="py-[10px] px-[20px] mt-[40px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Добавить
              карту</button>
           <AddCardCash v-if="modalCardCash" @close="modalCardCash = false" />
        </div> -->
        <form class="grid grid-cols-2" action="">
          <div>
            <p>Название продукта</p>
            <input class = "product-title" type="text">
          </div>

          <div>
            <p>Описание</p>
            <input class = "product-descrition" type="text">
          </div>

          <div>
            <p>Количество</p>
            <input type="number">

            <p>Единицы измерения</p>
            <select name="" id="">
              <option value="value1" selected>Кг</option>
              <option value="value2">Гр</option>
              <option value="value3">Л</option>
            </select>
          </div>

          <div>
            <p>Цена</p>
            <input type="number">
          </div>
          
          <div>
            <p>Оптовая цена</p>
            <input type="number" name="" id="">
          </div>
          
          <div>
            <p>Скидочная цена</p>
            <input type="number" name="" id="">
          </div>
          
          <br>
          
        </form>
        <button class="farmerBtn py-[10px] px-[20px] mt-[20px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Выставить</button>
     </div>
  </div>
</template>
<script setup>
const modalUserChange = ref(false)
const modalCardCash = ref(false)
const props = defineProps({
  actPage: Number,
  lkUserData: Array,
  cardObj: Object
})
</script>

<style lang="scss" scoped>
  .product-volume{
    display: flex;
    gap: 20px;
  }

  form input{
    background-color: #e5e7eb;
    padding: 6px 12px;
    margin: 10px 0;
    outline: none;
  }

  select{
    width: 150px;
    height: 36px;
    margin: 10px 0;
    background-color: #e5e7eb;
  }

  // .farmerBtn{
  //   margin: 20px 0;
  //   width: 150px;
  //   height: 50px;
  //   padding: 15px;
  //   background-color: #87efac;
  // }
</style>