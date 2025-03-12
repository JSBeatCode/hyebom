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
        // beforeRouteEnter(to, from, next) {
        //     next(() => {
        //       window.scrollTo(0, 0);
        //     });
        // }
    },
    {
        path: '/prices',
        component: Prices
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log('savedPosition: ', savedPosition);
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router