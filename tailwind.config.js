/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.js", "/public/index.html"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
        georama: ["Georama", ...defaultTheme.fontFamily.sans],
        merriweather: ["Merriweather", ...defaultTheme.fontFamily.serif],
        librefranklin: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
        librebaskerville: [
          "Libre Baskerville",
          ...defaultTheme.fontFamily.serif,
        ],
        ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        lora: ["Lora", ...defaultTheme.fontFamily.serif],
        barlow: ["Barlow", ...defaultTheme.fontFamily.sans],
        firasans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
