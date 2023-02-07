import  { createPinia,type PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'
const store1 =createPinia()

type Options={
  key?:string
}
const __piniakey__:string = 'ckj'

const setStorage = (key:string,value:any)=>{
  localStorage.setItem(key,JSON.stringify(value))
}
const getstorage = (key:string)=>{
  return localStorage.getItem(key)?JSON.parse(localStorage.getItem(key) as string):{}
}

export const piniaPlugin = (options:Options)=>{
  return (context:PiniaPluginContext)=>{
    const {store} = context
    const data = getstorage(`${options?.key ??__piniakey__ }-${store.$id}`)
  store.$subscribe(()=>{
    setStorage(`${options?.key ??__piniakey__ }-${store.$id}`,toRaw(store.$state))
  })
  return{
    ...data
  }
  }
}
store1.use(piniaPlugin({
  key:"pinia"
}))

export default store1