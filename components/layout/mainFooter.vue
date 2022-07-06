<template>
    <div class="main-footer-component">
    
        <div class="container">
    
            <div class="row">
                <div class="col-md">
                    <ul class = "list-unstyled">
                        <li>
                            <div v-if="this.$route.path == '/' || this.$route.path == '/captin'">
                                <p class="m-0" v-scroll-to="'#header'">الرئيسية</p>
                            </div>
                            <div v-else>
                                <router-link class="p-0" to="/#header">الرئيسية</router-link>
                            </div>
                        </li>
                        <li>
                            <div v-if="this.$route.path === '/' || this.$route.path == '/captin'">
                                <p class="m-0" v-scroll-to="'#loadApp'">تحميل التطبيق</p>
                            </div>
                            <div v-else>
                                <router-link class="p-0" to="/#loadApp">تحميل التطبيق</router-link>
                            </div>
                        </li>
                        <li>
                            <div v-if="this.$route.path === '/' || this.$route.path == '/captin'">
                                <p class="m-0" v-scroll-to="'#advantages'">المزايا</p>
                            </div>
                            <div v-else>
                                <router-link class="p-0" to="/#advantages">المزايا</router-link>
                            </div>
                        </li>
                        <li>
                            <div v-if="this.$route.path === '/' || this.$route.path == '/captin'">
                                <p class="m-0" v-scroll-to="'#questions'">اسئلة متكررة</p>
                            </div>
                            <div v-else>
                                <router-link class="p-0" to="/#questions">اسئلة متكررة</router-link>
                            </div>
                        </li>
                        <li>
                            <nuxt-link to="/captin">
                                صفحة الكابتن
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md">
                    <ul class = "list-unstyled">
                        <li>
                            <nuxt-link to="/contactus">
                                تواصل معنا
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/terms">
                                الشروط والاحكام
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/privacy">
                                سياسة الخصوصية
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/register">
                                تسجيل كابتن جديد
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <nuxt-link to="/">
                    <img class="logo" src="../../static/favicon.png" alt="logo">
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>