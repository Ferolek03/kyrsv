<script>
import DarkTema from './components/DarkTema.vue'
import GeneratePizza from './components/GeneratePizza.vue'
import Carts from './components/Carts.vue'
import Pizza from './components/Pizza.vue'
import Register from './components/Register.vue'
import Search from './components/Search.vue'
import About from './components/About.vue'
import axios from 'axios'

export default{
  components: {
  DarkTema,
  GeneratePizza,
  Carts,
  Pizza,
  Register,
  Search,
  About,
  
  },
  async setup() {
    
  },
  methods: {

    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        console.log(response)
      } catch (e) {
          alert('ошибка')
        }
      }
  }
};

</script>

<template>
 
  
  <!-- <header>
      <DarkTema />
  </header>

  <main>
    <TheWelcome />
  </main>
  <footer>
    <Generate />
  </footer> -->
</template>

<style scoped>
header{
  margin-left: 10px;
  
}
</style>
