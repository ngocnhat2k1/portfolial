import AboutPage from '../components/AboutPage/AboutPage'
import Skills from '../components/AboutPage/Skills'
import Experience from '../components/AboutPage/Experience'
import Awards from '../components/AboutPage/Awards'
import Section from '@/components/ui/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Tran Ngoc Nhat – Frontend Technical Leader at Mona Media with 4+ years in React/Next.js. Skills: TypeScript, GraphQL, TanStack Query, Zustand, Redux Toolkit, TailwindCSS, MUI, and more.',
  keywords: [
    'About Tran Ngoc Nhat',
    'Frontend Technical Leader',
    'Frontend Developer Vietnam',
    'React Next.js TypeScript',
    'TanStack Query',
    'GraphQL',
    'Zustand',
    'Mona Media',
  ],
}

const About = () => {
  return (
    <>
      <h1 className="sr-only">Who is Tran Ngoc Nhat?</h1>
      <Section containerClassName="flex flex-col gap-[var(--section-py)]">
        <AboutPage />
        <Skills />
        <Experience />
        <Awards />
      </Section>
    </>
  )
}

export default About
