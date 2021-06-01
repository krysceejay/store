module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-color": "#d09560",
        "overlay-color": "rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: theme => ({
        "banner-img": "url('/img/woman.png')",
      }),
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6rem",
        "bannerxl": "9rem",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        88: "28rem",
        96: "33rem",
        144: "36rem",
      },
      translate: {
       '-2/25': '-8%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
