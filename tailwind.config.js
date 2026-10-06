/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
    },
  },
},
