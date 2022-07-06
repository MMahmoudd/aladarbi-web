<template>
  <div role="tablist">
    <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="light">ما هي وسائل النقل المتاحة لعرض رحلتي ؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>

          <b-card-text>{{ answer1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="light">هل الخدمات المقدمة عبر التطبيق محصورة على دول معينة؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="light">ماذا لو فقد أو أتلف المسافر شحنتي ؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-4 variant="light">ماذا لو لم يكن المستلم في موقع الاستلام في وقت الاستلام المتفق عليه؟ أين سيتم توصيل الشحنة؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer4 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-5 variant="light">هل بإمكاني إلغاء أو تعديل شحنتي؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer5 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-6 variant="light">كيف يتم الدفع للشحنة ؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer6 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        answer1: `
            بإمكانك عرض الرحلات المقامة عبر البر.
        `,
        answer2: `
            حاليا الخدمات محصورة على المدن في المملكة. جاري العمل على إضافة الوجهات الدولية في المستقبل القريب.
        `,
        answer3: `إن كان المسافر مسؤول عن فقدان الشحنة، فإن تأمين المقدم من قبل على دربي يغطي الشحنة المفقودة.`
                  ,
        answer4: `التواصل المباشر بين المرسل والمسافر هو أساس نجاح توصيل الشحنات.في حال عدم وجود المستلم في الموقع المتفق عليه، يتم التواصل ما بين المسافر والمرسل للاتفاق على موقع ووقت بديل.`,

        answer5: `بامكانك الغاء الشحنة قبل انطلاق المسافر، حالما تم الانطلاق من قبل مسافر، لا يمكن تعديل أو إلغاء الشحنة.`,

        answer6: `بكل بساطة بعد الانتهاء من تسليم الشحنة والتأ كد من سلامة الشحنة يتم الدفع نقدا للمسافر`

      }
    }
  }

</script>
