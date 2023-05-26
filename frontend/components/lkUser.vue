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
         <h1 class="text-[30px] font-bold mb-[40px]">История заказов</h1>

      </div>
      <div v-if="actPage == 2">,
         <h1 class="text-[30px] font-bold mb-[40px]">Карта клиента</h1>
         <CreditCard :card-obj="cardObj" v-if="cardObj" />
         <div v-else>
            <button @click="modalCardCash = true"
               class="py-[10px] px-[20px] mt-[40px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Добавить
               карту</button>
            <AddCardCash v-if="modalCardCash" @close="modalCardCash = false" />
         </div>
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