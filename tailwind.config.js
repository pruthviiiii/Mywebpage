/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'light-head':'#808080',
        'Dark-modeC':'#121212',
      }
    },
  },
  plugins: [],
}
