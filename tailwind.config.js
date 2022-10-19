/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      ptSans: ['pt-sans', 'sans-serif'],
      ptSerif: ['pt-serif', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          100: "#3b645f",
          200: "#2f3841",
          300: "#4b525a"
        }
      }
    },
  },
  plugins: [],
  important: true,
}
