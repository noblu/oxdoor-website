/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
      },
      colors: {
        primary: "#16405B",
        pink: "rgb(203,100,16)",
        dark: "rgb(135,135,135)",
        black: "rgb(34,34,34)",
        delay:"#4b9cdb"
      },
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/imgslide/farmhouse-front-door-ideas-featured-homebnc-v2.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      zIndex: {
        999: "999",
      },
    },
  },
  plugins: [],
};
