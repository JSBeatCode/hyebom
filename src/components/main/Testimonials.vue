<template>
<section id="testimonials" class="portfolio section light-background">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>수임후기</p>
        </div><!-- End Section Title -->

        <div class="container">

          <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

            <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

              <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-app">
                <div class="portfolio-content h-100 w-100">
                  <img src="@/assets/img/feedback/feedback-1.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <span 
                      @click="onClickFeedback(1)" 
                      title="Branding 3"
                      data-gallery="portfolio-gallery-book" 
                      class="preview-link"
                      style="cursor: pointer;"
                      >
                      <i class="bi bi-zoom-in"></i>
                    </span>
                  </div>
                </div><!-- End Portfolio Item -->

                <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-app">
                  <div class="portfolio-content h-100 w-100">
                    <img src="@/assets/img/feedback/feedback-2.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <span 
                        @click="onClickFeedback(2)" 
                        title="Branding 3"
                        data-gallery="portfolio-gallery-book" 
                        class="preview-link"
                        style="cursor: pointer;"
                        >
                        <i class="bi bi-zoom-in"></i>
                      </span>
                    </div>
                  </div>
                </div><!-- End Portfolio Item -->
                <div class="col-lg-6 col-md-6 portfolio-item isotope-item filter-app">
                  <div class="portfolio-content h-100 w-100">
                    <img src="@/assets/img/feedback/feedback-4.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <span 
                        @click="onClickFeedback(4)" 
                        title="Branding 3"
                        data-gallery="portfolio-gallery-book" 
                        class="preview-link"
                        style="cursor: pointer;"
                        >
                        <i class="bi bi-zoom-in"></i>
                      </span>
                    </div>
                  </div>
                </div><!-- End Portfolio Item -->
              </div><!-- End Portfolio Container -->
            </div>
          </div>
          </div>
      </section>
      <!-- Testimonials Section -->
</template>

<script setup>

function onClickFeedback (idx) {
  if (idx && typeof idx === 'number') {
    const url = 
    window.open(`src/assets/img/feedback/feedback-${idx}.jpg`, "_blank");
  }
}

</script>

<style lang="scss" scoped>

</style>