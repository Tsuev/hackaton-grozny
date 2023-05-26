<template>
   <UiModal @close="$emit('close')">
      <div class="modal-login">
         <h2>Регистрация</h2>
         <form class="w-[500px]">
            <div class="flex gap-[10px]">
               <input v-model="name" type="text" name="name" id="" placeholder="Имя" />
               <input v-model="surname" type="text" name="surname" id="" placeholder="Фамилия" />
            </div>
            <div class="flex gap-[10px]">
               <input v-model="phone" type="text" name="phone" id="" placeholder="Телефон" />
               <input v-model="email" type="text" name="email" id="" placeholder="Почта" />
            </div>
            <div class="flex gap-[10px]">
               <input v-model="address" type="text" name="address" id="" placeholder="Адрес" />
               <input v-model="password" type="password" name="password" id="" placeholder="Пароль" />
            </div>
            <form v-if="isFarmer">
               <div class="flex gap-[10px]">
                  <input v-model="organizationName" type="text" name="organizationName" id="" placeholder="Имя организации" />
                  <input v-model="bankCardNumber" type="text" name="bankCardNumber" id="" placeholder="Номер карта" />
               </div>
               <div class="flex gap-[10px]">
                  <input v-model="bik" type="text" name="bik" id="" placeholder="БИК" />
                  <input v-model="kpp" type="text" name="password" id="" placeholder="КПП" />
               </div>
               <div class="flex gap-[10px]">
                  <input v-model="inn" type="text" name="inn" id="" placeholder="ИНН" />
                  <input v-model="bankCardHolder" type="text" name="bankCardHolder" id="" placeholder="Имя держателя" />
               </div>
               <div class="flex gap-[10px]">
                  <input v-model="region" type="text" name="region" id="" placeholder="Регион" />
                  <input v-model="city" type="text" name="city" id="" placeholder="Город" />
               </div>
               <h4>Тип доставок</h4>
               <div class=" grid grid-cols-2 gap-[10px]">
                  <div v-for="i in deliveryTypes" :key="i._id" class="flex justify-between items-center">
                     <label :for="i._id" class="text-[12px]">{{ i.title }}</label>
                     <input type="checkbox" ref="checkDeliveryTypes" class="w-auto" :name="i.title" :id="i._id" />
                  </div>
               </div>
            </form>
            <div class="flex gap-[10px] justify-between ">
               Покупатель
               <div class="flex"><input v-model="isFarmer" type="checkbox" id="switch" /><label for="switch">Toggle</label>
               </div>
               Фермер
            </div>
            <button @click.prevent="FetchReg"
               class="py-[10px] px-[20px] mt-[20px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Зарегистрироваться</button>
         </form>
      </div>
   </UiModal>
</template>
 
<script setup>
import { useFetchUserStore } from "@/store/index";

const email = ref("");
const password = ref("");
const phone = ref('')
const name = ref('')
const surname = ref('')
const address = ref('')
const bik = ref("");
const kpp = ref("");
const bankCardNumber = ref("");
const organizationName = ref("");
const inn = ref('')
const bankCardHolder = ref('')
const region = ref('')
const city = ref('')
const isFarmer = ref(false);
const dataUser = ref({});
const emit = defineEmits(["close"]);
const deliveryTypes = ref([])
const store = useFetchUserStore();


const FetchReg = async () => {
   try {
      let objRes = { email: email.value, password: password.value,
         phone: phone.value, name: name.value,
         surname: surname.value, address: address.value }
      if(isFarmer.value) objRes = {...objRes, bankCardNumber: bankCardNumber.value, organizationName: organizationName.value,
         inn: inn.value, bankCardHolder: bankCardHolder.value,
         region: region.value, city: city.value, bik: bik.value, kpp: kpp.value}
         
      const res = await fetch(`http://192.168.88.151:3000/api/${isFarmer.value?'farmer-register':'user/register'}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json;charset=utf-8",
         },
         body: JSON.stringify(objRes),
      });

      dataUser.value = (await res.json()).data;
      if (dataUser.value._id) {
         store.dataUser = {...dataUser.value, isFarmer: isFarmer.value};
         sessionStorage.setItem("user", JSON.stringify(store.dataUser));
      }

      emit("close");
   } catch (error) { }
};

const getDeliveryTypes = async () => {
   try {
      const res = await fetch("http://192.168.88.151:3000/api/get-types");
      deliveryTypes.value = await res.json()
      console.log(deliveryTypes.value);
   } catch (error) { }
};

getDeliveryTypes()
</script>
 
<style lang="scss" scoped>
.modal-login h2 {
   width: 100%;
   font-size: 24px;
   text-align: center;
   padding: 10px 0;
   font-weight: 600;
   margin-bottom: 20px;
}

.modal-login form {
   display: flex;
   @apply gap-[20px];
   flex-direction: column;
}

input:not(.w-auto) {
   @apply p-[10px] border border-gray-200 rounded-[5px] w-full;
}

input#switch[type=checkbox] {
   height: 0;
   width: 0;
   visibility: hidden;
}

label[for=switch] {
   cursor: pointer;
   text-indent: -9999px;
   width: 50px;
   height: 25px;
   background: grey;
   display: block;
   border-radius: 100px;
   position: relative;
}

label[for=switch]:after {
   content: '';
   position: absolute;
   top: 2px;
   left: 3px;
   width: 21px;
   height: 21px;
   background: #fff;
   border-radius: 90px;
   transition: 0.3s;
}

input#switch:checked+label {
   background: #bada55;
}

input#switch:checked+label:after {
   left: calc(100% - 5px);
   transform: translateX(-100%);
}

label[for=switch]:active:after {
   width: 130px;
}
</style>
 