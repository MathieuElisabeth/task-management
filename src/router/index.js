import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Facts from '@/views/Facts.vue'
import About from '@/views/About.vue'
import Error from '@/views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/facts/:id',
    name: 'Facts',
    component: Facts
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
