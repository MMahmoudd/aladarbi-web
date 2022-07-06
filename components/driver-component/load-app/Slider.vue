<template>
    <div class="slider-component">
        <!-- Swiper -->
        <div class="swiper-container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              
                <div class="swiper-slide">
                  <div class="wrapper-style">
                    <img src="~/static/image/captin/Group-13.png" alt="screen-1" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrapper-style">
                    <img src="~/static/image/captin/Group-1.png" alt="screen-2" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrapper-style">
                    <img src="~/static/image/captin/Group-10.png" alt="screen-3" />
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
</style>
