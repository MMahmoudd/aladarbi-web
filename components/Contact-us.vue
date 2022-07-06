<template>
  <div class="contact-us-component">
    <div class="row">
      <div class="col-md">

        <div class="email d-flex cont">
          <span><i class="fas fa-at"></i> البريد الاليكتروني :-</span>
          <p>info@aladarbi.app</p>
        </div>
        
        <div class="address d-flex cont">
          <span><i class="fas fa-map-marker-alt"></i>  العنوان :-</span>
          <p>القصيم - بريدة - المملكة العربية السعودية</p>
        </div>

        <div class="bank d-flex cont">
          <span><i class="fas fa-money-check-alt"></i> رقم الحساب :-</span>
          <p><span>بنك الراجحي</span> - <span>565608010160007</span></p>
        </div>

      </div>
      <div class="col-md">

        <b-form @submit="onSubmit" @reset="onReset" >

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="الاسم"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label-for="input-1"  >
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="البريد الاليكتروني">
          </b-form-input>
        </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input id="input-3" v-model="form.phone" type="tel" required placeholder="رقم الهاتف">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label-for="input-4" >
        <b-form-textarea id="input-4" v-model="form.msg" required placeholder="الرسالة..." rows="3" max-rows="6">
        </b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">ارسال</b-button>


    </b-form>

      </div>
    </div>

  </div>
</template>


<script>
import axios from "axios";
  export default {
    data() {
      return {
        form: {
          emil: '',
          name: '',
          phone: '',
          msg: '',
          source: 0
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        var postData ={
            emil:this.form.email,
            name:this.form.name,
            phone:this.form.phone,
            msg:this.form.msg,
            source:this.source= 0
        }
        axios.post('http://dhamen.co:8080/contactus', postData)
        this.form.email = ''
        this.form.name = ''
        this.form.phone = ''
        this.form.msg = ''
      
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.phone = ''
        this.form.msg = ''
        this.source= '0'
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>
