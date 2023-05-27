<template>
  <div>
     <div v-if="actPage == 0">
        <h1 class="text-[30px] font-bold mb-[40px]">Личный Кабинет</h1>
        <ul class="text-gray-800 max-w-[500px] font-semibold space-y-[20px]">
           <li class="flex" v-for="i in lkUserData" :key="i.title">
              <span class="min-w-[200px] mr-[20px] text-gray-400">{{ i.title }}</span> {{ Array.isArray(i.txt) ? i.txt.join(', '):i.txt}}
           </li>
        </ul>
        <button @click="modalUserChange = true"
           class="py-[10px] px-[20px] mt-[40px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]">Изменить</button>
        <ChangeUserInf v-if="modalUserChange" @close="modalUserChange = false" />
     </div>
     <div v-if="actPage == 1">
        <h1 class="text-[30px] font-bold mb-[40px]">Список товаров</h1>
        <div class="flex gap-[20px] flex-wrap">
        <product-card
          v-for="item in productsByFarmer"
          :key="item._id"
          :obj-prod="item"
        /></div>
     </div>
     <div v-if="actPage == 2">
        <h1 class="text-[30px] font-bold mb-[40px]">Добавить товар</h1>
        <form class="grid grid-cols-2" action="">
          <div>
            <p>Название продукта</p>
            <input required v-model="title" class = "product-title" type="text">
          </div>

          <div>
            <p>Описание</p>
            <input required v-model="description" class = "product-descrition" type="text">
          </div>
          <div>
            <p>Количество</p>
            <input required v-model="quantity" type="number">
          </div><div>
            <p>Единицы измерения</p>
            <select v-model="volume" name="" id="">
              <option value="Кг" selected>Кг</option>
              <option value="Гр">Гр</option>
              <option value="Л">Л</option>
            </select>
          </div>

          <div>
            <p>Цена</p>
            <input required v-model="price" type="number">
          </div>
          
          <div>
            <p>Оптовая цена</p>
            <input required v-model="optPrice" type="number" name="" id="">
          </div>
          
          <div>
            <p>Скидочная цена</p>
            <input required v-model="discountPrice" type="number" name="" id="">
          </div>
          <div>
            <p>Категория товара</p>
            <select v-model="categoryId" name="" id="">
              <option v-for="i in categories" :key="i._id" :value="i._id" selected>{{ i.title }}</option>
            </select>
          </div>
          <div>
            <p>Доступна к отправке в:</p>
            <select v-model="accessDay" name="" id="">
              <option value="1" selected>Пн</option>
              <option value="2">Вт</option>
              <option value="3">Ср</option>
              <option value="4">Чт</option>
              <option value="5">Пт</option>
              <option value="6">Сб</option>
              <option value="7">Вс</option>
            </select>
          </div>
          <div>
            <p>Оптовый объем</p>
            <input required v-model="optQuantity" type="number">
          </div>
          <div class="">
            <div class="">Выберите картинку</div>
          <div class="input-file bg-opacity-70 my-[10px]">
            <img class="h-full w-full object-cover" :src="prevImg" alt="">
            <input
              class="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
              required
              title="Нажмите для выбора картинки"
              ref="img"
              accept="image/png, image/jpeg"
              type="file"
              @change="changeImg"
              name="img"
            />
          </div>
          </div>
        </form>
        <button :disabled="redf" @click="addImg" class="farmerBtn py-[10px] disabled:opacity-40 px-[20px] mt-[20px] hover:bg-green-700 transition-all text-xl font-semibold rounded-[10px]" :class="successAdd?'bg-white text-green-400': 'bg-green-400 text-white'">{{successAdd?'Успешно добавлено':'Выставить'}}</button>
     </div>
  </div>
</template>
<script setup>
const modalUserChange = ref(false)

const changeImg = () => prevImg.value = URL.createObjectURL(img.value.files[0])
const img = ref(null)
const successAdd = ref(false)
const redf = ref(false)
const prevImg = ref('https://aktifelk.com.tr/wp-content/uploads/2019/01/no-image-v2-500x383@2x.jpg')

const props = defineProps({
  actPage: Number,
  lkUserData: Array,
  cardObj: Object,
  farmerId: String
})

const productsByFarmer = ref([])
const optQuantity = ref("");
const title = ref("");
const categoryId = ref("");
const discountPrice = ref('')
const optPrice = ref('')
const price = ref('')
const volume = ref('')
const quantity = ref("");
const description = ref("");
const accessDay = ref("");
const categories = ref("");

const getProductByFarmer = async () => {
   try {
      const res = await fetch(`http://192.168.88.151:3000/api/get-product-by-farmer?farmerId=${props.farmerId}`);
      productsByFarmer.value = (await res.json()).map(el=>{
        el.image = 'http://192.168.88.151:3000/' + el.image.replace('src/', '')
        return el
      })
   } catch (error) { }
};


const getCategories = async () => {
   try {
      const res = await fetch("http://192.168.88.151:3000/api/category/get-categories");
      categories.value = await res.json()
   } catch (error) { }
};

getProductByFarmer()
getCategories()

const addImg = async () => {
  try {
      redf.value = true
      const formData = new FormData();
      formData.append('img', img.value.files[0])
      const res = await fetch(`http://192.168.88.151:3000/api/add-product-image`, {
        method: 'POST',
        body: formData,
      })

      const urlImg = await res.json()

      const res2 = await fetch(`http://192.168.88.151:3000/api/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({title:title.value,
        description:description.value,
        farmerId:props.farmerId,
        categoryId:categoryId.value,
        price:price.value,
        volume:volume.value,
        optPrice:optPrice.value,
        optQuantity:optQuantity.value,
        discountPrice:discountPrice.value,
        quantity:quantity.value,
        image:urlImg,
        accessDay:accessDay.value}),
    });

    await getProductByFarmer()

    redf.value = false
    successAdd.value = true
    setTimeout(() => {
      successAdd.value = false
    }, 2000);

   } catch (error) {console.log(error);}
}
</script>

<style lang="scss" scoped>
  .product-volume{
    display: flex;
    gap: 20px;
  }

  form input{
    background-color: #e5e7eb;
    padding: 6px 12px;
    margin: 10px 0;
    outline: none;
  }

  select{
    width: 194px;
    height: 36px;
    margin: 10px 0;
    background-color: #e5e7eb;
  }

  .input-file {
    position: relative;
    height: 100px;
    width: 200px;
    &:hover{
      &:before {
    background: rgba($color: #fff, $alpha: .9);}
    }

  &:before {
    content: '';
    display: flex;
    background: rgba($color: #fff, $alpha: .2);
    justify-content: center;
    transition: all .3s;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>