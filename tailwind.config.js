/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FA5C9F'
      },
     fontFamily: {
        poppins: ['Oswald', 'serif'], // Add Poppins font family
      },
    },
  },
  plugins: [],
}