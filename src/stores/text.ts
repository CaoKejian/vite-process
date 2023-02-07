
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
        
        if(menus.length==null){
          console.log(123);
          
        }
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
      getAdminInfo(){
        return new Promise((resolve,reject)=>{
          getAdminInfoApi().then(res=>{
            if(res.code === 200){
              this.menus = res.data.menus
              resolve(res.data)
            }else{
              reject(res)
            }
          })
        })
      }
    },
    persist:{
        enabled:true
    }
  })