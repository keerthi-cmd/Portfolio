/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        signature: ["agustina", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        kaushan: ["Kaushan Script"],
        lobster: ["Lobster", "cursive"],
      },
      screens: {
        xs: "375px",
      },
      colors: {
        "bg-secondary": "var(--color-bg-secondary)",
        text: "var(--color-text)",
        "dark-1": "var(--color-dark-1)",
        "dark-2": "var(--color-dark-2)",
        "dark-3": "var(--color-dark-3)",
      },
    },
  },
  plugins: [],
};
