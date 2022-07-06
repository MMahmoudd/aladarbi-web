<template>
    <div class="screens-component">
            <div class="swiper-container">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-2.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-3.png" alt="image2">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-4.png" alt="image3">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-5.png" alt="image4">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-6.png" alt="image5">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-7.png" alt="image6">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-8.png" alt="image7">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-9.png" alt="image8">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-11.png" alt="image9">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../../static/image/captin/Group-12.png" alt="image10">
            </div>
          </div>
        </div>
       
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
    </div>
</template>

<style>
.screens-component img{
    width: 100%;
}
.swiper-button-prev:hover,
.swiper-button-next:hover{
  color: #f26725 !important;
}
</style>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 15,
          autoplay: {
            delay: 5000,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          // Responsive breakpoints
          breakpoints: {
              // when window width is <= 480px
              768: {
                  slidesPerView: 1,
                  spaceBetween: 20
              },
              // when window width is <= 640px
              992: {
                  slidesPerView: 2,
                  spaceBetween: 30
              }
          }
        }
      }
    }
  }

</script>