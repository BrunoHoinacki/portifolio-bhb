export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br' 
      },
      title: 'Bruno Hoinacki - Desenvolvedor Fullstack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Conheça o portfólio de Bruno Hoinacki, desenvolvedor fullstack' },
        { name: 'author', content: 'Bruno Hoinacki' },
        { name: 'robots', content: 'index, follow' } 
      ],
      script: [
        { innerHTML: 'console.log(\'Funcionando\')' }
      ],
      bodyAttrs: {
        class: 'test'
      }
    }
  },
  modules: ['@nuxtjs/color-mode'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'animate.css/animate.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
