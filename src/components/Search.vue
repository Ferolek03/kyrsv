<template>
    <div>
      <button @click="toggleSearch" class="search-button">Поиск</button>
      <transition name="slide">
        <div v-if="isSearchOpen" class="search-container">
          <input type="text" placeholder="Введите запрос" class="search-input" />
          <button @click="closeSearch" class="close-button">Закрыть</button>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSearchOpen: false
      };
    },
    methods: {
      toggleSearch() {
        this.isSearchOpen = !this.isSearchOpen;
      },
      closeSearch() {
        this.isSearchOpen = false;
      }
    }
  };
  </script>
  
  <style>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s;
  }
  
  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
  }
  
  .search-button {
    background-color: #2196f3;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 1px;
  }
  
  .search-container {
    background-color: white;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .search-input {
    width: 200px;
    padding: 5px;
    margin-right: 10px;
  }
  
  .close-button {
    background-color: #f44336;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  