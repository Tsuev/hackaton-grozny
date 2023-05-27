<template>
  <header class="shadow-md">
    <div class="header container py-3">
      <div class="main__nav mb-5">
        <div @click="$router.push('/')" class="nav__logo mr-10 cursor-pointer">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <nav class="navigation">
          <ul>
            <li>
              <NuxtLink to="/"> Главная </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/catalog"> Каталог </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/farmers"> Фермеры </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"> О нас </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/info"> FAQ </NuxtLink>
            </li>
          </ul>
        </nav>

        <div ref="city" class="nav__city">Москва ▼</div>
        <!--  -->
        <div
          @click="store.dataUser ? $router.push('/lk') : (modalLogin = true)"
          class="nav__profile block__icons"
          :class="{ 'opacity-50': !store.dataUser }"
        >
          <div class="profile">
            <img width="20" src="@/assets/images/user-logo.png" alt="" />
          </div>
        </div>
      </div>
      <div class="second__nav flex items-stretch gap-3">
        <div
          class="nav__categories flex items-center p-3 bg-green-300 rounded-md cursor-pointer"
        >
          <div class="logo__img mr-2">
            <img width="20" src="@/assets/images/categories.png" alt="" />
          </div>
          <span class="font-bold">Каталог</span>
        </div>
        <div
          class="nav__search flex flex-1 items-center rounded-md bg-gray-200"
        >
          <div class="zoom__icon mx-2">
            <img width="25" src="@/assets/images/zoom.png" alt="" />
          </div>
          <input
            placeholder="Поиск"
            class="search__input focus-within:outline-none bg-transparent h-full"
            type="text"
          />
        </div>
        <div
          class="nav__categories flex items-center p-3 bg-green-300 rounded-md cursor-pointer"
        >
          <div class="logo__img mr-2">
            <img width="20" src="@/assets/images/calendar.png" alt="" />
          </div>
          <span class="font-bold">Доставка еды: все дни</span>
        </div>
        <div class="nav__profile block__icons">
          <div class="profile">
            <img width="20" src="@/assets/images/heart.png" alt="" />
          </div>
        </div>
        <div class="nav__profile block__icons" @click="modalCart = true">
          <div class="profile">
            <img width="20" src="@/assets/images/basket.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <cart
      v-if="modalCart"
      @close="modalCart = false"
      @close-modal="startOrder"
    />
    <Login
      v-if="modalLogin"
      @regist="modalRegist = true"
      @close="modalLogin = false"
    />
    <Regist v-if="modalRegist" @close="modalRegist = false" />
  </header>
  <UiModal v-if="modalStore.orderModal" @close="modalStore.orderModal = false">
    <div class="orderForm flex flex-col p-5">
      <h2 class="text-2xl mb-5">Оформление заказа</h2>
      <input
        v-model="orderAddress"
        class="mb-5"
        type="text"
        placeholder="Введите адрес"
      />

      <select v-model="orderDeliveryType" сlass="mb-5">
        <option value="" selected>Выбрать способ доставки</option>
        <option v-for="item in deliveryData" :value="item._id">
          {{ item.title }}
        </option>
      </select>

      <!-- <input class="my-5" type="text" placeholder="ПРОМОКОД" /> -->

      <button
        @click="sendOrder"
        class="py-[10px] px-[20px] mt-[20px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]"
      >
        Оформить
      </button>
    </div>
  </UiModal>
</template>

<script setup>
import { useTippy } from "vue-tippy/composition";
import { useFetchUserStore } from "@/store/index";
import { useModalStore } from "@/store/modals";

const store = useFetchUserStore();
const modalStore = useModalStore();
const city = ref(null);
const modalRegist = ref(false);
const modalCart = ref(false);
const modalLogin = ref(false);
const deliveryData = ref([]);

const orderAddress = ref("");
const orderDeliveryType = ref("");

function startOrder() {
  modalStore.mutationOrderModal(true);
  modalCart.value = false;

  fetch("http://192.168.88.151:3000/api/get-types")
    .then((res) => res.json())
    .then((res) => (deliveryData.value = res));
}

async function sendOrder() {
  try {
    await fetch("http://192.168.88.151:3000/api/order/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        deliveryTypeId: orderDeliveryType.value,
        address: orderAddress.value,
        basketId: localStorage.getItem("cartId"),
      }),
    });
    modalStore.mutationOrderModal(false);
  } catch (error) {
    alert("Произошла ошибка: " + error);
  }
}

onMounted(() => {
  store.dataUser = JSON.parse(sessionStorage.getItem("user"));
});

useTippy(city, {
  content: `
  <div>
    <div> Грозный </div>
    <div> Санкт-Петербург </div>
    <div> Волгоград </div>
  <div>
  `,
  interactive: true,
  trigger: "click",
  placement: "bottom",
});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply bg-green-500 py-1 px-3 rounded-sm text-white;
}
header {
  @apply sticky top-0 z-50 bg-white;
}
.header {
  .main__nav {
    @apply flex items-center justify-between;

    .nav__logo {
      width: 200px;
    }

    .navigation ul {
      @apply flex;

      li a {
        @apply py-1 px-3 rounded-sm;
        @apply mx-5 font-bold hover:bg-green-500 hover:text-white transition-all;
      }
    }
  }
  .second__nav {
  }

  .block__icons {
    @apply p-3 rounded-lg bg-slate-200 cursor-pointer hover:bg-slate-400 transition-all;
  }
}
</style>
