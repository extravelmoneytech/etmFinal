/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0E51A0',
          red: '#E31D1C'
        }
      },
      fontSize:{
      'headingCustom':['2.4rem','3rem'],
      'headingCustomSmall':['2.1rem','2.5rem'],
      'mediumFont':['0.80rem','1.3rem'],
      'smallFont':['0.6rem','1rem']
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['responsive', 'important'], // Ensure responsiveness and importance
    },
  },
  plugins: [],
}
