/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#341088",
        customBlack: "#1e1d1d"
      },
    },
  },
  plugins: [],
};
