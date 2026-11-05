/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",               // Scans HTML files in the root folder
    "./src/**/*.{html,js}",   // Scans HTML and JS files inside a 'src' folder
    "./public/**/*.html"      // Scans HTML files inside a 'public' folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
