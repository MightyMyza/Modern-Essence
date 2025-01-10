/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)",
        foreground_light: "var(--foreground_light)",
        accent: "var(--accent)",
        accent_dark: "var(--accent_dark)",
        footer: "var(--footer)",
        cards: "var(--cards)"
      },
    },
  },
  darkMode: false,
  plugins: [],
};
