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
        primary: "var(--primary)",
        accent: "var(--accent)",
        font: "var(--font)",

        background: "var(--background)", 
        foreground: "var(--foreground)",
        foreground_light: "var(--foreground_light)",
        accent_dark: "var(--accent_dark)",
        header: "var(--header)",
        footer: "var(--footer)",
        cards: "var(--cards)"
      },
      fontFamily: {
        'code': ['"Source Code Pro"', 'monospace'],
        'roboto': ['Roboto', 'sans'],
        'aleo': ['Aleo', 'sans']
      }
    },
  },
  darkMode: false,
  plugins: [],
};
