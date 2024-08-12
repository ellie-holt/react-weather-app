/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "/public/index.html"],
  theme: {
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
    },
    screens: {
      xs: "480px",
      sm: "560px",
      md: "670px",
      lg: "768px",
      xl: "992px",
    },
    extend: {},
  },
  plugins: [],
};
