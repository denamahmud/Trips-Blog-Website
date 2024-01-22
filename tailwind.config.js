/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      overlock: [ 'Overlock', 'sans-serif ' ],
      montserrat: [ 'Montserrat', 'sans-serif' ],
    },
    extend: {
      colors: {
         lightBrown: '#E3D5CB', 
         darkBrown: '#804216',  
      },
    },
  },
  plugins: [],
}