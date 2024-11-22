/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farm': {
          50: '#f8f9f3',
          100: '#e8ebd7',
          200: '#d1d8b9',
          300: '#b3bd94',
          400: '#919c70',
          500: '#768355',
          600: '#5d6743',
          700: '#4a5235',
          800: '#3d432d',
          900: '#343928',
        }
      }
    },
  },
  plugins: [],
}