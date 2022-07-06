<template>
  <div role="tablist">
    <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="light">كيف يحمينى تطبيق على دربى؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>

          <b-card-text>{{ answer1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="light">هل بإمكانى وضع خط سير معين لى؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-4">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="light">كمسافر(ناقل الشحنة)، كيف يمكنني ضمان أن الشحنة آمنة للنقل؟</b-button>
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
        <b-button block href="#" v-b-toggle.accordion-5 variant="light">هل بإمكانى إضافة أكثر من سيارة؟</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer5 }}</b-card-text>
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
            يحمينى التطبيق عن طريق إلزامى كمسافر بأنى قد راجعت الشحنة بنفسي و أنها مطابقة للوصف و الصور الذى قبلت الطلب على أساسه و عند وجود أى إختلاف بين الوصف و الصور و الواقع بإمكانى إلغاء الشحنة دون جزاءات مع تعويض
        `,
        answer2: `
            نعم و يمكنك تلقى الشحنات عليه بشكل مباشر فقط و يمكنك قبول الشحنات أو رفضها حسب رغبتك
        `,
        answer3: `يتم عرض تفاصيل و محتوى الشحنة بالاضافة الى إقرار المرسل (صاحب الشحنة) بأن المنتج سليم و خالي من جميع المحظورات، قبل موافقة المسافر (ناقل الشحنة) على نقلها.

                  بعد الموافقة على نقل الشحنة يحق للمسافر (ناقل الشحنة) فحص الشحنة.`
                  ,
        answer4: `التواصل المباشر بين المرسل والمسافر هو أساس نجاح توصيل الشحنات.في حال عدم وجود المستلم في الموقع المتفق عليه، يتم التواصل ما بين المسافر والمرسل للاتفاق على موقع ووقت بديل.`,

        answer5: `نعم يمكنك إضافة أكثر من سيارة على التطبيق مع تفعيل سيارة واحدة فقط لتلقى الطلبات الخاصة بالشحن`,

      }
    }
  }

</script>
