/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      },
    },
  },
  safelist: [
    {
      pattern: /col-span-([0-9]|[1-9][0-9]|100)+/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
  ],
  plugins: [],
};
