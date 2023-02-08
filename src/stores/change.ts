
import { defineStore } from "pinia";
import {getAdminLists} from '../request/api'

interface infoObj {
}

export const useinfoStore =  defineStore('info',{
    state:()=>{
        return {
            info:[
              <infoObj>{}
            ],
        }
    },
    getters:{
      getNewInfoLocal(state){
        let newInfo:any = {}
        const info = JSON.parse(localStorage.getItem('pinia-info') as string).info 
        newInfo = [...info]
        return newInfo
      }
    },
    actions:{
   
    },
 
  })