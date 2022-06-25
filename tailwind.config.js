/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,php}", "./public/**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        'vio': '#5964E0',
        'lightvio': '#939BF4',
        'darkblue': '#19202D',
        'midnight': '#121721',
        'lightgray': '#F4F6F8',
        'midgray': '#9DAEC2',
        'darkgray': '#6E8098'
      }
    },
  },
  plugins: [],
}
