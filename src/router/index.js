import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/shop.vue'
import Home from '../views/home.vue'
import LeaderBoard from '../views/leaderboard.vue'
import Test from '../views/test.vue'

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
    name: 'LeaderBoard',
    component: LeaderBoard
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
