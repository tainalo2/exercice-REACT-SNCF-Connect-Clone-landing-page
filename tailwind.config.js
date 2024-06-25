/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bg': '#f3f3f8',
      'primary': '#8de8fe',
      'secondary': '#0c131f',
      'third': '#242b35',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#bdbdbd',
      'yellow': '#f1c83c',
      'blueLink': '#14708a',
      'grayText': '#5e6878',
      'grayMinor': '#d0d0d0',
      'grayMinus': '#e7e7e7'
    }
  },
  plugins: [],
}
