/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/*/.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      //Basic Colors
      white: '#FFF',
      black: '#000',
      // Material Design Colors
      primary: '#189650', // Primary Light Schem
      gray: '#717971', // Outline Light Scheme - Material Design Colors
      'primary-dark': '#006D37', // Tonal pallete - Primary 40
    },
  },
  plugins: [],
};
