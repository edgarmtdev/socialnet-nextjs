const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,jsx,}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        laic: {
          50: "#ffc1ff",
          100: "#ffb7ff",
          200: "#f5adff",
          300: "#eba3fa",
          400: "#e199f0",
          500: "#d78fe6",
          600: "#cd85dc",
          700: "#c37bd2",
          800: "#b971c8",
          900: "#af67be",
        },
        "mine-shaft": {
          DEFAULT: "#3D3D3D",
          50: "#999999",
          100: "#8F8F8F",
          200: "#7A7A7A",
          300: "#666666",
          400: "#515151",
          500: "#3D3D3D",
          600: "#212121",
          700: "#050505",
          800: "#000000",
          900: "#000000",
        },
        "great-blue": {
          DEFAULT: "#2A669F",
          50: "#E4F7F8",
          100: "#CCEEF2",
          200: "#9CD7E5",
          300: "#6CB9D8",
          400: "#3B94CB",
          500: "#2A669F",
          600: "#234B83",
          700: "#1B3366",
          800: "#14204A",
          900: "#0C102E",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
