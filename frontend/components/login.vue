<template>
  <UiModal @close="$emit('close')">
    <div class="modal-login">
      <h2>Вход</h2>
      <form>
        <input required v-model="email" type="text" name="email" id="" placeholder="Логин" />
        <input required v-model="password" type="password" name="password" id="" placeholder="Пароль" />
        <div class="flex gap-[10px] justify-between ">
               Покупатель
               <div class="flex"><input v-model="isFarmer" type="checkbox" id="switch" /><label for="switch">Toggle</label>
               </div>
               Фермер
            </div>
        <button @click.prevent="Fetchlogin"
            class="py-[10px] px-[20px] mt-[20px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Войти</button>
        <button @click.prevent="$emit('regist'), $emit('close')"
            class="py-[10px] px-[20px] hover:bg-gray-700 transition-all bg-gray-400 text-xl font-semibold text-white rounded-[10px]">Рагистрация</button>
      </form>
    </div>
  </UiModal>
</template>

<script setup>
import { useFetchUserStore } from "@/store/index";

const email = ref("");
const isFarmer = ref(false);
const password = ref("");
const emit = defineEmits(["close"]);

const store = useFetchUserStore();

const Fetchlogin = async () => {
  try {
    const res = await fetch(`http://192.168.88.151:3000/api/${isFarmer.value?'farmer-login':'user/login'}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    const data = await res.json();
    if (data.token) {
         store.dataUser = {...data.user, isFarmer: isFarmer.value};
         sessionStorage.setItem("user", JSON.stringify(store.dataUser));
    }

    emit("close");
  } catch (error) { }
};
</script>

<style lang="scss">
.modal-login h2 {
  width: 300px;
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

input {
   @apply p-[10px] border border-gray-200 rounded-[5px];
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
