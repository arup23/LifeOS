/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0E1116",
        card: "#151A21",
        accent: "#7C5CFF",
        success: "#48D597",
        warning: "#FFB86B"
      }
    }
  },
  plugins: []
};
