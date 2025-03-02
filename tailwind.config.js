/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FA5C9F'
      },
     fontFamily: {
        poppins: ["Outfit", 'serif'], // Add Poppins font family
      },
      backgroundImage:{
        bgimage:"url('./src/assets/dialysisimg9.jpg')"
      },
      animation: {
        spin: "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
}