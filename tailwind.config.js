module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-color": "#f79837"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
