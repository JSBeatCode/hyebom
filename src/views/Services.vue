<template>
  <main class="main">

<!-- Page Title -->
<div class="page-title dark-background" data-aos="fade" style="background-image: url(@/assets/img/page-title-bg.webp);">
  <div class="container position-relative">
    <h1>주요업무</h1>
    <p>"사업 특성에 맞춘 재무 분석과 철저한 세무조사 대응으로 고객님의 자산을 안전하게 지켜드립니다."</p>
    <!-- <nav class="breadcrumbs">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li class="current">Service Details</li>
      </ol>
    </nav> -->
  </div>
</div><!-- End Page Title -->

<!-- Service Details Section -->
<section id="service-details-1" class="portfolio-details section">

  <div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="row gy-4">

      <div class="col-lg-4">
        
        <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
          <h2>기업의 성장과 안정성을 지원합니다.</h2>
          <p>
            (설명글) (예시)사업 특성에 맞춘 재무 분석과 전략적 세무 컨설팅을 드립니다. 수수료 안내(한국세무사회 보수표에 따름)는 참고해 주세요. 사엄자 세금(부가세, 원천세 등), 신고 및 세금관리에 대해 지원합니다.
          </p>
        </div>

        <div class="portfolio-info" data-aos="fade-up" data-aos-delay="200">
          <h3 style="color: #ff4a17">사업자 재무상담</h3>
          <ul>
            <li><strong>주요고객</strong>: 기업, 개인사업자, 프리랜서, 자영업</li>
            <li><strong>상담료</strong>: 55,000원 (기장수임, 단순견적문의시 별도 상담료 없음)</li>
            <li><strong>기장수임</strong>: 기장료(월) + 조정료(연1회) 발생</li>
            <!-- <li>
              <strong>설명</strong>: 
              <p>수수료 안내(한국세무사회 보수표에 따름) 참고.</p>
              <p>사엄자 세금(부가세, 원천세 등) 신고 및 세금관리.</p>
            </li> -->
          </ul>
        </div>
      </div>

      <div class="col-lg-8">
        <div id="carousel-container1" class="carousel-container">
          <div id="carousel-wrapper1" class="carousel-wrapper">
              <div id="carousel-text1" class="carousel-text">
                <img src="@/assets/img/portfolio/app-1.jpg" alt="">
              </div>
              <div id="carousel-text1" class="carousel-text">
                <img src="@/assets/img/portfolio/product-1.jpg" alt="">
              </div>
              <div id="carousel-text1" class="carousel-text">
                <img src="@/assets/img/portfolio/branding-1.jpg" alt="">
              </div>
          </div>
          <div class="pagination">
              <div id="bullet1" class="bullet active" data-index="0"></div>
              <div id="bullet1" class="bullet"z data-index="1"></div>
              <div id="bullet1" class="bullet" data-index="2"></div>
          </div>
        </div>
      </div>

    </div>
  </div>

</section><!-- /Service Details Section -->

<!-- Service Details Section -->
<section id="service-details-2" class="portfolio-details section">

  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row gy-4">
      <div class="col-lg-4">
        
        <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
          <h2>고객님의 자산을 안전하게 지켜드립니다.</h2>
          <p>
            (설명글)
          </p>
        </div>

        <div class="portfolio-info" data-aos="fade-up" data-aos-delay="200">
          <h3 style="color: #ff4a17">재산 & 세무조사</h3>
          <ul>
            <li><strong>주요고객</strong>: 기업, 개인사업자, 프리랜서, 자영업</li>
            <li><strong>상담료</strong>: 110,000원 (30분 당. 단순견적문의시 별도 상담료 없음)</li>
            <li><strong>신고대리 수임</strong>: 수임범위 및 사후관리 용역강도에 따라 수임료 상이</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8">
        <div id="carousel-container2" class="carousel-container">
          <div id="carousel-wrapper2" class="carousel-wrapper">
              <div id="carousel-text2" class="carousel-text">
                <img src="@/assets/img/portfolio/books-1.jpg" alt="">
              </div>
              <div id="carousel-text2" class="carousel-text">
                <img src="@/assets/img/portfolio/app-1.jpg" alt="">
              </div>
              <div id="carousel-text2" class="carousel-text">
                <img src="@/assets/img/portfolio/product-1.jpg" alt="">
              </div>
              <div id="carousel-text2" class="carousel-text">
                <img src="@/assets/img/portfolio/branding-1.jpg" alt="">
              </div>
          </div>
          <div class="pagination">
              <div id="bullet2" class="bullet active" data-index="0"></div>
              <div id="bullet2" class="bullet"z data-index="1"></div>
              <div id="bullet2" class="bullet" data-index="2"></div>
              <div id="bullet2" class="bullet" data-index="3"></div>
          </div>
        </div>
    </div>

  </div>
  </div>

