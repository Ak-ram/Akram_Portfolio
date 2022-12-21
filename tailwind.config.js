/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content : [ "./src/**/*.{js,jsx,ts,tsx}" ],
  darkMode : "class",
  theme : {
    extend : {
      colors : {
        "card" : "#171717",
        "white" : "#ffffff",
      },
      screens : {
        xs : "450px",
      }
    },
    screens : {...defaultTheme.screens},

  },
  plugins : [],
};
