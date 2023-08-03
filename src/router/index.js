import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/shop.vue'
import Home from '../views/home.vue'
import Leaderboard from '../views/leaderboard.vue'

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
    path: '/lb',
    name: 'Leaderboard',
    component: Leaderboard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
