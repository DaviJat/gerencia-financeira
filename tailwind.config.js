/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/*/.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      verde: '#189650',
    },
  },
  plugins: [],
};
