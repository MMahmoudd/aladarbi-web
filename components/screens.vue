<template>
    <div class="screens-component">
            <div class="swiper-container">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/screen-1.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/screen-2.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/screen-3.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/x-1.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/x-2.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/x-3.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/x-4.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/x-5.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/x-6.png" alt="image1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <img src="../static/image/x-7.png" alt="image1">
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
  @media only screen and ( max-width: 768px ) {
    .screens-component img{
    width: 60% !important;
    left: 50%;
    -webkit-transform: translate(-35%, 3%);
    transform: translate(-35%, 3%);
    }
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