import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/shop.vue'
import Home from '../views/home.vue'
import Pop from '../views/pop.vue'

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
    path: '/pop',  //網址路由名
    name: 'PopUps',
    component: Pop
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
