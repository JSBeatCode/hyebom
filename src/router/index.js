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
        path: '/prices/:id',
        component: Prices,
        name: 'Prices'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log('to.hash: ', to.hash);
        console.log('savedPosition: ', savedPosition);
        // if (to.hash) {
        //     return {
        //         el: to.hash,
        //         behavior: 'smooth',
        //     };
        // } else 
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router