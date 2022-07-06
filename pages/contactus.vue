<template>
  <div class="wrape">
    <div class="contactus-wrape">
      <div class="container">
      <ContactUs />
    </div>
    </div>
  </div>
</template>

<script>
import ContactUs from '~/components/Contact-us';
export default {
  components: {
    ContactUs,
  }
    
  }

</script>
<style>
.contactus-wrape{
  background-color: #f26522;
  padding: 60px 0;
}
</style>