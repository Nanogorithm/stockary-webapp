/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  important: "#root",
  theme: {
    colors: {
      'primary': '#327AF2',
      'secondary': '#0AE0D8',
      'light': '#F8F8F8',
      'secondaryHover': '#0CD6CE',
      'primaryHover': '#1D65DC',
      'dark': '#1F1F1F',
      'white': '#FFFFFF',
      'gray': '#F7F9FB',
      "tableH": "#8E8E8E"
    },
    extend: {},
  },
  plugins: [],
}
