import { createApp } from 'vue'
import App from './App.vue'
import globalMethods from './plugins/globalMethods';
console.log('globalMethods: ', globalMethods);
const app = createApp(App)

app.use(globalMethods)
app.config.globalProperties.$viteSvg = "./assets/vite.svg"

app.mount('#app')