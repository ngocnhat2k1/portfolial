import AboutPage from '../components/AboutPage/AboutPage'
import Skills from '../components/AboutPage/Skills'
import Experience from '../components/AboutPage/Experience'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Tran Ngoc Nhat – Frontend Team Leader at Mona Media with 3+ years in React/Next.js. Skills: TypeScript, GraphQL, TanStack Query, Zustand, TailwindCSS, MUI, and more.',
  keywords: [
    'About Tran Ngoc Nhat',
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
      <AboutPage />
      <Skills />
      <Experience />
    </>
  )
}

export default About
