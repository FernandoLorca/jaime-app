/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotoRegular: ['Roboto-Regular', 'sans-serif'],
        robotoBold: ['Roboto-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
