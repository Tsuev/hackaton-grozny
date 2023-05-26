<template>
   <div class="bg-[#f4f4f4] py-[40px]">
      <div class="container flex gap-[20px]">
         <aside class="max-w-[206px] w-full bg-white p-[25px] pl-[30px] rounded-[16px]">
            <LkMenu @nextActPage="i => actPage = i" :act-page="actPage" :lk-menu-arr="['Кабинет', 'Заказы', 'Карты']" />
         </aside>
         <div class="w-full bg-white p-[25px] pl-[30px] rounded-[16px]">
            <div v-if="actPage == 0">
               <h1 class="text-[30px] font-bold mb-[40px]">Личный Кабинет</h1>
               <ul class="text-gray-800 max-w-[500px] font-semibold space-y-[20px]">
                  <li class="flex" v-for="i in lkUserData" :key="i.title">
                     <span class="min-w-[200px] mr-[20px] text-gray-400">{{ i.title }}</span> {{ i.txt }}
                  </li>
               </ul>
               <div class="flex justify-center mt-[40px]">
                  <button @click="modalUserChange = true"
                     class="py-[10px] px-[20px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Изменить</button>
               </div>
               <ChangeUserInf v-if="modalUserChange" @close="modalUserChange = false" />
            </div>
            <div v-if="actPage == 1">
               <h1 class="text-[30px] font-bold mb-[40px]">История заказов</h1>

            </div>
            <div v-if="actPage == 2">,
               <h1 class="text-[30px] font-bold mb-[40px]">Карта клиента</h1>

               <button @click="modalUserChange = true"
                  class="py-[10px] px-[20px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Добавить
                  карту</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
const modalUserChange = ref(false)
const actPage = ref(0)
const lkUserData = [
   { title: 'Фамилия и имя', txt: 'Сергей Степанов' },
   { title: 'Контактный телефон', txt: '9298955050' },
   { title: 'Контактный E-mail', txt: 'mtsef@mai.com' },
   { title: 'Адресс', txt: 'Чеченская Респ, Шалинский р-н, г Шали, Набережная ул, 12' },
]
</script>

<style lang="scss" scoped></style>