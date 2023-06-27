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
        "2xl": "1535px",
        // => @media (max-width: 1535px) { ... }

        xl: "1279px",
        // => @media (max-width: 1279px) { ... }

        lg: "1023px",
        // => @media (max-width: 1023px) { ... }

        md: "767px",
        // => @media (max-width: 767px) { ... }

        sm: "639px",
        // => @media (max-width: 639px) { ... }

        xs: "479px",
        // => @media (max-width: 479px) { ... }
      }
    },
  },
  plugins: [],
}
