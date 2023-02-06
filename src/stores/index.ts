import { defineStore } from 'pinia'

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
            menus:[{"id":7,"parentId":0,"createTime":"2023-2-6T11:39:20.000+00:00","title":"订单","level":0,"sort":0,"name":"oms","icon":"order","hidden":0},
            {"id":8,"parentId":7,"createTime":"2023-2-5T11:39:20.000+00:00","title":"订单列表","level":1,"sort":0,"name":"oms","icon":"product-list","hidden":0}]
        }
    },
    getters:{
      getNewMenus(state){
        const newMenus:NewMenus = {}
        const menus = state.menus
        for(let i = 0; i < menus.length;i++){
          if(menus[i].parentId === 0){
            // 一级菜单
            newMenus[menus[i].id] ={...menus[i]} 
          }else{
            // 二级菜单
            let parentId =  menus[i].parentId
            newMenus[parentId].children = newMenus[parentId].children || []
            newMenus[parentId].children?.push( menus[i])
          }
        }
        return newMenus
      }
    },
    actions:{}
})
