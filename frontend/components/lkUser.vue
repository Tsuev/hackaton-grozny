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
         <div v-if="cart.length">
         <div
            v-for="item in cart"
            :key="item._id"
            class="products__item p-2 flex justify-between items-center border-grey border-b"
          >
            <div class="products__img overflow-hidden rounded">
              <img width="50" :src="'http://192.168.88.151:3000/'+item.product.image.replace('src/', '')" alt="" />
            </div>
            <div class="products__title">{{ item?.product.title }}</div>
            <div class="products__quantity">{{ item?.quantity }} шт.</div>
            <div class="products__volume">{{ item?.product.volume }}</div>
            <div class="product__price">{{ item?.product.price }} руб.</div>
            <div
              @click="deleteProductOfCart(item?._id)"
              class="product__delete"
            >
              <img
                width="20"
                class="cursor-pointer"
                src="@/assets/images/delete-icon.png"
                alt=""
              />
            </div>
          </div></div>
      </div>
      <div v-if="actPage == 2">,
         <h1 class="text-[30px] font-bold mb-[40px]">Карта клиента</h1>
         <CreditCard :card-obj="cardObj" />
            <button @click="modalCardCash = true"
               class="py-[10px] px-[20px] mt-[40px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Добавить
               карту</button>
            <AddCardCash v-if="modalCardCash" @close="modalCardCash = false" />
      </div>
   </div>
</template>
<script setup>
const modalUserChange = ref(false)
const cart = ref([])
const modalCardCash = ref(false)
const props = defineProps({
   actPage: Number,
   lkUserData: Array,
   cardObj: Object
})

const getProductByFarmer = async () => {
   try {
      const res = await fetch(`http://192.168.88.151:3000/api/orders`);
      cart.value = (await res.json()).data[0].orderProducts
   } catch (error) { }
};

getProductByFarmer()
</script>