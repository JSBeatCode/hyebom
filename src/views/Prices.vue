<template>
<main class="main">

<!-- Page Title -->
<div class="page-title dark-background" data-aos="fade" style="background-image: url(@/assets/img/page-title-bg.webp);">
  <div class="container position-relative">
    <h1>수수료 안내</h1>
    <p>"투명하고 합리적인 수수료로 최적의 세무·회계 서비스를 제공합니다."</p>
    <!-- <nav class="breadcrumbs">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li class="current">Price Details</li>
      </ol>
    </nav> -->
  </div>
</div><!-- End Page Title -->

<!-- Price Details Section -->
<section id="price-details" class="price-details section">

  <div class="container">

    <div class="row gy-4">

      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <!-- <h4>투명하고 합리적인 수수료</h4> -->
        <!-- <p>혜봄세무회계는 투명하고 합리적인 수수료로 최적의 세무·회계 서비스를 제공합니다. 상세한 요금은 상담 후 안내해 드립니다.</p> -->
        <div class="price-list">
          <span id="price-button-1" onclick="showPrice(1)" class="active">사업자 세무회계</span>
          <span id="price-button-2" onclick="showPrice(2)">재산제세</span>
        </div>
        
      </div>

      <div id="price-1" class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
        <img src="@/assets/img/services-1.jpg" alt="" class="img-fluid services-img" style="height: 50%">
        <h3>사업자 세무회계</h3>
        <!-- <p>
          사업자 세무회계 서비스는 세무 신고, 재무 분석, 세금 절감 방안 등 사업 운영에 필수적인 세무 관리 전반을 지원합니다. 혜봄세무회계는 사업자 맞춤형 솔루션을 제공하여, 복잡한 세무 업무를 간편하게 처리하고, 세무 리스크를 최소화하며, 안정적인 사업 성장을 돕습니다.
        </p> -->
        <ul>
          <li><i class="bi bi-check-circle"></i> <span>월 기장 상담 (매월 세무관리)</span></li>
          <li><i class="bi bi-check-circle"></i> <span>기존 사업자를 위한 세금 상담.</span></li>
          <li><i class="bi bi-check-circle"></i> <span>창업자를 위한 전문 세무 상담</span></li>
        </ul>
        <p>
          월 기장 상담시, 상황에 맞는 세무 planning을 제공하므로 최초 상담료는 발생합니다. 
        </p>
        <p>
          ※ 단순 견적문의는 견적서를 요청해주세요!
        </p>
        <!-- <p>
          사업을 운영하다보면 사업 세무회계에 대해 궁금한게 많습니다. 당연히 세무 서비스는 매월 꾸준히 관리하는 것이 좋겠지만, 윌 기장은 부담스럽고, 인터넷 검색도 힘듭니다. 이제 전문가인 혜봄세무회계에 맡기십시오.
        </p>
        <p>
          처음 사업자등록증 표기에 따라 세금이 달라진다는 걸 알고 있으세요? 창업을 준비하신다면, 꼭 필요한 세무 상담!
        </p> -->
      </div>

      <div id="price-2" class="col-lg-8 hiddenDisplay" data-aos="fade-up" data-aos-delay="200">
        <img src="@/assets/img/services-2.jpg" alt="" class="img-fluid services-img" style="height: 50%">
        <h3>재산제세</h3>
        <!-- <p>
          2 Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
        </p> -->
        <ul>
          <li><i class="bi bi-check-circle"></i> <span>재산관련 세금 상담.</span></li>
          <!-- <li><i class="bi bi-check-circle"></i> <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span></li> -->
          <!-- <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li> -->
        </ul>
        <p>
          상속세, 증여세, 양도소득세, 종합부동산세 등등의 재산 상담을 원하시나요? 2인의 재산 전문 세무사가 고객이 원하는 방향으로 센스있게 상담합니다.
        </p>
        <p>
          [고객 상황에 맞는 절세방향 + 리스크 안내 + 실무처리방법] 안내는 기본!
        </p>
        <p>
          ※ 상담 이후 신고대리를 수임하실 경우 상담료는 차감됩니다.
        </p>
      </div>

    </div>

  </div>

</section>
<!-- /Price Details Section -->

</main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>