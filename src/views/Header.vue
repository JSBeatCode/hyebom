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
              <li v-for="menu in menuList" :key="menu.url" :class="{'dropdown': (menu.dropDown && menu.dropDown.length > 0)}" @click="onClickNavmenu">
                <!-- <a -->
                <a v-if="menu.dropDown === null || menu.dropDown === undefined"
                  :href="menu.url" :class="menu.url === '#hero' ? 'active' : ''">
                  {{ menu.name }}
                </a>
                <a v-else :href="menu.url" id="dropDownMenu">
                  <span>{{ menu.name }}</span>
                  <i @click.stop.prevent="onClickDropDown" class="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li v-for="drop in menu.dropDown" :key="drop.url" @click.stop.prevent="(event) => { onClickDropRoute(event, drop.url) }">
                    <a href="#">{{ drop.name }}</a>
                    <!-- <router-link :to="drop.url">{{ drop.name }}</router-link> -->
                  </li>
                </ul>
              </li>
            
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <!-- <a class="cta-btn" href="index.html#apply">상담하기</a> -->

      </div>
    </header>
</template>

<script setup>
import { ref, defineProps, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
const state = ref({
  mobileNavToggleBtn: null
});

const router = useRouter();

const props = defineProps({
  menuList: {
    type: Array
  }
})

const menuNormalList = computed(() => {
  return props.menuList.filter(one => one.dropDown === null || one.dropDown === undefined)
})

const menuDropdownList = computed(() => {
  return props.menuList.filter(one => one.dropDown !== null && one.dropDown !== undefined && Array.isArray(one.dropDown) && one.dropDown.length > 0)
})

function onClickRouting (event) {
  router.push('/')
}
/**
 * Mobile nav toggle
 */
 function mobileNavToogle () {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  if (state.value.mobileNavToggleBtn) {
    state.value.mobileNavToggleBtn.classList.toggle('bi-list');
    state.value.mobileNavToggleBtn.classList.toggle('bi-x');
  }
}

function onClickDropDown (event) {
  const dropDownMenu = document.querySelectorAll('[id^="dropDownMenu"]')
  event.target.parentNode.classList.toggle('active');
  event.target.parentNode.nextElementSibling.classList.toggle('dropdown-active');
}

function onClickNavmenu () {
  if (document.querySelector('.mobile-nav-active')) {
    mobileNavToogle();
  }
}

function onClickDropRoute (event, url) {
  for (let i = 0; i < dropDownMenu.length; i++) {
    dropDownMenu[i].classList.remove('active');
    dropDownMenu[i].nextElementSibling.classList.remove('dropdown-active');
  }
  mobileNavToogle()
  router.push(url)
}

onMounted(() => {
    /**
   * Mobile nav toggle
   */
    state.value.mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    state.value.mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  // document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  //   console.log('jsdno0 debug2-1-1 navmenu', navmenu);
  //   navmenu.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     console.log('jsdno0 debug2-2 this.parentNode', this.parentNode);
  //     this.parentNode.classList.toggle('active');
  //     this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
  //     e.stopImmediatePropagation();
  //   });
  // });
})
</script>

<style lang="scss" scoped>

</style>