/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Urbanist': ['"Urbanist"', 'sans-serif', 'system-ui'],
        'CaviarDreams': ['"Caviar Dreams"', 'sans-serif', 'system-ui'],
      },
      colors: {
        'primary': '#008b76',
        'secondary': '#f2af02',
        'tertiary': '#636363',
      },
    },
  },
  plugins: [],
}

