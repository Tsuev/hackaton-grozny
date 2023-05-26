<template>
   <UiModal @close="$emit('close')">
      <div class="">
         <h2 class="text-[30px] font-bold mb-[40px]">Изменение данных клиента</h2>
         <form class="flex flex-col space-y-[20px]">
            <input v-model="name" type="text" name="name" id="" placeholder="Имя" />
            <input v-model="surname" type="text" name="surname" id="" placeholder="Фамилия" />
            <input v-model="phone" type="text" name="phone" id="" placeholder="Телефон" />
            <input v-model="email" type="text" name="email" id="" placeholder="Почта" />
            <input v-model="address" type="text" name="address" id="" placeholder="Адрес" />
            <button
               class="py-[10px] px-[20px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Добавить
               изменения</button>
         </form>
      </div>
   </UiModal>
</template>

<script setup>
const emit = defineEmits(["close"]);
const phone = ref('')
const name = ref('')
const surname = ref('')
const email = ref('')
const address = ref('')
</script>

<style lang="scss" scoped>
input {
   @apply p-[10px] border border-gray-200 rounded-[5px];
}
</style>