/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Vẫn giữ darkMode class để backward-compat, nhưng giờ dùng data-theme là chính
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Đọc từ CSS variables – thay đổi khi data-theme thay đổi
        'primary':          'var(--c-primary)',
        'primary-dark':     'var(--c-primary-dark)',
        'primary-content':  'var(--c-primary-content)',
        'secondary':        'var(--c-secondary)',
        'accent':           'var(--c-accent)',
        // Giữ tên cũ để backward-compat với code hiện tại
        'dark':             'var(--c-bg)',
        'light':            'var(--c-surface)',
        'surface':          'var(--c-surface)',
        'surface-2':        'var(--c-surface-2)',
        'theme-text':       'var(--c-text)',
        'theme-muted':      'var(--c-text-muted)',
        'danger':           'var(--c-danger)',
        'warning':          'var(--c-warning)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1023px",
        md: "767px",
        sm: "639px",
        xs: "479px",
      },
      backgroundImage: {
        // Giữ nguyên các circular patterns – sử dụng biến CSS
        circularLight:
          "repeating-radial-gradient(var(--c-circular, rgba(0,0,0,0.4)) 2px, var(--c-circular-stripe, #f5f5f5) 5px, var(--c-circular-stripe, #f5f5f5) 100px)",
        circularDark:
          "repeating-radial-gradient(var(--c-circular, rgba(255,255,255,0.5)) 2px, var(--c-circular-stripe, #1b1b1b) 8px, var(--c-circular-stripe, #1b1b1b) 100px)",
        circularLightLg:
          "repeating-radial-gradient(var(--c-circular, rgba(0,0,0,0.4)) 2px, var(--c-circular-stripe, #f5f5f5) 5px, var(--c-circular-stripe, #f5f5f5) 80px)",
        circularDarkLg:
          "repeating-radial-gradient(var(--c-circular, rgba(255,255,255,0.5)) 2px, var(--c-circular-stripe, #1b1b1b) 8px, var(--c-circular-stripe, #1b1b1b) 80px)",
        circularLightMd:
          "repeating-radial-gradient(var(--c-circular, rgba(0,0,0,0.4)) 2px, var(--c-circular-stripe, #f5f5f5) 5px, var(--c-circular-stripe, #f5f5f5) 60px)",
        circularDarkMd:
          "repeating-radial-gradient(var(--c-circular, rgba(255,255,255,0.5)) 2px, var(--c-circular-stripe, #1b1b1b) 8px, var(--c-circular-stripe, #1b1b1b) 80px)",
        circularLightSm:
          "repeating-radial-gradient(var(--c-circular, rgba(0,0,0,0.4)) 2px, var(--c-circular-stripe, #f5f5f5) 5px, var(--c-circular-stripe, #f5f5f5) 40px)",
        circularDarkSm:
          "repeating-radial-gradient(var(--c-circular, rgba(255,255,255,0.5)) 2px, var(--c-circular-stripe, #1b1b1b) 8px, var(--c-circular-stripe, #1b1b1b) 40px)",
      },
    },
  },
  plugins: [],
}

