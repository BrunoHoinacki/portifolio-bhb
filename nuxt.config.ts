// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  },
  css: [
    '~/assets/css/main.css',
  ],
});
