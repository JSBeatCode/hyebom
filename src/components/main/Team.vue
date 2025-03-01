<template>
    <!-- Team Section -->
    <section id="team" class="team section light-background">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>전문세무사 소개</p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-5">

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div class="member">
        <div class="pic"><img src="@/assets/img/team/team-1.jpg" class="img-fluid" alt=""></div>
        <div class="member-info">
          <h4>김혜지</h4>
          <span>CEO</span>

          <div class="social">

            <button class="btn" @click="onClickShowModal(1)"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" class="bi bi-suitcase-lg" viewBox="0 0 16 16">
                <path
                  d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z" />
              </svg>
              주요경력보기
            </button>
          </div>
        </div>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div class="member">
        <div class="pic"><img src="@/assets/img/team/team-3.jpg" class="img-fluid" alt=""></div>
        <div class="member-info">
          <h4>다니엘</h4>
          <span>CFO</span>
          <div class="social">
            <button class="btn" @click="onClickShowModal(2)"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" class="bi bi-suitcase-lg" viewBox="0 0 16 16">
                <path
                  d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z" />
              </svg>
              주요경력보기
            </button>
          </div>
        </div>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div class="member">
        <div class="pic"><img src="@/assets/img/team/team-2.jpg" class="img-fluid" alt=""></div>
        <div class="member-info">
          <h4>모아나</h4>
          <span>Senior Tax Accountant</span>
          <div class="social">


            <button class="btn" onclick="onClickShowModal(3)"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" class="bi bi-suitcase-lg" viewBox="0 0 16 16">
                <path
                  d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z" />
              </svg>
              주요경력보기
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Team Member -->

  </div>

</div>

</section><!-- /Team Section -->

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>