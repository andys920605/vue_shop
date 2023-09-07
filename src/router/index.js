import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/shop.vue'
import Home from '../views/home.vue'
import Signin from '../views/signin.vue'

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
