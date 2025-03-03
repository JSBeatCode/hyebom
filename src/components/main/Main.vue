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
import Hero from '@/components/main/Hero.vue'
import About from '@/components/main/About.vue'
import Stats from '@/components/main/Stats.vue'
import Services from '@/components/main/Services.vue'
import Team from '@/components/main/Team.vue'
import Clients from '@/components/main/Clients.vue'
import Price from '@/components/main/Price.vue'
import Testimonials from '@/components/main/Testimonials.vue'
import Portfolio from '@/components/main/Portfolio.vue'
import Contact from '@/components/main/Contact.vue'
import Feedback from '@/components/main/Feedback.vue'

const onClickShowModal = inject('provideOpenModal');

</script>

<style lang="scss" scoped></style>