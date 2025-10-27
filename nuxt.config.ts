// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      // client+server
      appName: 'LeafyShop'
    }
  }
})