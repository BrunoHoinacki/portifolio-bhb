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
      colors: {
        'brand-blue': '#0651F5',
      },
      textColor: {
        DEFAULT: '#ffffff',
      },
    },
  },
  plugins: [],
}
