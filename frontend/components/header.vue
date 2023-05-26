<template>
  <header class="header">
    <div class="main__nav">
      <div class="nav__logo">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
      <nav class="navigation">
        <ul>
          <li>Главная</li>
          <li>Поставщики</li>
          <li>Фермерам</li>
          <li>О нас</li>
        </ul>
      </nav>
      <div class="nav__city"></div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  padding: 10px 0px;
  .main__nav {
    @apply flex items-center;

    .nav__logo {
      width: 200px;
    }

    .navigation ul {
      @apply flex;
    }
  }
}
</style>
