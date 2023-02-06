import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import './assets/css/reset.css'
import router from './router'
const pinia = createPinia()


const app = createApp(App)


router.beforeEach((to,from,next)=>{
  console.log(to);
  
  document.title = to.meta.title
  next()
})
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
