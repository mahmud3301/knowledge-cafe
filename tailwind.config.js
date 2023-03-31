/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2dd4bf",

          "secondary": "#84cc16",

          "accent": "#e879f9",

          "neutral": "#1E1E24",

          "base-100": "#F0F1F4",

          "info": "#5eead4",

          "success": "#84cc16",

          "warning": "#eab308",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}