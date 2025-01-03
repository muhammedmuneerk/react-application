/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#168acd',
        secondary: '#2b5278',
        dark: '#1a1a1a',
      },
      borderWidth: {
        'l-12': '12px',
      }
    },
  },
  plugins: [],
}

