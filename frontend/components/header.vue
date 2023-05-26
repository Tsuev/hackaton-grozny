<template>
  <header class="shadow-md">
    <div class="header container">
      <div class="main__nav">
        <div class="nav__logo mr-10">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <nav class="navigation">
          <ul>
            <li>
              <NuxtLink to="/"> Главная </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/fermers"> Поставщики </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/fermers"> Фермерам </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"> О нас </NuxtLink>
            </li>
          </ul>
        </nav>

        <div ref="city" class="nav__city">Москва ▼</div>

        <div class="nav__profile">
          <NuxtLink to="/profile">
            <div class="profile">
              <img width="20" src="@/assets/images/user-logo.png" alt="" />
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="second__nav">
        <div
          class="nav__categories flex items-center p-3 bg-green-300 rounded-md"
        >
          <div class="logo__img mr-2">
            <img width="20" src="@/assets/images/categories.png" alt="" />
          </div>
          <span class="font-bold">Категории</span>
        </div>
        <div class="nav__search">
          <div class="zoom__icon"></div>
          <input type="text" />
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
    <div> Грозный </div>
    <div> Санкт-Петербург </div>
    <div> Волгоград </div>
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
.header {
  padding: 10px 0px;
  .main__nav {
    @apply flex items-center justify-between;

    .nav__logo {
      width: 200px;
    }

    .navigation ul {
      @apply flex;

      li {
        @apply py-1 px-3 rounded-sm;
        @apply mx-5 font-bold hover:bg-green-400 hover:text-white transition-all;
      }
    }

    .nav__profile {
      @apply p-3 rounded-lg bg-slate-200 cursor-pointer;
    }
  }
}
</style>
