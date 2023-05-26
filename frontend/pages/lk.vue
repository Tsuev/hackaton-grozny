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
import { useFetchUserStore } from "@/store/index";

const dataUser = (useFetchUserStore()).dataUser;
const actPage = ref(0)

if(!dataUser) await navigateTo('/')

const lkUserData = computed(()=>[
   { title: 'Фамилия и имя', txt: `${dataUser.surname} ${dataUser.name}` },
   { title: 'Контактный телефон', txt: dataUser.phone },
   { title: 'Контактный E-mail', txt: dataUser.email },
   { title: 'Адресс', txt: dataUser.address },
])

const cardObj = computed(()=>({
   number: dataUser.cardNumber,
   name: dataUser.cardHolder,
   date: dataUser.cardExpiredDate,
   cvc: dataUser.cardCvs
}))
</script>

<style lang="scss" scoped></style>