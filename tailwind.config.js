/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'spring-blue': '#0E0C35',
        'spring-yellow': 'white',
        'spring-pink': '#6C9A13',
      },
    },
  },
  plugins: [],
}
