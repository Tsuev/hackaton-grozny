/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'gilroy': ['Gilroy']
    },
    container: {
      center: true,
      padding: '30px',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1300px',
      },
    },
  },
}
