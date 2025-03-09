<template>
<footer id="footer" class="footer dark-background">

<div class="container footer-top">
  <div class="row gy-4">
    <div class="col-lg-6 col-md-6 footer-about">
      <a href="index.html" class="logo d-flex align-items-center">
        <span class="sitename">혜봄세무회계</span>
      </a>
      <div class="footer-contact pt-3">
        <p>경기 성남시 분당구 돌마로68</p>
        <p>분당프라자 703-1호</p>
        <p class="mt-3"><strong>Phone:</strong> <span>031-716-9993</span></p>
        <!-- <p><strong>Email:</strong> <span>info@example.com</span></p> -->
      </div>
    </div>

    <div class="col-lg-6 col-md-6 footer-links">
      <div class="row gy-4" v-if="deviceType === 'pc'">
        <h4>Useful Links</h4>    
            <div class="col-lg-6 col-md-6">
                <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="index.html">홈</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="index.html#about">혜봄소개</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="index.html#service">주요업무</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="index.html#team">세무사소개</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="index.html#price">수수료안내</a></li>
                </ul>
            </div>
            <div class="col-lg-6 col-md-6">
                <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="index.html#testimonials">수임후기</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="index.html#blog">블로그</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="index.html#contact">오시는길</a></li>
                </ul>
            </div>
        </div>
        <div class="row gy-4" v-else>
            <h4>Useful Links</h4>    
            <div class="col-lg-12 col-md-12">
                <ul>
                  <li v-for="menu in menuList" :key="menu.url">
                    <i class="bi bi-chevron-right"></i>
                    <a :href="menu.url">{{ menu.name }}</a>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</div>

<div class="container copyright text-center mt-4">
  <p>© <span>Copyright</span> <strong class="px-1 sitename">혜봄세무회계</strong> <span>All Rights Reserved</span></p>
  <div class="credits">
  </div>
</div>

</footer>
</template>

<script setup>
    import { ref, computed, onMounted, onBeforeUnmount } from "vue";

    const windowWidth = ref(window.innerWidth)

    const deviceType = computed(() => (windowWidth.value <= 768 ? "mobile" : "pc"));

    const updateWidth = () => {
        windowWidth.value = window.innerWidth;
        console.log(deviceType.value);
    }

    const props = defineProps({
      menuList: {
        type: Array
      }
    })

    onMounted(() => {
      window.addEventListener("resize", updateWidth)
    });
    onBeforeUnmount(() => {
        window.removeEventListener("resize", updateWidth)
    })
</script>

<style lang="scss" scoped>

</style>