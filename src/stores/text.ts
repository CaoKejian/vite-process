
import { defineStore } from "pinia";
interface State {
  menus:MenuObj[]
}
interface MenuObj {
  parentId:number
  id:number
  children?:MenuObj[]
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
            age:18
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
        // localStorage.setItem('newMenus',JSON.stringify(newMenus))
        return newMenus
      }
    },
    actions:{},
    persist:{
        enabled:true
    }
  })