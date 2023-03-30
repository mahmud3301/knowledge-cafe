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

          "primary": "#cde84a",

          "secondary": "#becc24",

          "accent": "#cd4eed",

          "neutral": "#171622",

          "base-100": "#31373A",

          "info": "#64BBF2",

          "success": "#23E76E",

          "warning": "#AC790C",

          "error": "#F52F19",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}