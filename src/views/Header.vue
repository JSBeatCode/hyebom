<template>

<header id="header" class="header d-flex align-items-center fixed-top">
      <div class="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="#" @click.prevent="onClickRouting" class="logo d-flex align-items-center me-auto">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="./assets/img/logo.png" alt=""> -->
          <h1 class="sitename">HYEBOM</h1>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
              <li :class="{'dropdown': (menu.dropDown && menu.dropDown.length > 0)}"
                v-for="menu in menuList" :key="menu.url">
                <!-- <a -->
                <a v-if="menu.dropDown === null || menu.dropDown === undefined || menu.dropDown === ''"
                  :href="menu.url" :class="menu.url === '#hero' ? 'active' : ''">
                  {{ menu.name }}
                </a>
                <a v-else :href="menu.url">
                  <span>{{ menu.name }}</span>
                  <i class="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li v-for="drop in menu.dropDown" :key="drop.url">
                    <router-link :to="drop.url">{{ drop.name }}</router-link>
                  </li>
                </ul>
              </li>
            
            
            <!-- <li><a href="#hero" class="active">홈</a></li>
            <li><a href="#about">혜봄소개</a></li>
            <li class="dropdown">
              <a href="#services">
                <span>주요업무</span>
                <i class="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><a href="service-details.html">사업자 재무상담</a></li>
                <li><a href="service-details.html#service-details-2">재산 & 세무조사</a></li>
              </ul>
            </li>
            <li><a href="#team">세무사소개</a></li>
            <li class="dropdown"><a href="#price"><span>수수료안내</span> <i
                  class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="price-details.html">사업자 세무회계</a></li>
                <li><a href="price-details.html#price-2">재산제세</a></li>
              </ul>
            </li>
            <li><a href="#testimonials">수임후기</a></li>
            <li><a href="#blog">블로그</a></li>
            <li><a href="#contact">오시는길</a></li> -->
          
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <!-- <a class="cta-btn" href="index.html#apply">상담하기</a> -->

      </div>
    </header>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  menuList: {
    type: Array
  }
})

function onClickRouting (event) {
  event.preventDefault();
  router.push('/')
}
// /**
//  * Mobile nav toggle
//  */
//  function mobileNavToogle() {
//   document.querySelector('body').classList.toggle('mobile-nav-active');
//   if (state.value.mobileNavToggleBtn) {
//     state.value.mobileNavToggleBtn.classList.toggle('bi-list');
//     state.value.mobileNavToggleBtn.classList.toggle('bi-x');
//   }
// }

onMounted(() => {
    /**
   * Mobile nav toggle
   */
  //  state.value.mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  // state.value.mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

//   /**
//    * Hide mobile nav on same-page/hash links
//    */
//   document.querySelectorAll('#navmenu a').forEach(navmenu => {
//     navmenu.addEventListener('click', () => {
//       if (document.querySelector('.mobile-nav-active')) {
//         mobileNavToogle();
//       }
//     });
//   });

//   /**
//    * Toggle mobile nav dropdowns
//    */
//   document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
//     navmenu.addEventListener('click', function (e) {
//       e.preventDefault();
//       this.parentNode.classList.toggle('active');
//       this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
//       e.stopImmediatePropagation();
//     });
//   });
})
</script>

<style lang="scss" scoped>

</style>