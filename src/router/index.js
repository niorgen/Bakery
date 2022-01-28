import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Store',
    name: 'Store',
   component:Store
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
