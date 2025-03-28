<template>
      <!-- Contact Section -->
      <section id="contact" class="contact section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>오시는길</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4">
            <div id="map" style="width:100%;height:400px;"></div>
          </div>
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="row gy-4">

                <div class="col-lg-12">
                  <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
                    data-aos-delay="200">
                    <i class="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>경기 성남시 분당구 돌마로68, 분당프라자 703-1호</p>
                    <div class="info-item-extra">
                      <p><span class="bi bi-info-circle">&nbsp;</span>분당프라자(리지안안과 건물) 7층에 위치</p>
                      <p><span class="bi bi-info-circle">&nbsp;</span>주차정보 건물 내부 1층~B2층 주차장이용 (주차장 입구는 건물 뒤에 위치, 내방객에 한해 주차 무료)</p>
                    </div>
                  </div>
                </div><!-- End Info Item -->

                <div class="col-md-6">
                  <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
                    data-aos-delay="300">
                    <i class="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>031-716-9993</p>
                  </div>
                </div><!-- End Info Item -->

                <div class="col-md-6">
                  <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
                    data-aos-delay="400">
                    <i class="bi bi-clock"></i>
                    <h3>Operation Time</h3>
                    <p>평일 10:00 ~ 18:00</p>
                  </div>
                </div><!-- End Info Item -->

              </div>
            </div>

            <div class="col-lg-6">
              <form action="" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="500">
                <div class="row gy-4">

                  <div class="col-md-6">
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required="">
                  </div>

                  <div class="col-md-6 ">
                    <input type="email" class="form-control" name="email" placeholder="Your Email" required="">
                  </div>

                  <div class="col-md-12">
                    <input type="text" class="form-control" name="subject" placeholder="Subject" required="">
                  </div>

                  <div class="col-md-12">
                    <textarea class="form-control" name="message" rows="4" placeholder="Message" required=""></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit">Send Message</button>
                  </div>

                </div>
              </form>
            </div>
            <!-- End Contact Form -->

          </div>

        </div>

      </section><!-- /Contact Section -->
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  const latLang = new naver.maps.LatLng(37.3496426,127.1095151);
    var mapOptions = {
      center: latLang,
      zoom: 16
  };

  var map = new naver.maps.Map('map', mapOptions);

  new naver.maps.Marker({
    position: map.getCenter(),
    map: map
});
})

</script>

<style lang="scss" scoped>

</style>