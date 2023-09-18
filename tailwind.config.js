/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bianca: {
          50: "#fefdfb",
          100: "#f7efdd",
          200: "#eddcbb",
          300: "#e2c28f",
          400: "#d5a362",
          500: "#cc8a43",
          600: "#be7538",
          700: "#9e5c30",
          800: "#7f4b2d",
          900: "#673e27",
          950: "#371f13",
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
