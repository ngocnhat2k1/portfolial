import MotionLazyContainer from '@/components/animate/MotionLazyContainer'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar/NavBar'

const inter = Inter({ subsets: ['latin'] })
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex min-h-screen flex-col  dark:bg-dark dark:text-light transition-colors bg-light`}
      >
        <MotionLazyContainer>{children}</MotionLazyContainer>
      </body>
    </html>
  )
}

