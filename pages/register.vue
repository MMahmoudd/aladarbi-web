<template>
    <section class="register-section padding" id="register">
        <div class="row">
          <div class="col-12">
            <registerCaptin />
          </div>
        </div>
    </section>
</template>

<script>
import registerCaptin from '../components/register/register';

export default {
  name: 'Register',

  components: {
    registerCaptin
  }
}
</script>

<style>


  .padding{
    padding: 69px 0;
  }
  @media only screen and (max-width: 991.98px){
    .register-section{
      padding: 30px 0;
    }
  }

  
</style>
