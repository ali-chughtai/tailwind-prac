/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray': '#F2F4F7',
        'custom-blue':'#0866FF',
        'link':'#0866FF'
      },
      boxShadow: {
        'custom-shadow': '0px 8px 24px rgba(149, 157, 165, 0.2)',
      },
      screens: {
        'max-md': {'max': '768px'},
      },
    },
  },
  plugins: [],
}

