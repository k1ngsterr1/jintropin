/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF200",
        dark: "#1A1A1A",
        white: "#FFFFFF",
        blue: '#182F67'
      },
    },
  },
  plugins: [],
}