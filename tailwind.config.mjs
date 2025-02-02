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
      },
      textColor:{
        primary: "#FF9100",
      },
      backgroundColor:{
        primary: "#FF9100",
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
