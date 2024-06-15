/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'sm': '200px'
      },
      spacing:{
        "big":"48rem"
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      height: {  // Use `height` for custom height values
        "siz": "500px"
      },
      width: {  // Optionally, use `width` for custom width values if needed
        "sizw": "600px"
      },
    },
  },
  plugins: [],
  content: [
    './**/*.html',
    './public/src/**/*.js',
  ],
};
