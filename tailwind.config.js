/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
      },
      colors: {
        'gray-0.03': 'rgba(22, 24, 35, 0.03)',
        'gray-0.5': 'rgba(22, 24, 35, 0.5)',
        'check-color': 'rgb(32, 213, 236)',
      },
      screens: {
        '1.4rem': '1.4rem'
      },
    },
  },
  plugins: [],
}

