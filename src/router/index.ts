import { createRouter, createWebHistory,type RouteLocationNormalized } from 'vue-router'
import { createApp,createVNode,render,onMounted } from 'vue'
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
      path: '/login',
      name: 'login',
      component: () => import ('../views/login/login.vue'),
      meta:{
        title:"登录页面",
        transition:"animate__fadeIn"
      }
    },
    {
      path:'/',
      name:'home',
      component:()=> import ('../views/home/home.vue'),
      redirect:'/index',
      children:[
        {
          path:'index',
          name:'index',
          component:()=> import ('../views/index/index.vue'),
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
    const newMenus:NewMenus = mainStore.getNewLocalMenus
  for (let key in newMenus){
    const newRoute ={
        path:'/'+newMenus[key].name,
        name:newMenus[key].name,
        component:()=> import ('../views/home/home.vue'),
        redirect:'/' + newMenus[key].name + '/' + newMenus[key].children[0].name,
        children:[] as any[]
      }
      for(let i =0;i<newMenus[key].children.length;i++){
        newRoute.children.push({
          path:'/'+newMenus[key].children[i].name,
          name:newMenus[key].children[i].name,
          component:()=> import (`../views/${newMenus[key].name}/${newMenus[key].children[i].name}.vue`),
        })
        router.addRoute(newRoute)
    }
  }
}
const Vnode = createVNode(loadingBar)
render(Vnode,document.body)

router.beforeEach((to,from,next)=>{
  const token = Cookies.get('token')
  if(token && mainStore.menus.length === 1){
    mainStore.getAdminInfo().then(()=>{
      setNewArr()
      next(to)
    })
  }else if(token && mainStore.menus.length !==1 && from.path === '/login' && to.path === '/index'){
    setNewArr()
    next(to)
  }else {
    next(to)
  } 
  Vnode.component?.exposed?.startLoading()
  settitle(to)
  next()
})

router.afterEach((to,from)=>{
  Vnode.component?.exposed?.endLoading()
})
export default router
