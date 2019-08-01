// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1024px',
    },
    colors: {
      white: "#FFFFFF",
      dark: "#111111",
      primary: '#6128A1',
      secondary: '#E94B59',
    },
    fontFamily: {
      body: ['Exo', 'sans-serif'],
      display: ['Rubik', 'sans-serif']
    },
    extend: {
      boxShadow: {
        huge: '0 30px 60px -15px rgba(0, 0, 0, .25)'
      }
    }
  }
}