export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Global CSS
     */
    css: ['@/assets/style.css'],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     ** See https://nuxtjs.org/api/configuration-modules/#buildmodules
     */
    buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/pwa'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://nuxtjs.org/api/configuration-modules/
        '@nuxtjs/axios',
    ],
    axios: {
        // proxyHeaders: false
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        analyze: true,
        /*
         ** You can extend webpack config here
         */
    },
    pwa: {
        meta: {
            title: 'Covid Tracker',
            author: 'Me',
            background_color: '#2E98A7',
        },
        manifest: {
            name: 'Covid Tracker',
            short_name: 'Nuxt.js PWA',
            lang: 'en',
            display: 'standalone',
            theme_color: '#2E98A7',
        },
    },
}
