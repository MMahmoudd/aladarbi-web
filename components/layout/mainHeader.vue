<template>
  <div class="main-header">
    <div class="container">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
          <nuxt-link to="/">
              <img src="../../static/favicon.png" alt="logo">
          </nuxt-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
          <i class="fas fa-minus"></i>
          <i class="fas fa-minus"></i>
          <i class="fas fa-minus"></i>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item>
                <div v-if="this.$route.path == '/' || this.$route.path == '/captin'">
                <p class="m-0" v-scroll-to="'#header'">الرئيسية</p>
                </div>
                <div v-else>
                  <router-link class="p-0" to="/#header">الرئيسية</router-link>
                </div>
            </b-nav-item>

            <b-nav-item>
                <div v-if="this.$route.path === '/' || this.$route.path == '/captin'">
                <p class="m-0" v-scroll-to="'#loadApp'">تحميل التطبيق</p>
                </div>
                <div v-else>
                  <router-link class="p-0" to="/#loadApp">تحميل التطبيق</router-link>
                </div>
            </b-nav-item>

            <b-nav-item>
                <div v-if="this.$route.path === '/' || this.$route.path == '/captin'">
                <p class="m-0" v-scroll-to="'#advantages'">المزايا</p>
                </div>
                <div v-else>
                  <router-link class="p-0" to="/#advantages">المزايا</router-link>
                </div>
            </b-nav-item>

            <b-nav-item>
                <div v-if="this.$route.path === '/' || this.$route.path == '/captin'">
                <p class="m-0" v-scroll-to="'#questions'">اسئلة متكررة</p>
                </div>
                <div v-else>
                  <router-link class="p-0" to="/#questions">اسئلة متكررة</router-link>
                </div>
            </b-nav-item>

            <b-nav-item>
                <router-link to="/contactus">
                    تواصل معنا
                </router-link>
            </b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route)
  },
  methods: {
    goToLoadApp () {
      if (this.$route.fullPath !== '/')
        this.$route.push({name: "index"})
    }
  }
}
</script>