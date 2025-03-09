import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/src/views/Main.vue'

const routes = [
    {
        path: '/',
        component: Main
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router