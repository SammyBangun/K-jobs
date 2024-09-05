/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "70/30": "70% 30%",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
