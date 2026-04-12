/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "3xs": "450px",
      "2xs": "475px",
      xs: "550px",
      sm: "640px",
      md: "768px",
      lg: "925px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1440px",
    },
    extend: {
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
