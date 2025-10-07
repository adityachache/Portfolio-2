// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: { xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem" },
    },
  },
  plugins: [],
}
