import ProjectsPage from '../components/ProjectsPage/ProjectsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Portfolio projects by Tran Ngoc Nhat – e-commerce platforms (HydraShop, Bachlong Mobile, Kim Thanh), ERP dashboards (Mona SkillHub), and e-learning systems (Khanh Hung Academy, Cinestar).',
  keywords: [
    'Portfolio Projects',
    'HydraShop',
    'Bachlong Mobile',
    'Mona SkillHub',
    'Khanh Hung Academy',
    'Cinestar',
    'E-commerce Next.js',
    'Frontend Portfolio',
  ],
  openGraph: {
    title: 'Projects – Tran Ngoc Nhat',
    description: 'Real-world projects: e-commerce, ERP dashboards, e-learning systems built with Next.js & React.',
    images: [{ url: '/projects/hydrashop.png', width: 1280, height: 800, alt: 'HydraShop Project Preview' }],
  },
}

const Project = () => {
  return <ProjectsPage />
}

export default Project
