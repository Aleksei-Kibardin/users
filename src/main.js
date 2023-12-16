import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import './css/style.css'
import './css/reset.css'
import './fonts/vk/stylesheet.css'
import './api'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')