/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        card: "#171717",
        white: "#ffffff",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        move: {
          "0%": { transform: "translatey(55px)", opacity: 1 },
          "100%": { transform: "translatey(-108px)", opacity: 0 },
        },
      },
      animation: {
        "ping-once": "ping .2s linear 1",
        "move-vertical": "move 5s linear infinite alternate both",
      },
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
