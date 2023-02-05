import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import ('../views/login/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import ('../views/home/home.vue')
    }
  ]
})

export default router
