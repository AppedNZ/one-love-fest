/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        40: "2.5rem",
      },
      colors: {
        peach: "#6B0000",
        lemon: "#FFFF00",
        error: "#EE584D",
        mustard: "#F9B20D",
        purp: "#7200FF",
      },
    },
  },
  plugins: [],
};
