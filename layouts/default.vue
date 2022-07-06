<template>
  <div>
    <!-- Start Main Header -->
    <main-header />
    <div class="pages">
      <nuxt />
    </div>

    <!-- Start Footer -->
    <main-footer />
  </div>
</template>

<script>
import MainHeader from './../components/layout/mainHeader'
import MainFooter from './../components/layout/mainFooter'
export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>
<style>
  .pages{
      margin-bottom: 280px;
      position: relative;
      z-index: 99;
      background-color: #F5F5F7;
      overflow-x: hidden;
  }
@media only screen and (max-width: 991.98px) {
  .pages{
    margin-bottom: 0px;
    }
}
</style>
