/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'header-rgba': 'rgba(245, 194, 27, 1)'
      },
      // that is animation class
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out',
        fadeIn: 'fadeIn 2s out-in-eas'
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.header-rgba') }
        },
        fadeIn: {
          '0%': { backgroundColor: theme('colors.header-rgba') },
          '100%': { backgroundColor: theme('colors.transparent') }
        }
      })
    }
  },
  plugins: []
};
