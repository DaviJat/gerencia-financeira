/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/*/.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#189650',
      white: '#FFF',
      black: '#000',
      gray: '#717971', // Outline Light Scheme - Material Design Colors
    },
  },
  plugins: [],
};
