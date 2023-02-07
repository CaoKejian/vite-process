
import { defineStore } from "pinia";
import {getAdminInfoApi} from '../request/api'
interface State {
  menus:MenuObj[]
}
interface MenuObj {
  parentId:number
  id:number
  children?:MenuObj[]
  name:string
}
type NewMenus = {
  [key:number]:MenuObj
}
export const useMainStore =  defineStore('main',{
    state:()=>{
        return {
            menus:[
              <MenuObj>{}
            ],
        }
    },
    getters:{
      getNewMenus(state){
        const newMenus:NewMenus = {}
        const menus = state.menus
        
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
        return newMenus
      },
      getNewLocalMenus(state){
        const newMenus:any = {}
        const menus = JSON.parse(localStorage.getItem('pinia-main') as string).menus
        
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
        return newMenus
      }
    },
    actions:{
    },
    persist:{
        enabled:true
    }
  })