/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'Sans': ['Open Sans', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      'workSans': ['Work Sans', 'sans-serif']
    }
  },
  plugins: [],
}
