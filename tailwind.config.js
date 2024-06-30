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
        'brand-blue': '#0651F5'
      },
      textColor: {
        DEFAULT: '#ffffff'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.5rem',
        '7xl': '5rem'
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}
