/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  darkMode: ['class', '[theme="custom-dark"]'],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    extend: {
      colors: {
        'search-bg': '#f4f4f4'
      },
      spacing: {
        'calc-icon-left': 'calc(100% - 40px)'
      }
    },
  },
  plugins: [],
}