import { createApp,createVNode,render } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  loadingBar  from './components/bar/bar.vue'

import App from './App.vue'
import './assets/css/reset.css'
import router from './router'
const pinia = createPinia()


const app = createApp(App)

const Vnode = createVNode(loadingBar)
render(Vnode,document.body)
router.beforeEach((to,from,next)=>{
  Vnode.component?.exposed?.startLoading()
  document.title = to.meta.title
  next()
})
router.afterEach((to,from)=>{
  Vnode.component?.exposed?.endLoading()
})


app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
