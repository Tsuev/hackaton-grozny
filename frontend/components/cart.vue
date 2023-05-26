<template>
  <UiModal @close="$emit('close')">
 <div class="cart">
  <div class="cart-main">
    <h2>Корзина</h2>
    <span>Минимальная сумма заказа 900 ₽</span>
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
    <button class="cart-sidebar__btn">
      Оформить
    </button>
    <p class="cart-sidebar__p">Минимальная сумма заказа 900 ₽</p>
  </div>
 </div> 
 </UiModal>

</template>

<script setup lang='ts'>
  
</script>

<style lang='scss' scoped>
  .cart{
    width: 1200px;
    height: 300px;
    display: flex;
    .cart-main{
      width: 70%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #e0dcda;

      h2{
      font-size: 28px;
      }

      span{
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 20px 9px 50px;
        background: #dff1f0;
        border-radius: 5px;
      }
    }
    .cart-sidebar{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;
      border-left: 1px solid #e0dcda;
      padding-left: 15px;
      .cart-sidebar__three{
        border-bottom: 1px dashed #e0dcda;
      }
      .cart-sidebar__one, .cart-sidebar__two, .cart-sidebar__three{
        padding: 10px 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .cart-sidebar__btn{
        width: 200px;
        height: 50px;
        padding: 14px 20px;
        margin: 20px 0;
        background-color: #ebebeb;
        border-radius: 12px;
        border: 2px solid #96d0cd;
      }
      .cart-sidebar__p{
        color: #a0a6a6;
      }
      h2{
        color: #a0a6a6;
      }
    }
  }
</style>