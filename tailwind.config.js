/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'light-head':'#808080',
        'Dark-modeC':'#1a202c',
        'light-modeC':'#f7fafc',
        'nav-light':'rgba(247, 250, 252, 0.8);',
        'nav-dark':'rgba(26, 32, 44, 0.8);'
      }
    },
  },
  plugins: [],
}
