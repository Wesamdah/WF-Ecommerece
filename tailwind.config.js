/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-blue": "#003DFF",
      "primary-black": "#23263B",
      orange: "#E07E0B",
    },
    extend: {
      keyframes: {
        loadForm: {
          "0%": {
            width: 0,
            opacity: 0,
          },
          "90%": {
            width: "65%",
          },
          "100%": {
            width: "60%",
          },
        },
        loadImage: {
          "0%": {
            bottom: "-999px",
          },
          "100%": {
            bottom: "0px",
          },
        },
      },
      animation: {
        loadForm: "loadForm 1s ease-in-out ",
        loadImage: "loadImage 2s ease-in-out ",
      },
    },
  },
  plugins: [],
};
