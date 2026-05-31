import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import Skills from './components/AboutPage/Skills'
import Experience from './components/AboutPage/Experience'
import Awards from './components/AboutPage/Awards'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ContactPage from './components/ContactPage/ContactPage'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Section from '@/components/ui/Section'
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
    <div className="relative w-full">
      <Section id="home" noPadding className="pt-6 sm:pt-10">
        <HomePage />
      </Section>

      <Section id="about" containerClassName="flex flex-col gap-[var(--section-py)]">
        <AboutPage />
        <Skills />
        <Experience />
        <Awards />
      </Section>

      <Section id="project" bleed>
        <ProjectsPage />
      </Section>

      <Section id="contact">
        <ContactPage />
      </Section>

      <ScrollToTopButton />
    </div>
  )
}
