<template>
  <div class="questions-component">
    <div class="swiper-container">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="content">
              <h2>ما هي وسائل النقل المتاحة لعرض رحلتي ؟</h2>
              <p>بإمكانك عرض الرحلات المقامة عبر البر.</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>هل الخدمات المقدمة عبر التطبيق محصورة على دول معينة؟</h2>
                <p>حاليا الخدمات محصورة على المدن في المملكة. جاري العمل على إضافة الوجهات الدولية في المستقبل القريب.
                </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>ماذا لو فقد أو أتلف المسافر شحنتي ؟</h2>
              <p>إن كان المسافر مسؤول عن فقدان الشحنة، فإن تأمين المقدم من قبل على دربي يغطي الشحنة المفقودة.</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>هل بإمكاني إلغاء أو تعديل شحنتي؟</h2>
              <p>بامكانك الغاء الشحنة قبل انطلاق المسافر، حالما تم الانطلاق من قبل مسافر، لا يمكن تعديل أو إلغاء الشحنة.
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>كيف يتم الدفع للشحنة ؟</h2>
              <p>بكل بساطة بعد الانتهاء من تسليم الشحنة والتأ كد من سلامة الشحنة يتم الدفع نقدا للمسافر</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>ماهي تكلفة الشحن عبر التطبيق؟</h2>
              <p>تسعير الشحنة تتم من قبل المسافر.</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>كيف أضمن وصول شحنتي بشكل سليم؟</h2>
              <p>نحرص على تحفيز مسؤولية مسافر على دربى باستمرار, من أجل التأكد من سلامة الشحنات من التلف و تسليمها في
                الوقت المحدد.
                <br>
                يتم الدفع لمسافرون على دربي فقط عند إتمام عملية تسليم الشحنة بنجاح و في نفس الحالة التي تم استلامها
                فيها. يجب أن يكون المسافر على دراية تامة بأن تأكيد عملية في التطبيق يعني انهم مسؤولون تماما عن الشحنة
                التي بحوزتهم لحد التسليم إلى المستلم.
                <br>
                ايضا من المهم جدا أن المرسل يتواصل بوضوح مع المسافر عن كيفية التعامل مع الشحنة.</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>كمرسل(صاحب الشحنة)، كيف يمكنني التأكد بأن لا يتم استخدام الشحنة الخاصة بي بشكل خاطئ بحيث يضيف المسافر
                (ناقل الشحنة) محظورات على الشحنة وينسبها لي؟</h2>
              <p>من قِبَل المرسل (صاحب الشحنة) يقر المسافر بأنه استلم الشحنة وهي خالية من المحظورات وله الحق في معاينتها
                بشكل كامل، بعد ذلك تكون الشحنة في مسؤولية الناقل إلى أن يسلمها للمستلم.</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content">
              <h2>هل بإمكاني تتبع شحنتي؟</h2>
              <p>فور قبول المرسل لشحنتك، ستتمكن من تتبع شحنتك على خلال كافة المراحل من الاستلام الى التسليم.</p>
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
