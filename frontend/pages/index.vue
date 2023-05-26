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
    <h2 class="homepage-4__title">Специальные предложения</h2>
    <div class="homepage-4__cards">
      <category-card
        v-for="i in categoryArr" :key="i.title"
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
{title:'Новый урожай', img: 'http://supersadovnik.net/wp-content/uploads/2013/06/t_5573_0_1337677960_big_rsz1-290x270.jpg'},
{title:'Фестиваль шашлыка', img: 'https://zone.ucoz.org/_nw/3/26926496.jpg'},
{title:'Новинки', img: 'https://lifestylemedia.biz/wp-content/uploads/2021/01/kvashenaya-fioletovaya-kapusta-recept-300x270.jpg'},
{title:'Хиты', img: 'http://hereandnow.review/wp-content/uploads/2017/12/841941726d8bc9ea216fbfe4c8722029-300x270.jpeg'},
]

</script>

<style lang="scss">

.carousel__prev, .carousel__next{
  background: white;
  border: 1px solid #000000;
  border-radius: 50%;
  margin: 0px -20px;
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
  .homepage-4__cards{
    display: flex;
    justify-content: space-between;
  }
  .homepage-4__title{
    font-size: 36px;
    font-weight: 600;
    margin: 40px 0;
  }
}

</style>
