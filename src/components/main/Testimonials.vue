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
import { onMounted } from 'vue';
onMounted(() => {
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
})
function onClickFeedback (idx) {
  if (idx && typeof idx === 'number') {
    const url = 
    window.open(`src/assets/img/feedback/feedback-${idx}.jpg`, "_blank");
  }
}

</script>

<style lang="scss" scoped>

</style>