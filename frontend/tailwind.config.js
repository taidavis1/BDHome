/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [require("tw-elements/dist/plugin.cjs")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'new-font': ['Open Sans', 'sans-serif'],
        'newFont': ['Catamaran', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'Catamaran': ['Catamaran', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
        'new-2-font': ['Satisfy' , 'cursive'],
        'lato': ['Lato', 'sans-serif'],
        'Roboto': ['Roboto Serif' , 'serif'],
        'Freehand': ['Freehand' , 'cursive'],
        'Poppins': ['Poppins' , 'sans-serif'],
        'Abril': ['Abril Fatface' , 'cursive'],
        'Rouge': ['Rouge Script','cursive'],
        'Han-Sans': ['Black Han Sans', 'sans-serif'],
        'Monterast' :['Montserrat',' sans-serif'],
        'Gruppo': ['Gruppo', 'sans-serif'],
        'PlayFair': ['Playfair Display', 'serif'],
        'Dancing': ['Dancing Script', 'cursive'],
        'FiraFont': ['Fira Sans', 'sans-serif'],
        'Marcok': ['Marcellus', 'serif'],
      },
      colors:{
        'ser-color': '#ffe4b0',
        'gold': '#ffd700',
        'blue-test': '#373b4d',
        'invoice-blue': '#010a8b',
      },
      backgroundImage:{
        'bg1': "url('/src/img/bg1.png')",
        'bgservices': "url('/src/img/img-services/framing-house.png')",
        'bg2': "url('/src/img/bg_porfolio.png')",
        'bg3': "url('/src/img/img1.jpg')",
        'bg4': "url('/src/img/bg1.png')",
        'bg5': "url('/src/img/onstruction.png')",
      }
    },
  },
}