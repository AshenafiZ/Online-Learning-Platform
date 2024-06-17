// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '3/4': '75vh', // Add this line to set min-height to 75% of the viewport height
      },
    },
  },
  plugins: [],
}



