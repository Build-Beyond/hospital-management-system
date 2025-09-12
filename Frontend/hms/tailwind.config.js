/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins, sans-serif'],   
        sans: ['Poppins, sans-serif'], 
        heading: ['Merriweather, serif'],
      },
      colors:{
        primary: {
        50:  '#f3faf9',
        100: '#d7f0ed',
        200: '#bce5e0',
        300: '#7fc9c2',
        400: '#55aca7',
        500: '#3b918e',
        600: '#2d7473',
        700: '#275e5d',
        800: '#234c4c',
        900: '#214040',
        950: '#0e2425', 
      },
      neutral: {
        50:  '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#000000',  
      },
    },
  },
},

  plugins: [],
}

