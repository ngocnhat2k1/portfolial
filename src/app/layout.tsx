import MotionLazyContainer from '@/components/animate/MotionLazyContainer'
import { ScriptClient } from '@/components/common/script_client'
import { IntroOverlay } from '@/components/intro'
import { LocaleProvider } from '@/i18n'
import { Analytics } from '@vercel/analytics/next'
import { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['vietnamese'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['vietnamese'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['vietnamese'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ngocnhat.info'),
  title: {
    default: 'Tran Ngoc Nhat – Frontend Technical Leader',
    template: '%s | Tran Ngoc Nhat',
  },
  description:
    'Frontend Technical Leader with 4+ years of experience designing scalable frontend architectures and leading engineering teams. Tech Lead at Mona Media, building e-commerce, ERP, and e-learning platforms with React/Next.js.',
  keywords: [
    'Frontend Technical Leader',
    'Frontend Team Lead',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Tech Lead',
    'Mona Media',
    'Portfolio',
    'Ho Chi Minh City',
    'Lập trình Frontend',
    'Trưởng nhóm Frontend',
    'ngocnhat2k1',
    'Tran Ngoc Nhat',
    'Trần Ngọc Nhật',
  ],
  authors: [{ name: 'Tran Ngoc Nhat', url: 'https://github.com/ngocnhat2k1' }],
  creator: 'Tran Ngoc Nhat',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
    siteName: 'Tran Ngoc Nhat – Portfolio',
    title: 'Tran Ngoc Nhat – Frontend Technical Leader',
    description:
      'Portfolio of Tran Ngoc Nhat – Frontend Technical Leader with 4+ years building e-commerce, ERP, and e-learning platforms with React/Next.js.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tran Ngoc Nhat Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tran Ngoc Nhat – Frontend Technical Leader',
    description:
      'Frontend Technical Leader with 4+ years experience. Tech Lead at Mona Media.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'TJlBrEMG7aJ1uM53tVNR-NGE2aJVOPKwjIluwZ9kTqM',
  },
}

// Script inline: chạy NGAY trước khi React render, tránh flash of unstyled content
// Đọc theme từ localStorage và set data-theme + class 'dark' trên <html>
const INIT_THEME_SCRIPT = `
(function() {
  var darkThemes = ['dark', 'ocean', 'forest', 'sunset', 'cyberpunk', 'terminal-noir'];
  try {
    var saved = localStorage.getItem('portfolio-theme') || 'terminal-noir';
    document.documentElement.setAttribute('data-theme', saved);
    if (darkThemes.indexOf(saved) !== -1) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'terminal-noir');
  }
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script dangerouslySetInnerHTML={{ __html: INIT_THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://ngocnhat.info/#website',
                  url: 'https://ngocnhat.info',
                  name: 'Trần Ngọc Nhật',
                  alternateName: 'Tran Ngoc Nhat',
                  description:
                    'Frontend Technical Leader with 4+ years of experience specializing in React/Next.js. Tech Lead at Mona Media.',
                  inLanguage: ['vi', 'en'],
                  publisher: {
                    '@id': 'https://ngocnhat.info/#person',
                  },
                },
                {
                  '@type': 'Person',
                  '@id': 'https://ngocnhat.info/#person',
                  name: 'Tran Ngoc Nhat',
                  alternateName: 'Trần Ngọc Nhật',
                  url: 'https://ngocnhat.info',
                  image: 'https://ngocnhat.info/og-image.jpg',
                  jobTitle: 'Frontend Technical Leader',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Mona Media',
                  },
                  alumniOf: {
                    '@type': 'CollegeOrUniversity',
                    name: 'Ho Chi Minh City University of Transport',
                  },
                  award: 'Employee of the Year 2025 – Mona Media',
                  knowsAbout: [
                    'React.js',
                    'Next.js',
                    'TypeScript',
                    'Frontend Architecture',
                    'Web Performance',
                    'GraphQL',
                  ],
                  sameAs: [
                    'https://github.com/ngocnhat2k1',
                    'https://www.linkedin.com/in/tran-ngoc-nhat-109a06279/',
                    'https://www.facebook.com/ngocnhat2k1',
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col transition-colors`}
        style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }}
      >
        <Analytics />
        <ScriptClient />
        <LocaleProvider>
          <IntroOverlay />
          <MotionLazyContainer>{children}</MotionLazyContainer>
        </LocaleProvider>
      </body>
    </html>
  )
}
