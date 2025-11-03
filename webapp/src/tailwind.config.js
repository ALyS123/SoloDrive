/** @type {import('tailwindcss').Config} */
export default {
  // Vite plugin handles scanning, but keeping content is fine and explicit:
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5faff",
          100: "#e6f2ff",
          500: "#247cff",
          600: "#1f6be0",
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
