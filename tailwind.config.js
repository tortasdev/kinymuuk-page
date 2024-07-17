/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"], // Nota: Añadí 'ts' para archivos TypeScript
  theme: {
    extend: {
      colors: {
        'kinymuuk': '#A502A8',
        'kblue': '#2F4A9D'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}