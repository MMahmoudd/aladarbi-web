export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: 'على دربى',
        htmlAttrs: {
            lang: "en"
          },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: './favicon.png' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' },
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff', rtl: true },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/style/main.css',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    
    plugins: [
        { src: '~/plugins/swiper.min', ssr: true },
        { src: '~/plugins/scroll.min', ssr: true },
        { src: '~/plugins/wizard.min', ssr: true },
        { src: '~/plugins/validate.min', ssr: true },
        { src: '~/plugins/telInput.min', ssr: true },

    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://buefy.github.io/#/documentation
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
    ],
    // axios: {
    //     proxy: true
    // },
    icon: {
        iconSrc: "./static/favicon.png",
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        vendor: [
            'vuelidate'
          ],
        extend(config, ctx) {

        },
        vendor: [""]
    }
}