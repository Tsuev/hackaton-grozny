<template>
   <div class="bg-[#f4f4f4] py-[40px]">
      <div class="container flex gap-[20px]">
         <aside class="max-w-[206px] w-full bg-white p-[25px] pl-[30px] rounded-[16px]">
            <LkMenu @nextActPage="i => actPage = i" :act-page="actPage" :lk-menu-arr="['Кабинет', 'Заказы', 'Карты']" />
         </aside>
         <div class="w-full bg-white p-[25px] pl-[30px] rounded-[16px]">
            <LkUser :actPage="actPage" :cardObj="cardObj" :lkUserData="lkUserData" />
         </div>
      </div>
   </div>
</template>

<script setup>
const actPage = ref(0)
const lkUserData = [
   { title: 'Фамилия и имя', txt: 'Сергей Степанов' },
   { title: 'Контактный телефон', txt: '9298955050' },
   { title: 'Контактный E-mail', txt: 'mtsef@mai.com' },
   { title: 'Адресс', txt: 'Чеченская Респ, Шалинский р-н, г Шали, Набережная ул, 12' },
]
const cardObj = {
   number: '5244 2150 8252 6420',
   name: 'JOE ALISON',
   date: '10 / 25',
   cvc: '824'
}
</script>

<style lang="scss" scoped></style>