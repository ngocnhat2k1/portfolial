/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
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
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,.4) 2px,#f5f5f5 5px,#f5f5f5 40px);",

        circularDarkSm:
          "repeating-radial-gradient(hsla(0,0%,100%,.5) 2px,#1b1b1b 8px,#1b1b1b 40px);",
      },
    },
  },
  plugins: [],
}
