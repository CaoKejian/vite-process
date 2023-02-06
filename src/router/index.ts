import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router'{
  interface RouteMeta{
    title:string,
    transition:string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import ('../views/login/login.vue'),
      meta:{
        title:"登录页面",
        transition:"animate__fadeIn"
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import ('../views/home/home.vue'),
      meta:{
        title:"首页",
        transition:"animate__fadeIn"
      }
    }
  ]
})

export default router
