/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          '2xl': "1496px",
        },
      },
    },
  },
  plugins: [],
}