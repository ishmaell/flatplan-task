/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
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
}
