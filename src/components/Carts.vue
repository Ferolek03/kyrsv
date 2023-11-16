<template>
    <div class="cart">
      <h2>Корзина</h2>
      <ul>
        <li v-for="pizza in cartItems" :key="pizza.id">
          {{ pizza.name }} - {{ pizza.price }} руб.
          <button @click="removeFromCart(pizza)">Убрать</button>
        </li>
      </ul>
      <p>Итого: {{ getTotalPrice() }} руб.</p>
      <button @click="checkout">Оформить заказ</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [], 
      };
    },
    methods: {
      removeFromCart(pizza) {
        const index = this.cartItems.findIndex(item => item.id === pizza.id);
        if (index !== -1) {
          this.cartItems.splice(index, 1);
        }
      },
      getTotalPrice() {
        return this.cartItems.reduce((total, pizza) => total + pizza.price, 0);
      },
      checkout() {
       
        this.cartItems = [];
        alert('Заказ оформлен! Спасибо за покупку.');
      },
    },
  };
  </script>
  
  <style scoped>

  </style>

  

 