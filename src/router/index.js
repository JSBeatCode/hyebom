import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/src/views/Main.vue'
import Services from '@/src/views/Services.vue'
import Prices from '@/src/views/Prices.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/prices',
        component: Prices
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router