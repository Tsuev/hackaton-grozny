<template>
   <UiModal @close="$emit('close')">
      <div class="">
         <h2 class="text-[30px] font-bold mb-[40px]">Изменение данных клиента</h2>
         <div class="flex items-center p-[10px] border border-gray-400 rounded-[10px]">
            <div class="w-full flex flex-col gap-[15px]">
               <div class=" font-semibold text-lg">
                  Номер карты
                  <div class="text-black"><input v-model="number" type="text"></div>
               </div>
               <div class="font-semibold text-lg">
                  Срок действия
                  <div class="text-black"><input v-model="date" type="text"></div>
               </div>
               <div class="font-semibold text-lg">
                  Имя и фамилию
                  <div class="text-black"><input v-model="name" type="text"></div>
               </div>
            </div>
            <div class="p-[30px] w-1/2 h-full border flex">
               <div class="font-semibold w-[100px] text-lg">
                  CVC/CVV
                  <div class="text-black"><input v-model="cvc" class="w-full" type="text"></div>
               </div>
            </div>
         </div>
         <button @click="modalCardCash = true"
            class="py-[10px] px-[20px] mt-[40px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Добавить
            карту</button>
      </div>
   </UiModal>
</template>

<script setup>
const emit = defineEmits(["close"]);
const number = ref('')
const name = ref('')
const date = ref('')
const cvc = ref('')
</script>

<style lang="scss" scoped>
input {
   @apply p-[10px] border border-gray-200 rounded-[5px];
}
</style>