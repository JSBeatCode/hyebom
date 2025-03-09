import { createApp } from 'vue'
import App from './App.vue'
import globalMethods from './plugins/globalMethods';
import router from './router';

console.log('globalMethods: ', globalMethods);
const app = createApp(App)

app.use(globalMethods)
app.use(router)
app.config.globalProperties.$viteSvg = "./assets/vite.svg"

app.mount('#app')
