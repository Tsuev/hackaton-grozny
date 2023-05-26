<template>
  <div class="container">
    <section class="homepage-1">
      <Carousel :wrapAround="true" :items-to-show="1" :autoplay="5000">
        <Slide v-for="slide in 10" :key="slide">
          <bonus-card v-for="i in bonusArr" :key="i.id" :obj-bonus="i" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>

    <section class="homepage-2">
      <h2 class="homepage-2__title">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </h2>

      <div class="homepage-2__cards">
        <div class="homepage-2__card">
          <img src="@/assets/icons/cow.png" alt="" />
          <p>Фермерские хозяйства</p>
        </div>
        <div class="homepage-2__card">
          <img src="@/assets/icons/free-icon-healthy-food-5002583.png" alt="" />
          <p>2000 натуральных продуктов</p>
        </div>
        <div class="homepage-2__card">
          <img src="@/assets/icons/quality.png" alt="" />
          <p>Контролируем качество от грядки до тарелки</p>
        </div>
        <div class="homepage-2__card">
          <img src="@/assets/icons/taste.png" alt="" />
          <p>Природный вкус в каждом продукте</p>
        </div>
      </div>
    </section>

    <section class="homepage-3">
      <div class="homepage-3__banner">
        <h2>НОВЫЙ УРОЖАЙ</h2>
        <button class="banner-btn"><a href="">собрать грядки</a></button>
      </div>
    </section>

    <section v-if="productArr.length" class="homepage-4">
      <h2 class="homepage-4__title">Специальные предложения</h2>
      <div class="homepage-4__cards">
        <product-card
          v-for="item in productArr"
          :key="item._id"
          :obj-prod="item"
        />
      </div>
    </section>

    <section class="homepage-5">
      <h2 class="homepage-5__title">Наш ассортимент</h2>
      <div class="homepage-5__cards">
        <category-card v-for="i in categoryArr" :key="i.id" :obj-category="i" />
      </div>
    </section>

    <section class="homepage-6">
      <div class="homepage-6__mailing">
        <h2>
          Подпишитесь <br />
          на рассылку
        </h2>
        <p>скидки и акции только для подписчиков</p>
        <div class="mailing-input">
          <input type="mail" placeholder="E-mail" />
          <button class="mailing-btn">Подписаться</button>
        </div>
      </div>
    </section>
  </div>
  <footer>
    <div class="container footer">
      <div class="footer-list__one">
        <img src="@/assets/images/logo2.png" alt="" />
      </div>
      <div class="footer-list__two">
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
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const categoryArr = [
  {
    title: "Новый урожай",
    img: "http://supersadovnik.net/wp-content/uploads/2013/06/t_5573_0_1337677960_big_rsz1-290x270.jpg",
    id: 1,
  },
  {
    title: "Фестиваль шашлыка",
    img: "https://zone.ucoz.org/_nw/3/26926496.jpg",
    id: 2,
  },
  {
    title: "Новинки",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/880175-272x272.jpg?v=3",
    id: 3,
  },
  {
    title: "Хиты",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/2aec47-272x272.jpg?v=3",
    id: 4,
  },
  {
    title: "Еще уникальное",
    img: "https://i.pinimg.com/736x/b0/fe/8f/b0fe8fd6c186ba33f0c8fbd720d8df56.jpg",
    id: 5,
  },
  {
    title: "Молочная продукция",
    img: "https://avatars.mds.yandex.net/i?id=99a7231f92b93a1f2bf987214419c8c1-4324055-images-thumbs&ref=rim&n=33&w=480&h=269",
    id: 6,
  },
  {
    title: "Мясо",
    img: "https://biftek.uz/wp-content/uploads/2022/04/baner1-1-300x270.jpg",
    id: 7,
  },
  {
    title: "Сыры",
    img: "https://stolica58.ru/uploads/2022/26.08/thumbnail/hgjk-c300x270.jpg",
    id: 8,
  },
  {
    title: "Овощи, фрукты",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/dc3e4e-272x272.jpg?v=3",
    id: 9,
  },
  {
    title: "Рыба",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/d44cb0-272x272.JPG?v=3",
    id: 10,
  },
  {
    title: "Сладости",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/cfdaff-272x272.jpg?v=3",
    id: 11,
  },
  {
    title: "Напитки",
    img: "http://hereandnow.review/wp-content/uploads/2017/12/841941726d8bc9ea216fbfe4c8722029-300x270.jpeg",
    id: 12,
  },
];

