/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FEA017",
        customBlack: "#282828",
        customWhite: "#F5F5F5",
        customGray: "#A8A8A8",
        customRed: "#E91E62",
        customYellow: "#EF6C00",
        customGreen: "#43a047",
        customBlue: "#1982C4",
        customViolet: "#6A4C93",
      },
    },
  },
  plugins: [],
};
