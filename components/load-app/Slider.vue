<template>
    <div class="slider-component">
        <!-- Swiper -->
        <div class="swiper-container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              
                <div class="swiper-slide">
                  <div class="wrapper-style">
                    <img src="~/static/image/x-5.png" alt="screen-1" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrapper-style">
                    <img src="~/static/image/x-7.png" alt="screen-2" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrapper-style">
                    <img src="~/static/image/x-2.png" alt="screen-3" />
                  </div>
                </div>
    
    
            </div>
        </div>
        </div>
    
    
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
              spaceBetween: 30,
              effect: 'fade',
              loop: true,

              autoplay: {
                delay: 3000,
              },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
            }
        };
    }
}
</script>
<style>
  .slider-component img{
    width: 100%;
  }
  @media only screen and ( max-width: 768px ) {
    .slider-component img{
      width: 50%;
    left: 50%;
    transform: translate(-50%, 3%);
    }
  }
</style>
