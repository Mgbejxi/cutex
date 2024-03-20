/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(265, 11%, 22%)",
        accent: "hsl(45, 70%, 56%)",
        bar: "hsl(38, 94%, 49%)", 
        orange: "hsl(29, 91%, 49%)", 
        bg: "hsl(265, 88%, 20%)",
        cyan: "hsl(192, 95%, 24%)", 
        loam: "hsl(44, 30%, 88%)",
        shadow: "hsl(256, 5%, 44%)",
        text: "hsl(270, 3%, 75%)"
      },
      boxShadow: {
        inset: "inset 0 0 10px hsl(45, 70%, 56%)",
      },
    },
  },
  plugins: [],
};