let productArr = ref([]);

const bonusArr = [
  {
    id: 1,
    title: "",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/5bb1e4-200x200.jpg?v=3",
  },
  {
    id: 2,
    title: "",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/ca3536-200x200.jpg?v=3",
  },
  {
    id: 3,
    title: "",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/1c2c41-200x200.jpg?v=3",
  },
  {
    id: 4,
    title: "",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/eee36c-200x200.jpg?v=3",
  },
  {
    id: 5,
    title: "",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/f24a3d-200x200.jpg?v=3",
  },
  {
    id: 6,
    title: "",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/aec48c-200x200.jpg?v=3",
  },
  {
    id: 7,
    title: "",
    img: "https://cdn.esh-derevenskoe.ru/image/cache/catalog/f51d6f-200x200.jpg?v=3",
  },
];

fetch("http://192.168.88.151:3000/api/get-product")
  .then((res) => res.json())
  .then((res) => {
    productArr.value = res;
    console.log(res);
  });
</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  background: white;
  border-radius: 50%;
  -webkit-box-shadow: -15px -3px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -15px -3px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: -7px -3px 8px 0px rgba(34, 60, 80, 0.2);
  margin: 0px -20px;
}

.carousel__next {
  box-shadow: 7px -3px 8px 0px rgba(34, 60, 80, 0.2);
}

.carousel {
  margin: 50px 0;
}

.homepage-2 {
  .homepage-2__title {
    font-size: 24px;
  }

  .homepage-2__cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0;

    img {
      width: 44px;
      margin: 0 10px;
    }
    .homepage-2__card {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 12px;
      background-color: #f4f4f4;
      width: 270px;
      height: 70px;
      border-radius: 12px;
      p {
        font-size: 14px;
      }
    }
  }
}

.homepage-3 {
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px 0;
  border-radius: 12px;
  background-image: url("https://skinali.photo-clip.ru/images/phocagallery/kategor-skinali/Led-fruk/66/thumbs/phoca_thumb_l_skinali-12257.jpg");
  .homepage-3__banner h2 {
    font-size: 60px;
    font-weight: 600;
    background-color: orange;
    padding: 0px 20px;
    color: white;
    border-radius: 12px;
  }
  .banner-btn {
    margin: 15px 0;
    width: 200px;
    height: 50px;
    background: #000000;
    color: white;
    border-radius: 12px;
  }
}

.homepage-4 {
  .homepage-4__title {
    font-size: 36px;
    font-weight: 600;
    margin: 40px 0;
  }

  .homepage-4__cards {
    display: flex;
    gap: 20px;
    // justify-content: space-between;
    align-items: center;
  }
}

.homepage-5 {
  .homepage-5__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px;
  }
  .homepage-5__title {
    font-size: 36px;
    font-weight: 600;
    margin: 40px 0;
  }
}

.homepage-6 {
  text-align: center;
  width: 100%;
  height: 415px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  background-image: url("https://i.ytimg.com/vi/FnLoFO9YMQ0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCUgWyhyMA8=&amp;rs=AOn4CLAL01O-7X7Cf5mvn5eFIaTRu29BpQ");
  .homepage-6__mailing h2 {
    font-size: 52px;
    line-height: 1.3;
    font-weight: 600;
  }
  .homepage-6__mailing p {
    margin: 20px 0;
  }

  .mailing-input input {
    padding: 15px 20px;
    width: 380px;
    height: 50px;
    border-radius: 10px;
    background-color: #f4f4f4;
    margin: 0 10px;
    outline-color: #86efac;
  }

  .mailing-input button {
    width: 145px;
    height: 50px;
    background-color: #000000;
    color: white;
    padding: 14px 20px;
    border-radius: 10px;
  }
}

footer {
  width: 100%;
  height: 120px;
  background-color: #078335;
  display: flex;
  align-items: center;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  ul li {
    padding: 8px;
  }

  .footer-list__one img {
    width: 300px;
  }

  .footer-list__two ul {
    display: flex;
    color: white;
  }
}
</style>
