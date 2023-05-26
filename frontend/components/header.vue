<template>
  <header class="shadow-md">
    <div class="header container py-3">
      <div class="main__nav mb-5">
        <div class="nav__logo mr-10">
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
              <NuxtLink to="/farmers"> Поставщики </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/info"> Фермерам </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"> О нас </NuxtLink>
            </li>
          </ul>
        </nav>

        <div ref="city" class="nav__city">Москва ▼</div>

        <div class="nav__profile block__icons">
          <NuxtLink to="/profile">
            <div class="profile">
              <img width="20" src="@/assets/images/user-logo.png" alt="" />
            </div>
          </NuxtLink>
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
        <div class="nav__profile block__icons">
          <div class="profile">
            <img width="20" src="@/assets/images/basket.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTippy } from "vue-tippy/composition";
const city = ref(null);

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

const handler = () => console.log("true");
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
