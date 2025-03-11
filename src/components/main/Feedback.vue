<template>
    <section id="feedback" class="testimonials section dark-background">

    <img src="@/assets/img/testimonials-bg.jpg" class="testimonials-bg" alt="">

    <div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="swiper init-swiper">
        <div class="swiper-wrapper">

        <div class="swiper-slide">
            <div class="testimonial-item">
            <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
            <h3>이영철</h3>
            <h4>Chairman &amp; Founder</h4>
            <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span> 세무 문제로 고민하던 중, 전문가들이 빠르고 정확하게 해결책을 제시해 주셔서 정말 큰 도움이 되었습니다.</span>
                <i class="bi bi-quote quote-icon-right"></i>
            </p>
            </div>
        </div><!-- End testimonial item -->

        <div class="swiper-slide">
            <div class="testimonial-item">
            <img src="@/assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
            <h3>박영숙</h3>
            <h4>Ceo</h4>
            <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>사업에 맞춘 세무 전략을 세워 주셔서 세금 절감 효과를 봤고, 복잡한 세무 신고도 신속하게 처리해 주셨습니다.</span>
                <i class="bi bi-quote quote-icon-right"></i>
            </p>
            </div>
        </div><!-- End testimonial item -->

        <div class="swiper-slide">
            <div class="testimonial-item">
            <img src="@/assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
            <h3>최상철</h3>
            <h4>Freelancer</h4>
            <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>세무조사 대비까지 철저히 도와주셔서 안심하고 사업에만 집중할 수 있었습니다.</span>
                <i class="bi bi-quote quote-icon-right"></i>
            </p>
            </div>
        </div><!-- End testimonial item -->

        <div class="swiper-slide">
            <div class="testimonial-item">
            <img src="@/assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
            <h3>김영호</h3>
            <h4>Entrepreneur</h4>
            <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>친절하고 전문적인 서비스 덕분에 정말 만족하고 있으며, 앞으로도 계속 함께 할 예정입니다.</span>
                <i class="bi bi-quote quote-icon-right"></i>
            </p>
            </div>
        </div><!-- End testimonial item -->

        </div>
        <div class="pagination">
        <div class="bullet active" data-index="0" @click="onClickBullet(0)"></div>
        <div class="bullet" data-index="1" @click="onClickBullet(1)"></div>
        <div class="bullet" data-index="2" @click="onClickBullet(2)"></div>
        <div class="bullet" data-index="3" @click="onClickBullet(3)"></div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
    </div>

    </div>


    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const state = ref({
    wrapper: null,
    slides: null,
    bullets: null,
    pageIndex: 0
})

onMounted(() => {
    state.value.wrapper = document.querySelector('.swiper-wrapper')
    state.value.slides = document.querySelectorAll('.swiper-slide')
    state.value.bullets = document.querySelectorAll('.bullet')

    startMoveCarousel();
})

  /**** carousel start ****/
  function startMoveCarousel() {
    state.value.intervalVal = setInterval(() => {
      moveCarousel();  
    }, 5000)
  }  
 
  function onClickBullet (idx) {
    clearInterval(state.value.intervalVal);
    state.value.pageIndex = parseInt(idx)
    updateCarousel()
    startMoveCarousel();

  }


  function moveCarousel () {
    state.value.pageIndex = (state.value.pageIndex === state.value.slides.length - 1) ? 0 : state.value.pageIndex + 1;
    state.value.wrapper.style.transform = `translateX(-${state.value.pageIndex * 100}%)`;
    updatePagination();
  }

  function updateCarousel () {
    state.value.wrapper.style.transform = `translateX(-${state.value.pageIndex * 100}%)`;
    updatePagination();
  }

  function updatePagination () {
    state.value.bullets.forEach(bullet => bullet.classList.remove('active'))
    state.value.bullets[state.value.pageIndex].classList.add('active')
  }

  /**** carousel end ****/
</script>

<style lang="scss" scoped>

</style>