<template>
  <div class="container">
    <div class="farmers">
      <div class="farmers-title">
        <h2>Наши поставщики — ответственные трудолюбивые фермеры</h2>
        <p>
          Среди них основатели небольших артелей, производств и сельских
          хозяйств. В наш ассортимент попадают только самые лучшие продукты от
          239 производителей прошедших отбор.
        </p>
      </div>
    </div>
    <!-- <div class="farmers-input">
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
    </div> -->

    <div class="farmers-cards">
      <farmer-card v-for="i in farmersData" :key="i.id" :obj-farmer="i" />
    </div>
  </div>
</template>

<script setup>
const farmersData = [
  {
    id: "1",
    title: "Boris",
    img: "https://www.examen.ru/assets/images/2018/20181005-fermer.jpg",
    subtitle: "Поставщик",
    farmType: "Помидоры",
  },
];

fetch("http://192.168.88.151:3000/")
  .then((res) => res.json())
  .then((res) => res);
</script>

<style lang="scss" scoped>
.farmers {
  margin: 50px 0;
  .farmers-title {
    text-align: center;
  }
  .farmers-title h2 {
    font-size: 52px;
    font-weight: 600;
    margin: 30px 0;
  }
}
.farmers-input {
  display: flex;

  .nav__categories {
    margin-right: 20px;
  }
}

.farmers-cards {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 20px;
}
</style>
