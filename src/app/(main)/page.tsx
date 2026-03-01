import HireMe from '@/components/HireMe'
import HomePage from './components/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tran Ngoc Nhat – Frontend Team Leader & Software Engineer',
  description:
    'Frontend Developer with 3+ years of experience specializing in React/Next.js. Currently Team Leader at Mona Media, building e-commerce, ERP dashboards, and e-learning systems.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Team Leader', 'Portfolio', 'Tran Ngoc Nhat'],
  openGraph: {
    title: 'Tran Ngoc Nhat – Frontend Team Leader',
    description:
      'Portfolio of Tran Ngoc Nhat – 3+ years Frontend Developer. Team Leader at Mona Media.',
    images: [{ url: '/og-image.jpg', width: 1035, height: 1035, alt: 'Tran Ngoc Nhat' }],
  },
}

export default function Home() {
  return (
    /*
     * Home container: chiếm đúng phần còn lại sau header/footer
     * height = 100vh - var(--h-header) - var(--h-footer)
     * overflow-hidden: không cho phép scroll
     */
    <div
      className="w-full relative overflow-hidden"
      style={{ height: 'var(--h-main-content)' }}
    >
      <HomePage />
      <HireMe />
    </div>
  )
}

