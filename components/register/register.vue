<template>
  <div class="wizard">
    <vue-good-wizard
      ref="wizard"
      :steps="steps"
      :onNext="nextClicked"
      :onBack="backClicked"
      nextStepLabel="التالي"
      finalStepLabel="حفظ"
      previousStepLabel="رجوع"
    >
      <!-------- Start slot=""page1 ---------->
      <div slot="page1" class="page page1">
        <h4>انشاء حساب جديد</h4>
        <div class="first-step">
          <b-alert :show="show" variant="warning">{{ errorData }}</b-alert>
          <b-form @submit.prevent="stepOne">
          <div class="row">
            <div class="col-md-6">

              <b-form-group
              id="input-group-1"
              label="الاسم"
              label-for="input-1"
            >
              <b-form-input
                v-model="$v.form.name.$model"
                type="text"
                required
                placeholder="ادخل الاسم"
                :state="validateState('name')"
              />
              <b-form-invalid-feedback id="input-1-live-feedback">يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
            </b-form-group>

            </div>

            <div class="col-md-6">

              <b-form-group
              id="input-group-2"
              label="رقم الهاتف"
              label-for="input-2"
              description="'+966XXXXXXXXX' ادخل رقم الهاتف ملحوقاً بمفتاح الدولة او المملكة مثال"
            >
              <vue-tel-input
              v-model="$v.form.tel.$model"
              type="tel"
              required 
              v-bind="bindProps" 
              :state="validateState('tel')"
              />
              <b-form-invalid-feedback id="input-2-live-feedback">يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
            </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group
              id="input-group-3"
              label="كلمة المرور"
              label-for="input-3"
            >
              <b-form-input
                v-model="$v.form.password.$model"
                type="password"
                required
                placeholder="ادخل كلمة المرور مكونة من 8 حروف او ارقام علي الاقل"
                :state="validateState('password')"
              />
              <b-form-invalid-feedback id="input-3-live-feedback">يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
            </b-form-group>
            </div>

            <div class="col-12">
              <b-form-group
              id="input-group-4"
              label="تأكيد كلمة المرور"
              label-for="input-4"
            >
              <b-form-input
                v-model="$v.form.confirmPassword.$model"
                type="password"
                required
                placeholder="اعد ادخال كلمة المرور للتأكيد"
                :state="validateState('confirmPassword')"
              />
              <b-form-invalid-feedback id="input-4-live-feedback">يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
            </b-form-group>
            </div>
          </div>

            <!--end row-->

            <div class="btns">
              <b-button
                class="btn btn-success next"
                :disabled="!validateState('confirmPassword') || !validateState('tel') || !validateState('name')"
                type="submit"
              >التالي</b-button>
            </div>
          </b-form>
        </div>
      </div>
      <!-------- End slot="page1" ------>
      <!-------- Start slot=""page2 ---------->
      <div slot="page2" class="page page2">
        <h4>ادخل كود التأكيد</h4>
        <div class="second-step">
          <b-alert :show="show" variant="warning">{{ errorData }}</b-alert>
          <b-form @submit.prevent="stepTwo">
            <b-form-group
              id="input-group-5"
              label="الكود"
              label-for="input-5"
              description="ادخل كود التأكيد"
            >
              <b-form-input
                id="input-5"
                v-model="$v.form.code.$model"
                required
                :state="validateState('code')"
              ></b-form-input>
              <b-form-invalid-feedback id="input-2-live-feedback">يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
            </b-form-group>
            <div class="btns">
              <b-button
                class="btn btn-success next"
                :disabled="!validateState('code')"
                type="submit"
              >التالي</b-button>
            </div>
          </b-form>
        </div>
      </div>
      <!------------- End slot="page2" ------------->
      <!-------- Start slot=""page3 ---------->
      <div slot="page3" class="page page3">
        <h4>اكمل البيانات</h4>
        <div class="third-step">
          <b-alert :show="show" variant="warning">{{ errorData }}</b-alert>
          <b-form @submit.prevent="stepThree">
            <div class="driver-data">
              <h4>بيانات السائق</h4>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-7" label="رقم الهوية" label-for="input-7">
                    <b-form-input
                      id="input-7"
                      v-model="$v.form.identityNumber.$model"
                      required
                      :state="validateState('identityNumber')"
                      placeholder="ادخل رقم الهوية"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-2-live-feedback">يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
                  </b-form-group>
                </div>
                <div class="col-md-6">

                  <b-form-group id="input-group-6" label="اسم البنك" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="$v.form.bankName.$model"
                required
                :state="validateState('bankName')"
                placeholder="ادخل اسم البنك"
              ></b-form-input>
              <b-form-invalid-feedback id="input-2-live-feedback">يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
            </b-form-group>

                </div>
                <div class="col-md-6">

                  <b-form-group id="input-group-8" label="رقم الحساب البنكي" label-for="input-8">
              <b-form-input
                id="input-8"
                v-model="$v.form.bankNumber.$model"
                required
                :state="validateState('bankNumber')"
                placeholder="ادخل رقم الحساب البنكي"
              ></b-form-input>
              <b-form-invalid-feedback id="input-2-live-feedback">يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
            </b-form-group>

                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-9" label="صورة رخصة القيادة" label-for="input-9">
              <b-form-file
              v-model="$v.form.driverLicense.$model"
                placeholder="اختر صورة الرخصة"
                class="files"
                :state="validateState('driverLicense')"
                @change="onDriverLicSelected"
              ></b-form-file>
            </b-form-group>
                </div>
                <div class="col-md">
                  <div class="date">
                    <div class="row">
                      <div class="col-md-6">

                        <label>تاريخ الميلاد</label>
              <b-input-group>
                <b-form-datepicker
                  id="datepicker-dateformat1"
                  v-model="$v.form.dateOfBirth.$model"
                  :value-as-date = format
                  :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
                  locale="en-GB-u-ca-iso8601"
                  :state="validateState('dateOfBirth')"
                ></b-form-datepicker>
                <b-form-invalid-feedback
                  id="input-2-live-feedback"
                >يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
              </b-input-group>

                      </div>
                      <div class="col-md-6">

                        <label>تاريخ انتهاء الرخصة</label>
              <b-input-group>
                <b-form-datepicker
                  id="datepicker-dateformat2"
                  v-model="$v.form.licenseExpDate.$model"
                  :value-as-date = format
                  :date-format-options="{  day: '2-digit', month: '2-digit', year: 'numeric'}"
                  locale="en-GB-u-ca-iso8601"
                  :state="validateState('licenseExpDate')"
                ></b-form-datepicker>
                <b-form-invalid-feedback
                  id="input-2-live-feedback"
                >يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
              </b-input-group>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end row-->

            </div>
            <div class="car-data">
              <h5>بيانات السيارة</h5>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-7" label="اسم السيارة" label-for="input-7">
                <b-form-select
                  v-model="$v.form.carBrand.$model"
                  :options="carBrands"
                  class="mb-3"
                  required
                  :state="validateState('carBrand')"
                  placeholder="اختراسم السيارة"
                  value-field="id"
                  text-field="name"
                  @change="getCarModels"
                  ></b-form-select>
                <b-form-invalid-feedback
                  id="input-2-live-feedback"
                >يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
              </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-6" label="موديل السيارة" label-for="input-6">
                <b-form-select
                  v-model="$v.form.carModel.$model"
                  :options="carModels"
                  class="mb-3"
                  required
                  :state="validateState('carModel')"
                  value-field="id"
                  text-field="name"
                  ></b-form-select>
                <b-form-invalid-feedback
                  id="input-2-live-feedback"
                >يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
              </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-8" label="نوع السيارة" label-for="input-8">
                <b-form-select
                  v-model="$v.form.carCategory.$model"
                  :options="carCategories"
                  class="mb-3"
                  required
                  :state="validateState('carCategory')"
                  value-field="id"
                  text-field="name"
                  ></b-form-select>
                <b-form-invalid-feedback
                  id="input-2-live-feedback"
                >يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-8" label="سنة التصنيع" label-for="input-8">
                <b-form-input
                  id="input-8"
                  v-model="$v.form.carManufacturingYear.$model"
                  required
                  :state="validateState('carManufacturingYear')"
                  placeholder="ادخل سنة تصنيع السيارة"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-2-live-feedback"
                >يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
              </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-8" label="ارقام لوحة السيارة" label-for="input-8">
                <b-form-input
                  id="input-8"
                  v-model="$v.form.CarPlateNumbers.$model"
                  required
                  type="text"
                  :state="validateState('CarPlateNumbers')"
                  placeholder="ادخل ارقام لوحة السيارة"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-2-live-feedback"
                >يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
              </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-8" label="حروف لوحة السيارة" label-for="input-8">
                <b-form-input
                  id="input-8"
                  v-model="$v.form.CarPlateCharacters.$model"
                  required
                  :state="validateState('CarPlateCharacters')"
                  placeholder="ادخل حروف لوحة السيارة"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-2-live-feedback"
                >يجب ملئ حقل البيانات ببيانات صحيحة</b-form-invalid-feedback>
              </b-form-group>
                </div>
                <div class="col-md">
                  <b-form-group id="input-group-9" label="صورة رخصة السيارة" label-for="input-9">
                <b-form-file
                  v-model="$v.form.carLicense.$model"
                  placeholder="اختر صورة رخصة السيارة"
                  class="files"
                  required
                  :state="validateState('carLicense')"
                  @change="onCarLicSelected"
                ></b-form-file>
              </b-form-group>
                </div>
              </div>
              <!--End Row-->
            </div>
            <div class="btns">
              <b-button
                class="btn btn-success next"
                :disabled="!validateState('bankName') || !validateState('identityNumber') || !validateState('dateOfBirth') || !validateState('licenseExpDate') || !validateState('driverLicense') || !validateState('carBrand') || !validateState('carModel') || !validateState('carCategory') ||
                !validateState('carManufacturingYear') || !validateState('CarPlateNumbers') || !validateState('CarPlateCharacters') || !validateState('carLicense')"
                type="submit"
                @click="nextClicked()"
              >حفظ</b-button>
            </div>
          </b-form>
        </div>
      </div>
      <!-- End slot="page3" -->
    </vue-good-wizard>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  numeric,
  sameAs,
  alpha,
} from "vuelidate/lib/validators";
import axios from 'axios'

