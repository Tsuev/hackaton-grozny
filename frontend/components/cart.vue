<template>
  <UiModal @close="$emit('close')">
    <div class="cart">
      <div class="cart-main">
        <div class="cart__title">
          <h2>Корзина</h2>
          <span>Минимальная сумма заказа 900 ₽</span>
        </div>

        <div v-if="cart?.basketItems?.length" class="cart__products">
          <div
            v-for="item in cart.basketItems"
            :key="item._id"
            class="products__item p-2 flex justify-between items-center border-grey border-b"
          >
            <div class="products__img overflow-hidden rounded">
              <img
                width="50"
                src="https://resizer.mail.ru/p/06568562-b3c1-5fbe-937b-a54599702ae0/AAAcfIsJ9WTZnmreGENojDxxT8d2zLC1Vp4PhnPZdACXirhjtt4kVFbDAIWcnO-zfkQgJK6hCLo_awSPGLa69pB2l4A.jpg"
                alt=""
              />
            </div>
            <div class="products__title">Название продукта</div>
            <div class="products__quantity">{{ item.quantity }} шт.</div>
            <div class="product__price">{{ item.totalSum }} руб.</div>
          </div>
        </div>
        <div v-else>Корзина пуста</div>
      </div>
      <div class="cart-sidebar">
        <div class="cart-sidebar__one">
          <h2>Кол-во товаров</h2>
          <p>1</p>
        </div>
        <div class="cart-sidebar__two">
          <h2>Вес посылки</h2>
          <p>0.8 кг</p>
        </div>
        <div class="cart-sidebar__three">
          <h2>Стоимость продукта</h2>
          <p>250 ₽</p>
        </div>
        <button class="cart-sidebar__btn">Оформить</button>
        <p class="cart-sidebar__p">Минимальная сумма заказа 900 ₽</p>
      </div>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
let cart: any = ref([]);

fetch("http://192.168.88.151:3000/api/basket/add", {
  method: "POST",
  body: JSON.stringify({
    product: "6470f40e92c386b950f8d535",
    basketId: localStorage.getItem("cartId"),
  }),
});

fetch(
  `http://192.168.88.151:3000/api/basket${
    "?id=" + localStorage.getItem("cartId")
  }`
)
  .then((res) => res.json())
  .then((res) => {
    cart.value = res;

    localStorage.setItem("cartId", res.data._id);
  });
fetch(
  `http://192.168.88.151:3000/api/basket${
    "?id=" + localStorage.getItem("cartId")
  }`
)
  .then((res) => res.json())
  .then((res) => {
    cart.value = res;

    localStorage.setItem("cartId", res.data._id);
  });
const addProductToCart = () => {};
</script>

<style lang="scss" scoped>
.cart {
  width: 1200px;
  height: 300px;
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
