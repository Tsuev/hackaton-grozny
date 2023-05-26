<template>
   <div class="bg-[#f4f4f4] py-[40px]">
      <div class="container flex gap-[20px]">
         <aside class="max-w-[206px] w-full bg-white p-[25px] pl-[30px] rounded-[16px]">
            <LkMenu @nextActPage="i => actPage = i" :act-page="actPage" :lk-menu-arr="lkMenu" />
         </aside>
         <div class="w-full bg-white p-[25px] pl-[30px] rounded-[16px]">
            <LkUser v-if="!isFarmer" :actPage="actPage" :cardObj="cardObj" :lkUserData="lkUserData" />
            <LkFarmer v-else :actPage="actPage" :cardObj="cardObj" :lkUserData="lkFarmerData" />
         </div>
      </div>
   </div>
</template>

<script setup>
const actPage = ref(0)
const isFarmer = ref(true)
const lkUserData = [
   { title: 'Фамилия и имя', txt: 'Сергей Степанов' },
   { title: 'Контактный телефон', txt: '9298955050' },
   { title: 'Контактный E-mail', txt: 'mtsef@mai.com' },
   { title: 'Адресс', txt: 'Чеченская Респ, Шалинский р-н, г Шали, Набережная ул, 12' },
]

const lkMenu = isFarmer.value?['Кабинет','Список товаров','Добавить товар']:['Кабинет', 'Заказы', 'Карты']

const cardObj = {
   number: '5244 2150 8252 6420',
   name: 'JOE ALISON',
   date: '10 / 25',
   cvc: '824'
}

const lkFarmerData = [
   { title: 'Фамилия и имя', txt: 'Мансуров Мансур'},
   { title: 'Контактный телефон', txt: '9298955050'},
   { title: 'E-mail', txt: 'mtsef@mai.com'},
   { title: 'Рейтинг', txt: '4.5'},  
   { title: 'Название организации', txt: 'ООО ИП'},   
   { title: 'Номер банковской карты', txt: '5000 ХХХХ ХХХХ ХХХХ'},   
   { title: 'БИК', txt: '645523225'},   
   { title: 'ИНН', txt: '7727563778'},  
   { title: 'Держатель карты', txt: 'MANSUR M'},   
   { title: 'Регион', txt: 'ЧР'},   
   { title: 'Город', txt: 'Грозный'}, 
   { title: 'Тип доставки', txt:['Доставка почтой России', 'Доставка CDEK']},   




]
</script>

<style lang="scss" scoped></style>