export default {
  name: "register",
  mixins: [validationMixin],
  data() {
    return {
      carBrands: [],
      carModels: [],
      carCategories: [],
      format: true,
      token: '',
      form: {
        driverId: "",
        name: "",
        tel: null,
        password: "",
        confirmPassword: "",
        code: null,
        bankName: "",
        identityNumber: "",
        dateOfBirth: Date(),
        licenseExpDate: Date(),
        driverLicense: null,
        carBrand: "",
        carModel: "",
        carCategory: "",
        carManufacturingYear: "",
        CarPlateNumbers: "",
        CarPlateCharacters: "",
        carLicense: null
      },
      disabled: true,
      show: false,
      errorData: "",
      steps: [
        {
          label: "انشاء حساب جديد",
          slot: "page1",
        },
        {
          label: "ادخل كود التأكيد",
          slot: "page2",
        },
        {
          label: "اكمل بياناتك",
          slot: "page3",
        },
      ],
      bindProps: {
        mode: "international",
        disabledFetchingCountry: false,
        disabledFormatting: false,
        defaultCountry: "SA",
        placeholder: "أدخل رقم الهاتف",
        required: true,
        enabledCountryCode: false,
        type: "tel",
        formattedNumber: true,
        autocomplete: "on",
        // autofocus: true,
        name: "telephone",
        validCharactersOnly: true,
        dropdownOptions: {
          disabledDialCode: true,
        },
        inputOptions: {
          showDialCode: true,
        },
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(50),
      },
      password: {
        required,
        minLength: minLength(8),
      },
      confirmPassword: {
        sameAsPassword: sameAs("password"),
      },
      tel: {
        required,
        minLength: minLength(12),
      },
      code: {
        required,
        maxLength: maxLength(4),
        minLength: minLength(4),
        numeric: numeric,
      },
      bankName: {
        required,
      },
      identityNumber: {
        required,
        maxLength: maxLength(10),
        numeric: numeric,
      },
      bankNumber: {
        required,
        numeric: numeric,
      },
      carManufacturingYear: {
        required,
        maxLength: maxLength(4),
      },
      dateOfBirth: {
        required
      },
      licenseExpDate: {
        required
      },
      driverLicense: {
        required
      },
      carBrand: {
        required
      },
      carModel: {
        required
      },
      carCategory: {
        required
      },
      CarPlateNumbers: {
        required,
        maxLength: maxLength(4),
        minLength: minLength(3),
        numeric: numeric,
      },
      CarPlateCharacters: {
        required,
        maxLength: maxLength(3),
        minLength: minLength(3),
        alpha
      },
      carLicense: {
        required
      }
    },
  },
  created () {
      this.getCarBrands()
      this.getCarCategories()
    },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onDriverLicSelected (event) {
        this.form.driverLicense = event.target.files[0]
      },
      onCarLicSelected (event) {
        this.form.carLicense = event.target.files[0]
      },
    async getCarBrands() {
      const {data} = await axios.get('https://www.aladarbi.app/api/v2/cars/brands')
      this.carBrands = data.data
    },
    async getCarModels(item) {
      const resource = 'https://www.aladarbi.app/api/v2/cars/brands'
      const {data} = await axios.get(`${resource}/${item}/models`)
      this.carModels = data.data
    },
    async getCarCategories() {
      const {data} = await axios.get('https://www.aladarbi.app/api/v2/cars/brands/categories')
      this.carCategories = data.data
    },
    async stepOne() {
      const tel = this.form.tel.split(" ").join("")
            // make ajax request and pass the data. I'm not certain how to do it with axios but something along the lines of this
           const {data} = await axios.post('https://www.aladarbi.app/api/v2/auth/register', {
                userName: this.form.name,
                mobile: tel,
                password: this.form.password,
                userType: 1
            });
            if (data.done === false) {
              this.show = true
              this.errorData = data.error[0]
              return false
            } else {
              this.show = false
              this.form.driverId = data.data.userId
              this.nextClicked()
            }
        },
        async stepTwo() {
            // make ajax request and pass the data. I'm not certain how to do it with axios but something along the lines of this
           const {data} = await axios.post('https://www.aladarbi.app/api/v2/auth/complete-register', {
                userId: this.form.driverId,
                code: this.form.code,
                device: "PC"
            });
            if (data.done === false) {
              this.show = true
              this.errorData = data.error[0]
              return false
            } else {
              this.show = false
              this.token = data.data.token
              this.nextClicked()
            }
        },
        async stepThree() {
            // make ajax request and pass the data. I'm not certain how to do it with axios but something along the lines of this
            const formData = new FormData()
            formData.append('licenseExpDate', Intl.DateTimeFormat('en-GB').format(this.form.licenseExpDate))
            formData.append('identitiyNumber', this.form.identityNumber)
            formData.append('dateOfBirth', Intl.DateTimeFormat('en-GB').format(this.form.dateOfBirth))
            formData.append('bankName', this.form.bankName)
            formData.append('bankAccountNumber', this.form.bankAccountNumber)
            formData.append('carBrand', this.form.carBrand)
            formData.append('carModel', this.form.carModel)
            formData.append('carCategory', this.form.carCategory)
            formData.append('carManufacturingYear', this.form.carManufacturingYear)
            formData.append('CarPlateNumbers', this.form.CarPlateNumbers)
            formData.append('CarPlateCharacters', this.form.CarPlateCharacters)
            formData.append('car-license', this.form.carLicense, this.form.carLicense.name)
            formData.append('driver-license', this.form.driverLicense, this.form.driverLicense.name)
            const driverResourse = "https://www.aladarbi.app/api/v2/drivers/create-account"
            const token = this.token
           const {data} = await axios.post(`${driverResourse}`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            }
            });
            if (data.done === false) {
              this.show = true
              this.errorData = data.error[0]
              return false
            } else {
              this.show = false
              this.nextClicked()
              this.$router.push('/captin');
            }
        },
    nextClicked(currentPage, currentStep) {
      const _this = this;
      _this.$refs.wizard.goNext(true);
    },
    backClicked(currentPage) {
      return true; //return false if you want to prevent moving to previous page
    },
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
    },
  },
};
</script>
<style>
.wizard {
  direction: ltr;
}
.wizard form{
  direction: rtl !important;
}
.wizard form .vue-tel-input{
  direction: ltr !important;
}
/* .page1{
  max-height: 250px;
} */
.wizard__body[data-v-c21d83ca] {
  /* width: 50% !important; */
  height: 100% !important;
  min-height: unset;
  position: relative;
  /* margin: auto; */
}
.date input {
  margin-bottom: 20px !important;
  direction: rtl;
}
.car-data,
.driver-data{
  border: 1px solid #212529;
  border-radius: 7px;
  padding: 15px;
  margin-bottom: 15px;
}
.files {
  direction: rtl;
  text-align: left;
}
.page {
  width: 50% !important;
  margin: auto;
}
.page3 {
  width: 70% !important;
  margin: auto;
}
.page form {
  width: 90% !important;
  margin: auto;
}
@media (max-width: 767px) {
  .page {
    width: 100% !important;
  }
}
form .btns .next {
  position: absolute;
  background-color: #f26725;
  border: none;
  bottom: 0px;
  right: 0;
  width: 120px;
  height: 50px;
  z-index: 100;
}
.pull-right {
  display: none !important;
}
.wizard__body__actions a[data-v-c21d83ca],
.wizard__body__actions a[data-v-c21d83ca]:hover,
.wizard__step.active .wizard__step__indicator[data-v-c21d83ca],
.wizard__step.active:not(:first-child) .wizard__step__line[data-v-c21d83ca] {
  background-color: #f26725;
}
</style>