/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeD1: "#FF9843",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans - serif"],
        Roboto: ["Roboto", "sans - serif"],
        Ubuntu: ["Ubuntu", "sans - serif"],
      },
      backgroundImage: {
        img: "url('./public/cafeBG.jpg')",
      },
      height: {
        menu: "460px",
      },
    },
  },
  plugins: [],
};
