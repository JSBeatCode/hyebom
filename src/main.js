import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


const app = createApp(App)

app.config.globalProperties.$addNumbers = 1

app.mount('#app')