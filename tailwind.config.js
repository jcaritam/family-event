/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        lora: ['Lora', 'serif'],
        humble: ['The Humble', 'sans-serif'],
      },
      colors: {
        'blue-electrico': '#2D47A0',
      },
    },
  },
  plugins: [],
}

