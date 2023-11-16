<template>
    <div class="pizza-order">
      
      <div class="pizza-list">
        <div v-for="pizza in pizzas" :key="pizza.id" class="pizza-item">
          <img :src="pizza.image" :alt="pizza.name" class="pizza-image" />
          <h2>{{ pizza.name }}</h2>
          <p>{{ pizza.description }}</p>
          <div class="pizza-options">
            <label for="size">Размер:</label>
            <select id="size" v-model="selectedSize" class="size">
              <option v-for="size in pizza.sizes" :key="size">{{ size }}</option>
            </select>
            <label for="quantity">Количество:</label>
            <input class="coll" type="number" id="quantity" v-model="selectedQuantity" min="1" />
          </div>
          <button @click="addToCart(pizza)">Добавить в корзину</button>
        </div>
      </div>
      <h2>Корзина</h2>
      <div v-if="cart.length === 0">Корзина пуста</div>
      <ul v-else>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - {{ item.size }} - {{ item.quantity }}
          <button @click="removeFromCart(index)">Удалить</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pizzas: [
          {
            id: 1,
            name: "Маргарита",
            description: "Классическая пицца с томатным соусом и моцареллой",
            image: "src/components/icons/pngwing.com (6).png",
            sizes: ["30 см", "40 см", "50 см"]
          },
          {
            id: 2,
            name: "Гавайская",
            description: "Пицца с пепперони, томатным соусом и моцареллой",
            image: "src/components/icons/pngwing.com (11).png",
            sizes: ["30 см", "40 см", "50 см"]
          },
          {
            id: 3,
            name: "Пепперони",
            description: "Пицца с пепперони, томатным соусом и моцареллой",
            image: "src/components/icons/pngwing.com (14) (1).png",
            sizes: ["30 см", "40 см", "50 см"]
          },
          
          // Другие пиццы...
        ],
        selectedSize: "",
        selectedQuantity: 1,
        cart: []
      };
    },
    methods: {
      addToCart(pizza) {
        if (this.selectedSize && this.selectedQuantity > 0) {
          const item = {
            name: pizza.name,
            size: this.selectedSize,
            quantity: this.selectedQuantity
          };
          this.cart.push(item);
          this.selectedSize = "";
          this.selectedQuantity = 1;
        }
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
      }
    }
  };
  </script>
  
  <style>

  .coll{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 3px solid black;
  }
  .size{
    width: 80px;
    height: 30px;
    border-radius: 15px;
    border: 3px solid black;
  }
  .pizza-order {
    display:inline;
    flex-direction: column;
    align-items: center;
   
  }
  
  .pizza-list {
   
   
    display: flex;
	justify-content: center;
	align-items: center;
    
  }
  
  .pizza-item {
    border: 5px solid #726a6a;
    padding: 20px;
    border-radius: 15px;
    margin: 15px;
    background-color: rgb(146, 118, 148);
   
  }
  
  .pizza-image {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
  
  .pizza-options {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #16b910;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  button {
    margin-top: 15px;
    margin-left: 10px;
  }
  </style>
  
<!-- хз что это  -->
   <!-- <template>
    <div>
      <button @click="addToCart" class="add-to-cart-button">Добавить в корзину</button>
      <transition name="fade">
        <div v-if="isAddedToCart" class="cart-animation">
          <img src="cart-icon.png" alt="Корзина" class="cart-icon" />
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAddedToCart: false
      };
    },
    methods: {
      addToCart() {
        this.isAddedToCart = true;
        setTimeout(() => {
          this.isAddedToCart = false;
        }, 1000); // Здесь можно задать продолжительность анимации
      }
    }
  };
  </script>
  
  <style>
  .add-to-cart-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cart-animation {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
  
  .cart-icon {
    width: 30px;
    height: 30px;
  }
  </style> -->