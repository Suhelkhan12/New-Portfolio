/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: ".5" },
        },
      },

      animation: {
        spin: "spin 20s linear infinite", // Define a custom animation class
        blink: "blink 0.8s step-start infinite;",
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
