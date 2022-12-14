/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'light-head':'#808080',
        'Dark-modeC':'#1a202c',
        'Dark-text':'#37352f',
        // 'Dark-text':'#040404',
        'light-text':'#e2e8f0',
        'light-modeC':'#fffefc',
        'nav-light':'rgba(255, 254, 252, 0.8);',
        'nav-dark':'rgba(26, 32, 44, 0.8);'
      }
    },
  },
  plugins: [],
}
// fffefc
// f7fafc