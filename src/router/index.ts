import { createRouter, createWebHistory,type RouteLocationNormalized } from 'vue-router'
import { createApp,createVNode,render } from 'vue'
import  loadingBar  from '../components/bar/bar.vue'
import pinia from '../stores/store'
import { useMainStore } from "../stores/text";
const mainStore = useMainStore(pinia);
import Cookies from 'js-cookie'
import { getAdminInfoApi } from '../request/api'
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
    },
    {
      path: '/pms',
      name: 'pms',
      component: () => import ('../views/home/home.vue'),
      meta:{
        title:"首页",
        transition:"animate__fadeIn"
      },
      children:[
        {
          path: 'product',
          name: 'product',
          component: () => import ('../views/pms/product.vue'),
        }
      ]
    }

  ]
})
interface MenuObj {
  parentId:number
  id:number
  children:MenuObj[]
  name:string
}
type NewMenus = {
  [key:number]:MenuObj 
}
const settitle = (to:RouteLocationNormalized) =>{
  if(to.meta.title == undefined){
    document.title = '后台管理系统'
  }else{
    document.title = to.meta.title
  }
}
const setNewArr = () =>{
  const newRoutes = []
  const newMenus:NewMenus = {}
  const menus = JSON.parse(localStorage.getItem('pinia-main')as string).menus
  for(let i = 0; i < menus.length;i++){
    if(menus[i].parentId === 0){
      // 一级菜单
      newMenus[menus[i].id] ={...menus[i],children:newMenus[menus[i].id]?.children || []} 
    }else{
      // 二级菜单
      let parentId =  menus[i].parentId
      newMenus[parentId] = newMenus[parentId] || {}
      newMenus[parentId].children = newMenus[parentId].children || []
      newMenus[parentId].children?.push(menus[i])
    }
  }
  for (let key in newMenus){
    newRoutes.push({
        path:'/'+newMenus[key].name,
        name:newMenus[key].name,
        component:()=> import ('../views/home/home.vue'),
        children:[] as any[]
      })
      for(let i =0;i<newMenus[key].children.length;i++){
        newRoutes[newRoutes.length - 1].children?.push({
          path:'/'+newMenus[key].children[i].name,
          name:newMenus[key].children[i].name,
          component:()=> import (`../views/${newMenus[key].name}/${newMenus[key].children[i].name}.vue`),
        })
      }
  }
  console.log(newRoutes);
  return newRoutes
}
const Vnode = createVNode(loadingBar)
render(Vnode,document.body)

router.beforeEach((to,from,next)=>{
  setNewArr()
  Vnode.component?.exposed?.startLoading()
  settitle(to)
  next()
})

router.afterEach((to,from)=>{
  Vnode.component?.exposed?.endLoading()
})
export default router
