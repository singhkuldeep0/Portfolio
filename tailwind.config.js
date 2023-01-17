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
      'workSans': ['Work Sans', 'sans-serif'],
      'Playfair': ['Playfair Display', 'sans-serif']
    },
    extend:{
      colors:{
        blue:'#2CBCE9',
        red:"#DC4492",
        yellow:'#FDCC49',
        grey:"#ededed",
        "deep-blue":"#010026",
        "dark-grey":"#757575",
        "opaque-black":"rgba(0,0,0,0.35)"
      },
      backgroundImage:(theme)=>({
        "gradient-rainbow":"linear-gradient(81.66deg , #00B5EE 7.21% , #FF45A4 45.05%, #FFBA00 78.07% )",
        "gradient-rainblue":"linear-gradient(90deg , #24CBFF 14.53% , #FC59FF 69.3%, #FFBD0C 117.73%)",
        "brush":"url('/assets/brush.png')"
      }),
      content:{
        brush:"url('/assets/brush.png)",
        person1:"url('/assets/person-1.png')",
        person2:"url('/assets/person-2.png)",
        person3:"url('/assets/person-3.png)"
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
  },


  plugins: [],
}
