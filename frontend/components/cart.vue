<template>
  <UiModal v-if="basketInfo" @close="$emit('close')">
    <div class="cart">
      <div class="cart-main">
        <div class="cart__title">
          <h2>Корзина</h2>
          <!-- <span>Минимальная сумма заказа 900 ₽</span> -->
        </div>

        <div v-if="cart.length" class="cart__products">
          <div
            v-for="item in cart"
            :key="item._id"
            class="products__item p-2 flex justify-between items-center border-grey border-b"
          >
            <div class="products__img overflow-hidden rounded">
              <img width="50" :src="item.product.image" alt="" />
            </div>
            <div class="products__title">{{ item?.product.title }}</div>
            <div class="products__quantity">{{ item?.quantity }} шт.</div>
            <div class="products__volume">{{ item?.product.volume }}</div>
            <div class="product__price">{{ item?.product.price }} руб.</div>
            <div
              @click="deleteProductOfCart(item?._id)"
              class="product__delete"
            >
              <img
                width="20"
                class="cursor-pointer"
                src="@/assets/images/delete-icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div v-else>Корзина пуста</div>
      </div>
      <div class="cart-sidebar">
        <div class="cart-sidebar__one">
          <h2>Кол-во товаров</h2>
          <p>{{ basketInfo.quantity || 0 }}</p>
        </div>
        <!-- <div class="cart-sidebar__two">
          <h2>Вес посылки</h2>
          <p>0.8 кг</p>
        </div> -->
        <div class="cart-sidebar__three">
          <h2>Стоимость продукта</h2>
          <p>{{ basketInfo.totalSum || 0 }} ₽</p>
        </div>
        <button @click="$emit('closeModal')" class="cart-sidebar__btn">
          Оформить
        </button>
        <button @click="subscribe = !subscribe" class="cart-sidebar__btn">
          Оформить подписку
        </button>
        <div v-if="subscribe" class="subscribe__form rounded shadow-lg p-4">
          <label for="">
            Дата старта:
            <input v-modal="subData" type="date" name="" id="" />
          </label>
          <label for="">
            Выберите интервал:
            <select v-modal="subInterval" name="" id="">
              <option value="7">Неделя</option>
              <option value="30">Месяц</option>
              <option value="365">Год</option>
            </select>
          </label>
          <button
            @click="subscribeToCart"
            class="py-[10px] px-[20px] mt-[20px] hover:bg-green-700 transition-all bg-green-400 text-xl font-semibold text-white rounded-[10px]"
          >
            Оформить подписку
          </button>
        </div>
        <!-- <p class="cart-sidebar__p">Минимальная сумма заказа 900 ₽</p> -->
      </div>
    </div>
  </UiModal>
  <Spinner v-else />
</template>

<script setup>
let subscribe = ref(false);
let cart = ref([]);
let basketInfo = ref(null);

let subData = ref("");
let subInterval = ref("");

function subscribeToCart() {
  fetch("http://192.168.88.151:3000/api/basket/add-subscription", {
    body: JSON.stringify({
      userId: "",
      basketId: localStorage.getItem("cartId"),
      activatePeriodDays: subInterval.value,
      startDate: +subData.value,
    }),
    headers: { "Content-type": "application/json" },
  });
}

try {
  fetch(
    `http://192.168.88.151:3000/api/basket${
      "?id=" + localStorage.getItem("cartId")
    }`
  )
    .then((res) => res.json())
    .then((res) => {
      cart.value = res.data.basketItems;
      basketInfo.value = res.data;
      localStorage.setItem("cartId", res.data._id);
    });
} catch {
  alert("Произошла непредвиденная ошибка");
}

async function deleteProductOfCart(id) {
  await fetch("http://192.168.88.151:3000/api/basket/delete", {
    method: "POST",
    body: JSON.stringify({
      basketItem: id,
    }),
    headers: { "Content-type": "application/json" },
  });

  await fetch(
    `http://192.168.88.151:3000/api/basket${
      "?id=" + localStorage.getItem("cartId")
    }`
  )
    .then((res) => res.json())
    .then((res) => {
      cart.value = res.data.basketItems;

      localStorage.setItem("cartId", res.data._id);
    });
}
</script>

<style lang="scss" scoped>
.cart {
  width: 1200px;
  // height: 300px;
  display: flex;
  .cart-main {
    width: 70%;
    height: 60px;
    padding: 15px;
    border-bottom: 1px solid #e0dcda;

    .cart__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h2 {
      font-size: 28px;
    }

    span {
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 9px 20px 9px 50px;
      background: #dff1f0;
      border-radius: 5px;
    }
  }
  .cart-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    border-left: 1px solid #e0dcda;
    padding-left: 15px;
    .cart-sidebar__three {
      border-bottom: 1px dashed #e0dcda;
    }
    .cart-sidebar__one,
    .cart-sidebar__two,
    .cart-sidebar__three {
      padding: 10px 15px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .cart-sidebar__btn {
      width: 200px;
      height: 50px;
      padding: 14px 20px;
      margin: 20px 0;
      background-color: #ebebeb;
      border-radius: 12px;
      border: 2px solid #96d0cd;
    }
    .cart-sidebar__p {
      color: #a0a6a6;
    }
    h2 {
      color: #a0a6a6;
    }
  }
}
</style>
