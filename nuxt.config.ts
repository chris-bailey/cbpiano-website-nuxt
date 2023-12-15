// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: [
    'nuxt-gtag',
    'nuxt-simple-sitemap'
  ],
  site: {
    url: 'https://chrisbaileypiano.com'
  },
})
