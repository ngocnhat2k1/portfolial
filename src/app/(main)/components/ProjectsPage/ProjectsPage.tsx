'use client'

import { BrutalScroll } from '@/components/brutal_scroll'

// =============================================
// Data: Dự án thực tế từ CV + các dự án mới
// =============================================
export type IProject = {
  title: string
  description: string
  tech: string[]
  link?: string
  category: string
  preview?: string // đường dẫn ảnh preview /projects/xxx.png
  mobilePreview?: string // đường dẫn ảnh mobile /projects/xxx_mobile.png
}

export const projects: IProject[] = [
  {
    title: 'HydraShop',
    description:
      'High-performance fashion e-commerce platform (Startup). Full shopping experience: product catalog, cart, checkout, order tracking, and SEO optimization.',
    tech: ['Next.js', 'TypeScript', 'TanStack Query', 'GraphQL', 'TailwindCSS'],
    link: 'https://hydrashop.vn',
    category: 'E-Commerce',
    preview: '/projects/hydrashop.png',
    mobilePreview: '/projects/hydrashop_mobile.png',
  },
  {
    title: 'Mona SkillHub',
    description:
      'Admin Dashboard for content and user management of an e-learning platform. Features complex data tables, analytics, and rich GSAP animations for premium UI.',
    tech: ['React.js', 'TypeScript', 'GSAP', 'MaterialUI', 'GraphQL'],
    link: 'https://skillhub.mona.academy',
    category: 'ERP Dashboard',
    preview: '/projects/skillhub.png',
    mobilePreview: '/projects/skillhub_mobile.png',
  },
  {
    title: 'Khanh Hung Academy',
    description:
      'Online learning system with 100+ active users. Real-time features via Socket.IO: live classes, progress tracking, quizzes, and interactive course content.',
    tech: ['Next.js', 'TypeScript', 'Socket.IO', 'TanStack Query', 'SCSS'],
    link: 'https://khanhhung.academy/learn',
    category: 'E-Learning',
    preview: '/projects/khanhhung.png',
    mobilePreview: '/projects/khanhhung_mobile.png',
  },
  {
    title: 'Cinestar',
    description:
      'Booking system for Cinestar cinema chain. Pixel-perfect seat selection UI, schedule browsing, ticket booking flow, and membership integration.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Zustand', 'REST API'],
    link: 'https://cinestar.com.vn',
    category: 'Booking System',
    preview: '/projects/cinestar.png',
    mobilePreview: '/projects/cinestar_mobile.png',
  },
  {
    title: 'Bachlong Mobile',
    description:
      'Electronics retail e-commerce website with complex product variants, comparison features, and a robust product search system for a large retail chain.',
    tech: ['Next.js', 'TypeScript', 'Ant Design', 'GraphQL', 'Zustand'],
    link: 'https://bachlongmobile.com',
    category: 'E-Commerce',
    preview: '/projects/bachlongmobile.png',
    mobilePreview: '/projects/bachlongmobile_mobile.png',
  },
  {
    title: 'Kim Thanh',
    description:
      'Motorcycle parts retail e-commerce solution with product catalog, category management, and a streamlined checkout flow for an automotive parts chain.',
    tech: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'REST API',
      'TanStack Query',
    ],
    link: 'https://kimthanh.com.vn',
    category: 'E-Commerce',
    preview: '/projects/kimthanh.png',
    mobilePreview: '/projects/kimthanh_mobile.png',
  },
  {
    title: 'Sieu Thi Nghe Nhin',
    description:
      'Consumer electronics e-commerce platform with wide product range, advanced filtering, and optimized performance for a multi-category electronics store.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL', 'TanStack Query'],
    link: 'https://sieuthinghenhin.vn',
    category: 'E-Commerce',
    preview: '/projects/sieuthinghenhin.png',
    mobilePreview: '/projects/sieuthinghenhin_mobile.png',
  },
  {
    title: 'Sophie Distributor',
    description:
      'Premium beauty & cosmetics distribution platform with product showcase, distributor portal, and e-commerce functionality for an international brand.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'REST API', 'Zustand'],
    link: 'https://sophiedistributor.com',
    category: 'E-Commerce',
    preview: '/projects/sophiedistributor.png',
    mobilePreview: '/projects/sophiedistributor_mobile.png',
  },
  {
    title: 'Nhathuoc Pharceco',
    description:
      'Pharmaceutical e-commerce platform with product management, prescription handling, and online ordering for a pharmacy chain.',
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'TailwindCSS', 'TanStack Query'],
    link: 'https://nhathuocpharceco.monaweb.dev',
    category: 'E-Commerce',
    preview: '/projects/nhathuocpharceco.png',
    mobilePreview: '/projects/nhathuocpharceco_mobile.png',
  },
  {
    title: 'Labee',
    description: 'Modern and comprehensive web platform for Labee.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://labee.vn',
    category: 'E-Commerce',
    preview: '/projects/labee.png',
    mobilePreview: '/projects/labee_mobile.png',
  },
  {
    title: 'Inwine',
    description: 'Premium wine e-commerce and distribution platform.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://inwine.vn',
    category: 'E-Commerce',
    preview: '/projects/inwine.png',
    mobilePreview: '/projects/inwine_mobile.png',
  },
  {
    title: 'Wiisnt',
    description:
      'Innovative platform matching professionals with opportunities.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://wiisnt.vn',
    category: 'Corporate',
    preview: '/projects/wiisnt.png',
    mobilePreview: '/projects/wiisnt_mobile.png',
  },
  {
    title: 'Yến Đảo Cần Giờ',
    description: 'E-commerce site for premium bird nest products from Cần Giờ.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://yendaocangio.com',
    category: 'E-Commerce',
    preview: '/projects/yendaocangio.png',
    mobilePreview: '/projects/yendaocangio_mobile.png',
  },
  {
    title: 'Tuấn Kiệt Academy',
    description: 'Educational platform offering diverse courses and training.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://tuankiet.academy',
    category: 'E-Learning',
    preview: '/projects/tuankiet.png',
    mobilePreview: '/projects/tuankiet_mobile.png',
  },
]

const ProjectsPage = () => {
  return (
    <>
      <h2 className="relative z-10 font-bold text-4xl lg:text-5xl w-full text-center mt-10 mb-16 text-[var(--c-text)]">
        My projects
      </h2>
      <BrutalScroll projects={projects} />
    </>
  )
}

export default ProjectsPage
