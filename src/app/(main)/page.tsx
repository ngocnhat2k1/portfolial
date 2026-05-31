import HireMe from '@/components/HireMe'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import Skills from './components/AboutPage/Skills'
import Experience from './components/AboutPage/Experience'
import Awards from './components/AboutPage/Awards'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ContactPage from './components/ContactPage/ContactPage'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tran Ngoc Nhat – Frontend Technical Leader',
  description:
    'Frontend Technical Leader with 4+ years of experience specializing in React/Next.js. Tech Lead at Mona Media, building e-commerce, ERP dashboards, and e-learning systems.',
  keywords: [
    'Frontend Technical Leader',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Tech Lead',
    'Portfolio',
    'Tran Ngoc Nhat',
  ],
  openGraph: {
    title: 'Tran Ngoc Nhat – Frontend Technical Leader',
    description:
      'Portfolio of Tran Ngoc Nhat – Frontend Technical Leader with 4+ years experience. Tech Lead at Mona Media.',
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
      <section
        id="home"
        className="container mx-auto lg:h-[var(--h-main-content)]"
      >
        <HomePage />
      </section>

      <section id="about" className="container mx-auto pt-10 md:pt-12 xl:pt-16">
        <AboutPage />
        <Skills />
        <Experience />
        <Awards />
      </section>

      <section id="project" className="w-full pt-10 md:pt-12 xl:pt-16">
        <ProjectsPage />
      </section>

      <section
        id="contact"
        className="container mx-auto pt-10 md:pt-12 xl:pt-16"
      >
        <ContactPage />
      </section>

      <ScrollToTopButton />
      {/* <HireMe /> */}
    </div>
  )
}
