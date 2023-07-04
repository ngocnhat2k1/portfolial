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
  title: 'Ngoc Nhat Tran',
  description: 'Portfolio of Ngoc Nhat Tran',
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
