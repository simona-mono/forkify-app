/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        birdy: {
          50: '#fbdb89',
        },
        sunset: {
          50: '#f48982',
        },
        ash: {
          50: '#f9f5f3',
          100: '#f2efee'
        },
        brown: {
          50: '#615551',
          100: '#918581'
        },
      },
    },
  },
  plugins: [],
}