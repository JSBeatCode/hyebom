<template>
    <main class="main">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Team @emitOpenModal="onClickShowModal" />
        <Clients />
        <Price />
        <Testimonials />
        <Feedback />
        <Portfolio />
        <Contact />
    </main>
</template>

<script setup>
import { ref, provide, inject } from 'vue'
import Hero from '@/src/components/main/Hero.vue'
import About from '@/src/components/main/About.vue'
import Stats from '@/src/components/main/Stats.vue'
import Services from '@/src/components/main/Services.vue'
import Team from '@/src/components/main/Team.vue'
import Clients from '@/src/components/main/Clients.vue'
import Price from '@/src/components/main/Price.vue'
import Testimonials from '@/src/components/main/Testimonials.vue'
import Portfolio from '@/src/components/main/Portfolio.vue'
import Contact from '@/src/components/main/Contact.vue'
import Feedback from '@/src/components/main/Feedback.vue'

const onClickShowModal = inject('provideOpenModal');

</script>

<style lang="scss" scoped></style>