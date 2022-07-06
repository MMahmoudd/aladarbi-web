<template>
  <div class="questions-component">
    <div class="swiper-container">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="content">
              <h2>كيف يحمينى تطبيق على دربى؟</h2>
                <p>يحمينى التطبيق عن طريق إلزامى كمسافر بأنى قد راجعت الشحنة بنفسي و أنها مطابقة للوصف و الصور الذى قبلت الطلب على أساسه و عند وجود أى إختلاف بين الوصف و الصور و الواقع بإمكانى إلغاء الشحنة دون جزاءات مع تعويض
                </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>هل بإمكانى وضع خط سير معين لى؟</h2>
                <p>نعم و يمكنك تلقى الشحنات عليه بشكل مباشر فقط و يمكنك قبول الشحنات أو رفضها حسب رغبتك
                </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>هل بإمكانى إضافة أكثر من سيارة؟</h2>
                <p>نعم يمكنك إضافة أكثر من سيارة على التطبيق مع تفعيل سيارة واحدة فقط لتلقى الطلبات الخاصة بالشحن
                </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>كمسافر(ناقل الشحنة)، كيف يمكنني ضمان أن الشحنة آمنة للنقل؟</h2>
              <p>يتم عرض تفاصيل و محتوى الشحنة بالاضافة الى إقرار المرسل (صاحب الشحنة) بأن المنتج سليم و خالي من جميع
                المحظورات، قبل موافقة المسافر (ناقل الشحنة) على نقلها.
                <br>
                بعد الموافقة على نقل الشحنة يحق للمسافر (ناقل الشحنة) فحص الشحنة.</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>ماذا لو لم يكن المستلم في موقع الاستلام في وقت الاستلام المتفق عليه؟ أين سيتم توصيل الشحنة؟</h2>
              <p>التواصل المباشر بين المرسل والمسافر هو أساس نجاح توصيل الشحنات.في حال عدم وجود المستلم في الموقع المتفق
                عليه، يتم التواصل ما بين المسافر والمرسل للاتفاق على موقع ووقت بديل.</p>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          autoplay: {
            delay: 4000,
          },          
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
        }
      }
    }
  }

</script>
<style>
  .questions-component .swiper-container {
    width: 100%;
    height: 100%;
    color: #212529 !important;
  }

  .questions-component .swiper-slide {
    text-align: center;
    height: 400px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    /* display: flex; */
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
.questions-component .swiper-slide .content{
  width: 80% !important;
}
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    color: #212529 !important;
  }

</style>
