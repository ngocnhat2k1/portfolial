/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#1D7874',
        'secondary': '#679289',
        'dark': '#071E22',
        'light': '#F5F5F5',
        'warning': '#F4C095',
        'danger': '#EE2E31',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      screens: {
        'sm': { max: '640px' },
        // => @media (max-width: 640px) { ... }

        'md': { max: '768px' },
        // => @media (max-width: 768px) { ... }

        'lg': { max: '1024px' },
        // => @media (max-width: 1024px) { ... }

        'xl': { max: '1280px' },
        // => @media (max-width: 1280px) { ... }

        '2xl': { max: '1536px' },
        // => @media (max-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
