/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1f2937",          // slate-800
        card: "#374151",        // slate-700
        primary: "#38bdf8",     // sky-400
        secondary: "#facc15",   // amber-400
        text: "#f8fafc",        // slate-50
        subtext: "#9ca3af"      // slate-400
      },
      boxShadow: {
        card: "0 2px 4px rgba(0,0,0,0.4)"
      }
    },
  },
  plugins: [],
};
