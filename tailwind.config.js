/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'pinkish': {
          100: '#df4adf',
          200: '#c03cc0',
        },
        'brown': {
          100: '#444',
          200: '#666',
        },
        'creamwhite': '#f0f0f0',
      },
    },
  },
  plugins: [],
}

