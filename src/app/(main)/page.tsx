import HireMe from '@/components/HireMe'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import Skills from './components/AboutPage/Skills'
import Experience from './components/AboutPage/Experience'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ContactPage from './components/ContactPage/ContactPage'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tran Ngoc Nhat – Frontend Team Leader & Software Engineer',
  description:
    'Frontend Developer with 3+ years of experience specializing in React/Next.js. Currently Team Leader at Mona Media, building e-commerce, ERP dashboards, and e-learning systems.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Team Leader',
    'Portfolio',
    'Tran Ngoc Nhat',
  ],
  openGraph: {
    title: 'Tran Ngoc Nhat – Frontend Team Leader',
    description:
      'Portfolio of Tran Ngoc Nhat – 3+ years Frontend Developer. Team Leader at Mona Media.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1035,
        height: 1035,
        alt: 'Tran Ngoc Nhat',
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="w-full relative min-h-[var(--h-main-content)] max-lg:my-10">
      <section id="home" className="lg:h-[var(--h-main-content)]">
        <HomePage />
      </section>

      <section id="about" className="pt-20">
        <h1 className="sr-only">Who is Tran Ngoc Nhat?</h1>
        <AboutPage />
        <Skills />
        <Experience />
      </section>

      <section id="project" className="pt-20">
        <ProjectsPage />
      </section>

      <section id="contact" className="pt-20">
        <h1 className="sr-only">Contact Tran Ngoc Nhat - Frontend Developer</h1>
        <ContactPage />
      </section>

      <ScrollToTopButton />
      {/* <HireMe /> */}
    </div>
  )
}
