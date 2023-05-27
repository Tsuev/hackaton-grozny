<template>
   <div class="bg-[#f4f4f4] py-[40px]" :class="dataUser.isFarmer?'min-h-[100vh]':'min-h-[calc(100vh-136px)]'">
      <div class="container flex gap-[20px]">
         <aside class="max-w-[206px] w-full bg-white p-[25px] pl-[30px] rounded-[16px]">
            <LkMenu @nextActPage="i => actPage = i" :act-page="actPage" :lk-menu-arr="lkMenu" />
         </aside>
         <div class="w-full bg-white p-[25px] pl-[30px] rounded-[16px]">
            <LkFarmer v-if="dataUser.isFarmer" :farmerId="dataUser._id" :actPage="actPage" :cardObj="cardObj" :lkUserData="lkFarmerData" />
            <LkAdmin v-else-if="dataUser.admin" :actPage="actPage" :cardObj="cardObj" :lkUserData="lkUserData" />
            <LkUser v-else :actPage="actPage" :cardObj="cardObj" :lkUserData="lkUserData" />
         </div>
      </div>
   </div>
</template>

<script setup>
import { useFetchUserStore } from "@/store/index";
const dataUser = (useFetchUserStore()).dataUser;

if(!dataUser) navigateTo('/')

const deliveryTypes = ref([])
const actPage = ref(0)
const lkMenu = dataUser.isFarmer?['Кабинет','Список товаров','Добавить товар', 'Заказы']:dataUser.admin?['Поставщики', 'Статистика']:['Кабинет', 'Заказы', 'Карты']

const getDeliveryTypes = async () => {
   try {
      const res = await fetch("http://192.168.88.151:3000/api/get-types");
      deliveryTypes.value = await res.json()
   } catch (error) { }
};

getDeliveryTypes()

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

const lkFarmerData = computed(()=>[
   { title: 'Фамилия и имя', txt: `${dataUser.surname} ${dataUser.name}`},
   { title: 'Контактный телефон', txt: dataUser.phone},
   { title: 'E-mail', txt: dataUser.email},
   { title: 'Адресс', txt: dataUser.address},
   { title: 'Рейтинг', txt: '4.5'},  
   { title: 'Название организации', txt: dataUser.organizationName},   
   { title: 'Номер банковской карты', txt: dataUser.bankCardNumber},   
   { title: 'БИК', txt: dataUser.bik},   
   { title: 'ИНН', txt: dataUser.inn},  
   { title: 'КПП', txt: dataUser.kpp},  
   { title: 'Держатель карты', txt: dataUser.bankCardHolder},   
   { title: 'Регион', txt: dataUser.region},   
   { title: 'Город', txt: dataUser.city}, 
   { title: 'Тип доставки', txt: deliveryTypes.value.filter(el=>dataUser.deliveryTypes.includes(el._id)).map(el=>el.title)},   
])
</script>

<style lang="scss" scoped></style>