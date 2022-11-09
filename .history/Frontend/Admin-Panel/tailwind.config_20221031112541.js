/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop: ['Poppins', 'sans-serif'],
        Qui: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
