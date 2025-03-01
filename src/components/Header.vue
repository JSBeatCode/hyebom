<template>

<header id="header" class="header d-flex align-items-center fixed-top">
      <div class="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="index.html" class="logo d-flex align-items-center me-auto">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="./assets/img/logo.png" alt=""> -->
          <h1 class="sitename">HYEBOM</h1>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li v-for="menu in menuList" :key="menu.url">
              <a :href="menu.url" :class="menu.url === '#hero' ? 'active' : ''">{{ menu.name }}</a>
            </li>
            
            <!--
            <li><a href="index.html#hero" class="active">홈</a></li>
            <li><a href="index.html#about">혜봄소개</a></li>
            <li class="dropdown"><a href="index.html#services">
              <span>주요업무</span>
              <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="service-details.html">사업자 재무상담</a></li>
                <li><a href="service-details.html#service-details-2">재산 & 세무조사</a></li>
              </ul>
            </li>
            <li><a href="index.html#team">세무사소개</a></li>
            <li class="dropdown"><a href="index.html#price"><span>수수료안내</span> <i
                  class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="price-details.html">사업자 세무회계</a></li>
                <li><a href="price-details.html#price-2">재산제세</a></li>
              </ul>
            </li>
            <li><a href="index.html#testimonials">수임후기</a></li>
            <li><a href="index.html#blog">블로그</a></li>
            <li><a href="index.html#contact">오시는길</a></li>
          -->
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <!-- <a class="cta-btn" href="index.html#apply">상담하기</a> -->

      </div>
    </header>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';

const props = defineProps({
  menuList: {
    type: Array
  }
})

onMounted(() => {
  
})
</script>

<style lang="scss" scoped>

</style>