/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'375px'
      },
      padding:{
        '88':'88px',
        '90':'90px'
      },
      backgroundImage:{
        'figures-mobile': 'url("/img/image-web-3-mobile.jpg")',
        'figures-desktop': 'url("/img/image-web-3-desktop.jpg")',
      },
    },
  },
  plugins: [],
}

