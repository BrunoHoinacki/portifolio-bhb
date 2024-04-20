export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Site Bruno Hoinacki',
      meta: [
        { name: 'description', content: 'Site de portifolio de Bruno Hoinacki.' }
      ],
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'animate.css/animate.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
