export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#fdf8f3",
          100: "#f5e6d8",
          800: "#4a2f1c",
          900: "#3a2618",
          950: "#2b1d14",
        },
        gold: {
          500: "#d4af37",
        },
        black: {
          50 : "#1f1c1c34",
        }
      },
    },
  },
  plugins: [],
}