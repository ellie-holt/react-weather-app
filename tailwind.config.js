/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.js", "/public/index.html"],
  theme: {
    fontSize: {
      xs: [
        "0.875rem", // Base font size for xs
        {
          "@screen sm": {
            fontSize: "0.9375rem", // 15px at small screens
          },
          "@screen md": {
            fontSize: "1rem", // 16px at medium screens
          },
          "@screen lg": {
            fontSize: "1.0625rem", // 17px at large screens
          },
        },
      ],
      sm: [
        "1rem", // Base font size for sm
        {
          "@screen sm": {
            fontSize: "1.125rem", // 18px at small screens
          },
          "@screen md": {
            fontSize: "1.25rem", // 20px at medium screens
          },
          "@screen lg": {
            fontSize: "1.375rem", // 22px at large screens
          },
        },
      ],
      md: [
        "1.25rem", // Base font size for md
        {
          "@screen sm": {
            fontSize: "1.375rem", // 22px at small screens
          },
          "@screen md": {
            fontSize: "1.5rem", // 24px at medium screens
          },
          "@screen lg": {
            fontSize: "1.625rem", // 26px at large screens
          },
        },
      ],
      lg: [
        "1.5rem", // Base font size for lg
        {
          "@screen sm": {
            fontSize: "1.625rem", // 26px at small screens
          },
          "@screen md": {
            fontSize: "1.75rem", // 28px at medium screens
          },
          "@screen lg": {
            fontSize: "1.875rem", // 30px at large screens
          },
        },
      ],
      xl: [
        "1.75rem", // Base font size for xl
        {
          "@screen sm": {
            fontSize: "1.875rem", // 30px at small screens
          },
          "@screen md": {
            fontSize: "2rem", // 32px at medium screens
          },
          "@screen lg": {
            fontSize: "2.125rem", // 34px at large screens
          },
        },
      ],
    },
    screens: {
      xs: "480px",
      sm: "560px",
      md: "670px",
      lg: "768px",
      xl: "992px",
    },
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
      },
    },
  },
  plugins: [],
};
