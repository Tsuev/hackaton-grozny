<template>
  <div class="container">
    <section class="homepage-1">
    <Carousel :wrapAround="true" :items-to-show="6" :autoplay="5000">
    <Slide v-for="slide in 10" :key="slide">
      <bonus-card/>
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
        <img src="@/assets/icons/cow.png" alt="">
        <p>Фермерские хозяйства</p>
      </div>
      <div class="homepage-2__card">
        <img src="@/assets/icons/free-icon-healthy-food-5002583.png" alt="">
        <p>2000 натуральных продуктов</p>
      </div>
      <div class="homepage-2__card">
        <img src="@/assets/icons/quality.png" alt="">
        <p>Контролируем качество от грядки до тарелки</p>
      </div>
      <div class="homepage-2__card">
        <img src="@/assets/icons/taste.png" alt="">
        <p>Природный вкус в каждом продукте</p>
      </div>
    </div>
  </section>

  <section class="homepage-3"> 
    <div class="homepage-3__banner">
       <h2>НОВЫЙ УРОЖАЙ</h2> 
       <button class="banner-btn"> <a href="">собрать грядки</a> </button>
    </div>
  </section>

  <section class="homepage-4">

    <h2 class="homepage-4__title">
      Специальные предложения
    </h2>
    <div class="homepage-4__cards">
      <product-card
      v-for="i in productArr" :key="i.id"
      :obj-prod="i"
      />
    </div>
  </section>
  
  <section class="homepage-5">
    <h2 class="homepage-5__title">Наш ассортимент</h2>
    <div class="homepage-5__cards">
      <category-card
        v-for="i in categoryArr" :key="i.id"
        :obj-category="i"
      />
    </div>
  </section>
  </div>
  
</template>

<script setup lang="ts">
import {
  Carousel,
  Navigation,
  Pagination,
  Slide,
} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { defineComponent } from 'vue'

const categoryArr = [
  {title:'Новый урожай', img: 'http://supersadovnik.net/wp-content/uploads/2013/06/t_5573_0_1337677960_big_rsz1-290x270.jpg', id: 1}, 
  {title:'Фестиваль шашлыка', img: 'https://zone.ucoz.org/_nw/3/26926496.jpg', id: 2},
  {title:'Новинки', img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/880175-272x272.jpg?v=3', id: 3},
  {title:'Хиты', img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/2aec47-272x272.jpg?v=3', id: 4},
  {title:'Еще уникальное', img: 'https://i.pinimg.com/736x/b0/fe/8f/b0fe8fd6c186ba33f0c8fbd720d8df56.jpg', id: 5},
  {title:'Молочная продукция', img: 'https://avatars.mds.yandex.net/i?id=99a7231f92b93a1f2bf987214419c8c1-4324055-images-thumbs&ref=rim&n=33&w=480&h=269', id: 6},
  {title:'Мясо', img: 'https://biftek.uz/wp-content/uploads/2022/04/baner1-1-300x270.jpg', id: 7},
  {title:'Сыры', img: 'https://stolica58.ru/uploads/2022/26.08/thumbnail/hgjk-c300x270.jpg', id: 8},
  {title:'Овощи, фрукты', img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/dc3e4e-272x272.jpg?v=3', id: 9},
  {title:'Рыба', img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/d44cb0-272x272.JPG?v=3', id: 10},
  {title:'Сладости', img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/cfdaff-272x272.jpg?v=3', id: 11},
  {title:'Напитки', img: 'http://hereandnow.review/wp-content/uploads/2017/12/841941726d8bc9ea216fbfe4c8722029-300x270.jpeg', id: 12},
]

const productArr = [
  { id: 1, 
    name: 'Творог', 
    img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4330/4a790d-270x270.JPG?v=3',
    discTo: 'Скидка действует до 1.08.2023', 
    price: 169,
    discPrice: '149', 
    farmer: 'от Дмитрия Воробьева',
  },
  { id: 1, 
    name: 'Творог', 
    img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4341/8e3a74-270x270.JPG?v=3',
    discTo: 'Скидка действует до 1.08.2023', 
    price: 125,
    discPrice: '110', 
    farmer: 'от Дмитрия Воробьева',
  },
  { id: 1, 
    name: 'Творог', 
    img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4334/5b8e76-270x270.JPG?v=3',
    discTo: 'Скидка действует до 1.08.2023', 
    price: 165,
    discPrice: '89', 
    farmer: 'от Дмитрия Воробьева',
  },
  { id: 1, 
    name: 'Творог', 
    img: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4339/f91177-270x270.JPG?v=3',
    discTo: 'Скидка действует до 1.08.2023', 
    price: 169,
    discPrice: '149', 
    farmer: 'от Дмитрия Воробьева',
  }
]

</script>

<style lang="scss">

.carousel__prev, .carousel__next{
  background: white;
  border-radius: 50%;
  -webkit-box-shadow: -15px -3px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -15px -3px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: -7px -3px 8px 0px rgba(34, 60, 80, 0.2); 
  margin: 0px -20px;
}

.carousel__next{
  box-shadow: 7px -3px 8px 0px rgba(34, 60, 80, 0.2);
}

.carousel{
  margin: 50px 0;
}

.homepage-2{
  .homepage-2__title{
  font-size: 24px;
}

.homepage-2__cards{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;

  img{
    width: 44px;
    margin: 0 10px;
  }
  .homepage-2__card{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 12px;
    background-color: #f4f4f4;
    width: 270px;
    height: 70px;
    border-radius: 12px;
    p{
      font-size: 14px;
    }
  }
}
}

.homepage-3{
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px 0;
  border-radius:12px ;
  background-image: url("https://skinali.photo-clip.ru/images/phocagallery/kategor-skinali/Led-fruk/66/thumbs/phoca_thumb_l_skinali-12257.jpg");
  .homepage-3__banner h2{
    font-size: 60px;
    font-weight: 600;
    background-color: orange;
    padding: 0px 20px;
    color: white;
    border-radius: 12px; 
  }
  .banner-btn{
      margin: 15px 0;
      width: 200px;
      height: 50px;
      background: #000000;
      color: white;
      border-radius: 12px;
    }
}

.homepage-4{
  .homepage-4__title{
    font-size: 36px;
    font-weight: 600;
    margin: 40px 0;
  }

  .homepage-4__cards{
    display: flex;
    justify-content: space-between;  
    align-items: center;
  }
}

.homepage-5{
  .homepage-5__cards{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px;
  }
  .homepage-5__title{
    font-size: 36px;
    font-weight: 600;
    margin: 40px 0;
  }
}

</style>
