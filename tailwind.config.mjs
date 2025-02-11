/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        modern: ['var(--modern)'],
        proza: ['var(--proza)'],
        stylish: ['var(--stylish)'],
        redtrap: ['var(--redtrap)'],
      },
      textColor:{
        primary: "#FF9100",
        secondary : "#13384D"
      },
      backgroundColor:{
        primary: "#FF9100",
        secondary : "#13384D"
      },
      borderColor:{
        primary: "#FF9100",
        secondary : "#13384D"
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
