import Vue from 'vue';
 import VueRouter from 'vue-router';

import DarkTema from '../src/components/DarkTema.vue'
 import About from '../src/components/About.vue'
 import Authorization from '../src/components/Authorization.vue'
 import Carts from '../src/components/Carts.vue'
 import GeneratePizza from '../src/components/GeneratePizza.vue'
 import Pizza from '../src/components/Pizza.vue'
 import Profile from '../src/components/Profile.vue'
 import Register from '../src/components/Register.vue'
 import Search from '../src/components/Search.vue'



 Vue.use(VueRouter);

 const routes = [
   {
     path: '/index.html',
     name: 'index',
     component: DarkTema
     },
     {
     path: '/about',
     name: 'about',
     component: About
   },
     {
         path: '/Authorization',
         name: 'Authorization',
         component: Authorization
     },
     {
         path: '/Carts',
         name: 'Carts',
         component: Carts
     },
     {
         path: '/GeneratePizza',
         name: 'GeneratePizza',
         component: GeneratePizza
     },
     {
         path: '/Pizza',
         name: 'Pizza',
         component: Pizza
     },
     {
         path: '/Profile',
         name: 'Profile',
         component: Profile
     },
     {
         path: '/Register',
         name: 'Register',
         component: Register
     },
     {
         path: '/Search',
         name: 'Search',
         component: Search
     },

 ];

 const router = new VueRouter({
   routes,
 });

 export default router;