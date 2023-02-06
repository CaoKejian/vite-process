import { createPinia } from 'pinia'
import pinialuginPerist from 'pinia-plugin-persist'

const store =createPinia()

store.use(pinialuginPerist)

export default store