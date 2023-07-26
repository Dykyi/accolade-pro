/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
