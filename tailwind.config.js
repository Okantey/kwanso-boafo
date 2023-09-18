/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cabin: ["Cabin", "sans-serif"],
      lato: ["lato", "sans-serif"],
    },
    backgroundImage: {
      "hero": "url('https://img.freepik.com/free-vector/auto-mechanicconcept-illustration_114360-16748.jpg?w=740&t=st=1693488590~exp=1693489190~hmac=f9804c009ddfde0f2cc5072a36af4f72f1390464cf3594c0e32cf71f4847e202')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
    extend: {

      colors: {
        primary: "#A14189",
        gray: "#9C9C9C",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};