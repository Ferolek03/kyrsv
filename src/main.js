import './assets/main.css'

import { createApp } from 'vue'
// import store from './vuex/store'
import App from './App.vue'
import DarkTema from '../src/components/DarkTema.vue'
import GeneratePizza from '../src/components/GeneratePizza.vue'
import Carts from '../src/components/Carts.vue'
import Pizza from '../src/components/Pizza.vue'
import Register from '../src/components/Register.vue'
import Search from '../src/components/Search.vue'
import About from '../src/components/About.vue'
import Profile from '../src/components/Profile.vue'





createApp(App).mount('#app')

createApp(DarkTema).mount('#dt')

createApp(GeneratePizza).mount('#gp')

createApp(Carts ).mount('#carts')

createApp(Pizza).mount('#pizza')

createApp(Register).mount('#reg')

createApp(Search).mount('#search')

createApp(About).mount('#about')

createApp(Profile).mount('#profile')

// new Vue({
// store
// }).$mount('#app')