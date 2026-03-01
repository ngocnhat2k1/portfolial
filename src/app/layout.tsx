import MotionLazyContainer from '@/components/animate/MotionLazyContainer'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['vietnamese'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: {
    default: 'Tran Ngoc Nhat – Frontend Team Leader & Software Engineer',
    template: '%s | Tran Ngoc Nhat',
  },
  description:
    'Frontend Developer with 3+ years of experience specializing in React/Next.js. Team Leader at Mona Media. Expert in e-commerce platforms, ERP dashboards, and e-learning systems.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Team Leader',
    'Mona Media',
    'Tran Ngoc Nhat',
    'Portfolio',
    'Ho Chi Minh City',
  ],
  authors: [{ name: 'Tran Ngoc Nhat', url: 'https://github.com/ngocnhat2k1' }],
  creator: 'Tran Ngoc Nhat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Tran Ngoc Nhat – Portfolio',
    title: 'Tran Ngoc Nhat – Frontend Team Leader & Software Engineer',
    description:
      'Portfolio of Tran Ngoc Nhat – Frontend Developer with 3+ years building e-commerce, ERP, and e-learning systems.',
    images: [{ url: '/HomeImage.png', width: 1200, height: 630, alt: 'Tran Ngoc Nhat Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tran Ngoc Nhat – Frontend Team Leader',
    description: 'Frontend Developer with 3+ years experience. Team Leader at Mona Media.',
    images: ['/HomeImage.png'],
  },
}

// Script inline: chạy NGAY trước khi React render, tránh flash of unstyled content
// Đọc theme từ localStorage và set data-theme + class 'dark' trên <html>
const INIT_THEME_SCRIPT = `
(function() {
  var darkThemes = ['dark', 'ocean', 'forest', 'sunset', 'cyberpunk'];
  try {
    var saved = localStorage.getItem('portfolio-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    if (darkThemes.indexOf(saved) !== -1) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Script đặt trước body content để tránh FOUC */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: INIT_THEME_SCRIPT }} />
      </head>
      <body
        className={`${montserrat.className} flex min-h-screen flex-col transition-colors`}
        style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }}
      >
        <MotionLazyContainer>{children}</MotionLazyContainer>
      </body>
    </html>
  )
}
