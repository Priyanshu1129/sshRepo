/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.ejs"],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '3',
        '12': '3rem',
      }
    },
    screens:{
      vsm: '510px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      minicom: '1350px',
      tab: '700px'
    },
    fontFamily:{

  },
  plugins: [],
}
}
