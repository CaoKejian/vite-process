import { createRouter, createWebHistory } from 'vue-router'
import { createApp,createVNode,render } from 'vue'
import  loadingBar  from '../components/bar/bar.vue'
import Cookies from 'js-cookie'

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
      path:'',
      redirect:'/login'
    },
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
const Vnode = createVNode(loadingBar)
render(Vnode,document.body)
router.beforeEach((to,from,next)=>{
  const token = Cookies.get('token')
  // const result = localStorage.getItem("menus")
  if(token){
    console.log('没登录');
  }
  Vnode.component?.exposed?.startLoading()
  document.title = to.meta.title
  next()
})
router.afterEach((to,from)=>{
  Vnode.component?.exposed?.endLoading()
})
export default router
