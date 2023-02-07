import { createApp,toRaw } from 'vue'
import { createPinia,type PiniaPluginContext } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/css/reset.css'
import router from './router'
const app = createApp(App)
const store = createPinia()

type Options = {
  key:string
}

const __piniaKey__:string = 'pinia1'
const setStorage = (key:string,value:any)=>{
  localStorage.setItem(key,JSON.stringify(value))
}
const getStorage = (key:string) =>{
  return localStorage.getItem(key)? JSON.parse(localStorage.getItem(key) as string) :{}
}
const piniaPlugin = (options:Options) => {
  return (context:PiniaPluginContext) =>{
    const {store} = context
    const data =getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
  store.$subscribe(()=>{
    setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`,toRaw(store.$state))
  })
  return {
    ...data
  }
  }
}
store.use(piniaPlugin({
  key:"pinia"
}))

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
