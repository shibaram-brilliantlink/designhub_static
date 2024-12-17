/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--bg-cream)",
        skin: "var(--skin)",
        orange: "var(--orange)",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
