/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGray: '#F7F7F8',
        mainColor: '#605BFF',
      }
    },
  },
  plugins: [],
}