</section><!-- /Service Details Section -->

</main>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, nextTick, watch } from 'vue'
  const state = ref({
    wrapper1: null,
    texts1: null,
    bullets1: null,
    index1: 0,
    wrapper2: null,
    texts2: null,
    bullets2: null,
    index2: 0
  })

  const route = useRoute();
  const router = useRouter();

  function updateCarousel1 () {
    state.value.wrapper1.style.transform = `translateX(-${state.value.index1 * 100}%)`
    updatePagination1()
  }

  function updatePagination1 () {
    state.value.bullets1.forEach(bullet => bullet.classList.remove('active'))
    state.value.bullets1[state.value.index1].classList.add('active')
  }

  function updateCarousel2 () {
    state.value.wrapper2.style.transform = `translateX(-${state.value.index2 * 100}%)`
    updatePagination2()
  }

  function updatePagination2 () {
    state.value.bullets2.forEach(bullet => bullet.classList.remove('active'))
    state.value.bullets2[state.value.index2].classList.add('active')
  }

  function scrollToSection () {
    console.log('scrollToSection', route.hash);
    if (route.hash) {
      nextTick(() => {
        const element = document.querySelector(route.hash)
        console.log('element', element);
        if (element) {
          console.log('element', element);
          element.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }

  watch(route, (newVal, oldVal) => {
    let scrollTimeout = setTimeout(() => {
     scrollToSection();
     clearTimeout(scrollTimeout)
    }, 100)
  })

  onMounted(() => {
    
    let scrollTimeout = setTimeout(() => {
      scrollToSection();
      clearTimeout(scrollTimeout)
    }, 100)
    

    state.value.wrapper1 = document.querySelector('[id^="carousel-wrapper1"]');
    state.value.texts1 = document.querySelectorAll('[id^="carousel-text1"]');
    state.value.bullets1 = document.querySelectorAll('[id^="bullet1"]');
    setInterval(() => {
      state.value.index1 = (state.value.index1 === state.value.texts1.length - 1) ? 0 : state.value.index1 + 1;
      updateCarousel1()
    }, 3000)

    state.value.wrapper2 = document.querySelector('[id^="carousel-wrapper2"]');
    state.value.texts2 = document.querySelectorAll('[id^="carousel-text2"]');
    state.value.bullets2 = document.querySelectorAll('[id^="bullet2"]');
    setInterval(() => {
      state.value.index2 = (state.value.index2 === state.value.texts2.length - 1) ? 0 : state.value.index2 + 1;
      updateCarousel2()
    }, 3000)
  })
</script>

<style lang="scss" scoped>
        
        .carousel-container {
            position: relative;
            // width: 300px;
            // height: 100px;
            overflow: hidden;
        }

        .carousel-wrapper {
            display: flex;
            transition: transform 0.5s ease-in-out;
            // border: 1px solid green;
        }

        .carousel-wrapper img {
            width: 100%;
            vertical-align: middle;
        }

        .carousel-text {
            min-width: 100%;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: black;
        }

        .buttons {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            border: 1px solid #3a60fb;
        }
        button {
            background-color: rgba(0, 0, 0, 0.5);
            color: black;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
        button:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
        .pagination {
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
            // border: 1px solid black;
        }

        .bullet {
            width: 10px;
            height: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            cursor: pointer;
        }

        .bullet.active {
            background-color: white;
        }
</style>