/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/tw-elements/dist/js/**/*.js",
     "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
          
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

