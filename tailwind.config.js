/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#1E6F9F",
        blue: "#4EA8DE",
        "purple-dark": "#5E60CE",
        purple: "#8284FA",
        "custom-gray-700": "#0D0D0D",
        "custom-gray-600": "#1A1A1A",
        "custom-gray-500": "#262626",
        "custom-gray-400": "#333333",
        "custom-gray-300": "#808080",
        "custom-gray-200": "#D9D9D9",
        "custom-gray-100": "#F2F2F2"
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
