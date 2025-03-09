<template>

  <div class="divBody index-page">
    <Header :menuList="state.menuList" />
    <router-view />
    <!-- <main class="main">
        <Hero />
        
        <About />

      <Stats />

      <Services /> 
      
      <Team @emitOpenModal="onClickShowModal"/>
      
      <Clients />

      <Price />

      <Testimonials />
      
      <Feedback />
      
      <Portfolio />

      <Contact /> 
    </main>
    -->
    <Footer :menuList="state.menuList" />

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>

    <!-- Preloader -->
    <div id="preloader"></div>

    <!-- modal -->
    <div id="overlay" class="overlay" @click="onClickOverlay()"></div>
    <div id="modal" class="modal">
      <div class="modal-header">
        모달 제목

      </div>
      <div class="modal-body">
        여기에 내용을 추가하세요.
      </div>
      <div class="modal-footer">
        <button id="closeModal" class="close-btn" @click="onClickCloseModal()">닫기</button>
      </div>
    </div>
</div>
</template>
<script setup>
import Header from '@/src/components/Header.vue'
import Footer from '@/src/components/Footer.vue'
// import Main from '@/src/views/Main.vue';
// import Hero from '@/src/components/main/Hero.vue'
// import About from '@/src/components/main/About.vue'
// import Stats from '@/src/components/main/Stats.vue'
// import Services from '@/src/components/main/Services.vue'
// import Team from '@/src/components/main/Team.vue'
// import Clients from '@/src/components/main/Clients.vue'
// import Price from '@/src/components/main/Price.vue'
// import Testimonials from '@/src/components/main/Testimonials.vue'
// import Portfolio from '@/src/components/main/Portfolio.vue'
// import Contact from '@/src/components/main/Contact.vue'
// import Feedback from '@/src/components/main/Feedback.vue'
import srcData from '@/src/data.json'
import { ref, defineProps, onMounted, getCurrentInstance, provide } from 'vue';

const refSrcData = ref(srcData);
const state = ref({
    // const openModalButton = document.getElementById('openModal');
    mobileNavToggleBtn: null,
    closeModalButton: null,
    modal: null,
    modalHeader: null,
    modalBody: null,
    overlay: null,
    intervalVal: null,
    menuList: [
      { url: '/', name: '홈'},
      { url: "#about", name: "혜봄소개" },
      { 
        url: "#services", 
        name: "주요업무", 
        dropDown: [
          { url: "service-details.html", name: "사업자 재무상담" },
          { url: "service-details.html#service-details-2", name: "재산 & 세무조사" },
        ] 
      },
      { url: "#team", name: "세무사소개" },
      { 
        url: "#price", 
        name: "수수료안내",
        dropDown: [
          { url: "price-details.html", name: "사업자 세무회계" },
          { url: "price-details.html#price-2", name: "재산제세" }
        ]
      },
      { url: "#testimonials", name: "수임후기" },
      { url: "#blog", name: "블로그" },
      { url: "#contact", name: "오시는길" }
    ],
    teamData: [
      {
        id: 1,
        title:'김혜지 대표세무사',
        carrier: `**세무업무 총괄**  
          · 사업자기장, 양도세·상속세·증여세 등 재산제세  
          · 개인·기업 세무조사, 기업자문, 국제조세 전문  

        **前. 세무법인 석성**  
          · 사업자기장(부가가치세, 원천세, 종합소득세, 법인세)  

        **前. 광교세무법인**  
          · 국내 대형법인 자문, 법인세 산출, 경정청구  

        **前. 삼영회계법인**  
          · 양도·상속·증여·종합부동산세 등 재산제세  

        **前. 택스원세무법인**  
          · 체납세금 면책 관련 고충청구
        `
      },
      {
        id: 2,
        title: '다니엘 주요경력',
        carrier: '주요경력'
      },
      {
        id: 3,
        title: '모아나 주요경력',
        carrier: '주요경력'
      }
    ]
  });
  
const instance = getCurrentInstance();
const globalVar = instance?.appContext.config.globalProperties;

  /**** modal start *****/
  // function preventScroll(event) {
  //   event.preventDefault();
  // }

  function onClickShowModal (index) {
    state.value.modalHeader.innerText = '';
    state.value.modalBody.innerText = '';

    // 내용의 높이에 따라 모달 높이 조절
    if (state.value.modal.scrollHeight < 400) {
      state.value.modal.style.height = "auto";
    } else {
      state.value.modal.style.height = "400px";
    }

    state.value.modal.classList.add('open');
    state.value.overlay.classList.add('open');
    state.value.teamData.forEach(one => {

      if (index === one.id) {
        state.value.modalHeader.innerText = one.title
        state.value.modalBody.innerText = one.carrier
      }
    }) 

    const modalDiv = document.querySelector(".modal");
    // modalDiv.addEventListener("wheel", preventScroll, { passive: false });
    document.body.style.overflow = "hidden";
  }

  function onClickCloseModal () {
    state.value.modal.classList.remove('open');
    state.value.overlay.classList.remove('open');
    // modalDiv.removeEventListener("wheel", preventScroll);
    document.body.style.overflow = "";
  }

  // 오버레이 클릭 시 모달 닫기
  function onClickOverlay () {
    state.value.modal.classList.remove('open');
    state.value.overlay.classList.remove('open');

    document.body.style.overflow = "";
  }

  provide('provideOpenModal', onClickShowModal)

  /**** modal end *****/


/********* initializing script start **************/

/**
 * Mobile nav toggle
 */
function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  if (state.value.mobileNavToggleBtn) {
    state.value.mobileNavToggleBtn.classList.toggle('bi-list');
    state.value.mobileNavToggleBtn.classList.toggle('bi-x');
  }
}

/**
 * Apply .scrolled class to the body as the page is scrolled down
 */
function toggleScrolled() {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}
/**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}

/**
 * Init swiper sliders
 */
function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
    );

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

  /**
   * Scroll top button
   */

function toggleScrollTop(scrollTop) {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}

/**
* Navmenu Scrollspy
*/

function navmenuScrollspy(navmenulinks) {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active');
    } else {
      navmenulink.classList.remove('active');
    }
  })
}

/********* initializing script end **************/
onMounted(() => {
  let appTimeout = setTimeout(() => {
    const elements = {
      closeModalButton: document.getElementById('closeModal'),
      modal: document.getElementById('modal'),
      modalHeader: document.querySelector('.modal-header'),
      modalBody: document.querySelector('.modal-body'),
      overlay: document.getElementById('overlay')
    }

    state.value = Object.assign({}, state.value, elements);
    
    clearTimeout(appTimeout)
  }, 100)
  

  // 다이얼로그 바깥쪽 클릭 시 닫히는 기능

  // window.addEventListener('load', () => {
  console.log('페이지의 모든 리소스가 로드되었습니다.');

  "use strict";

  document.addEventListener('scroll', toggleScrolled);
  // window.addEventListener('load', toggleScrolled);
  toggleScrolled()

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
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    // window.addEventListener('load', () => {
    preloader.remove();
    // });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  toggleScrollTop(scrollTop);
  // window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', () => {
    toggleScrollTop(scrollTop)
  });



  aosInit();
  // window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();


  // initSwiper();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  // window.addEventListener('load', function(e) {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth'
        });
      }, 100);
    }
  }
  // });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  navmenuScrollspy(navmenulinks)

  document.addEventListener('scroll', navmenuScrollspy(navmenulinks));


});

 
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
