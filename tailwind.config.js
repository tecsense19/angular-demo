/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      ...colors,
      'primary_color': "#4D399F",
      'primary_bg': "#F3F4F6",
      'green_color': "#4DC970",
      'red_color': '#FF6262'
    },
    extend: {},
  },
  plugins: [],
}

