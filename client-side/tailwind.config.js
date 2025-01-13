/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          emerald: {
            400: '#50C878',
            500: '#3CB371',
            600: '#2E8B57',
            900: '#004225',
          },
        },
      },
    },
    plugins: [],
  };