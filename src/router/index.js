import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue'),
    },
    {
        path: '/newsdetails/:id',
        name: 'newsdetails',
        component: () => import('../views/NewsDetails.vue'),
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/Contact.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
      },  
  ],
})

export default router
