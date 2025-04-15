/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}", "/public/index.html"],
  theme: {
    extend: {
      screens: {
        "2xs": "450px",
        xs: "475px",
        xss: "550px",
        mlg: "925px",
        "2xl": "1440px",
      },
      keyframes: {
        /*Accordion expand keyframes*/
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        /*Caret rotation keyframes*/
        "rotate-in": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        "rotate-out": {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        /*Accordion expand animations*/
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        /*Caret rotation animations*/
        "rotate-in": "rotate-in 0.3s ease-in-out forwards",
        "rotate-out": "rotate-out 0.3s ease-in-out forwards",
      },
      fontFamily: {
        librefranklin: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
