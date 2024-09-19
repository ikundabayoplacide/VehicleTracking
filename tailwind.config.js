/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./Home.{js,jsx,ts,tsx}",   // Add this line to target Home.tsx
    "./Login.{js,jsx,ts,tsx}",  // Add for Login.tsx if needed
    "./**/*.{js,jsx,ts,tsx}",   // Optional: Scans all files for Tailwind classes
  ],
  
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
