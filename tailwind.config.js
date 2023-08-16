/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: 'green',
        accent: 'grey',
        black: 'blue',
        gray: {
          100: '#F8F8F8',
          200: '#EAEAEA',
          300: '#D2D2D2',
          400: '#A6A6A6',
          500: '#7F7F7F',
          600: '#525252',
          700: '#393939',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
}
