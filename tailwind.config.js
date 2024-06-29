/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      textColor: {
        DEFAULT: '#ffffff', // Define a cor branca como padrão
        'brand-blue': '#0651F5',
      },
      backgroundColor: {
        'brand-blue': '#0651F5',
      },
      borderColor: {
        'brand-blue': '#0651F5', // Adiciona a cor personalizada para bordas
      },
    },
  },
  plugins: [],
}
