/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1d1c1f',
        dark2: '#8c909d',
        light: '#9d9cbf',
        light2: '#0e0c5e',
        primary: "#333545"
      }
    },
  },
  plugins: [],
}

