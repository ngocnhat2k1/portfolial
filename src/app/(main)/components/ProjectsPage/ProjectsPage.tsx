'use client'

import React, { useState } from 'react'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import MotionContainer from '@/components/animate/MotionContainer'
import { LinkArrow } from '@/components/icons/icons'
import Link from 'next/link'
import Image from 'next/image'

// =============================================
// Data: Dự án thực tế từ CV + các dự án mới
// =============================================
type IProject = {
  title: string
  description: string
  tech: string[]
  link?: string
  category: string
  preview?: string // đường dẫn ảnh preview /projects/xxx.png
}

const projects: IProject[] = [
  {
    title: 'HydraShop',
    description:
      'High-performance fashion e-commerce platform (Startup). Full shopping experience: product catalog, cart, checkout, order tracking, and SEO optimization.',
    tech: ['Next.js', 'TypeScript', 'TanStack Query', 'GraphQL', 'TailwindCSS'],
    link: 'https://hydrashop.vn',
    category: 'E-Commerce',
    preview: '/projects/hydrashop.png',
  },
  {
    title: 'Mona SkillHub',
    description:
      'Admin Dashboard for content and user management of an e-learning platform. Features complex data tables, analytics, and rich GSAP animations for premium UI.',
    tech: ['React.js', 'TypeScript', 'GSAP', 'MaterialUI', 'GraphQL'],
    link: 'https://skillhub.mona.academy',
    category: 'ERP Dashboard',
  },
  {
    title: 'Khanh Hung Academy',
    description:
      'Online learning system with 100+ active users. Real-time features via Socket.IO: live classes, progress tracking, quizzes, and interactive course content.',
    tech: ['Next.js', 'TypeScript', 'Socket.IO', 'TanStack Query', 'SCSS'],
    link: 'https://khanhhung.academy/learn',
    category: 'E-Learning',
  },
  {
    title: 'Cinestar',
    description:
      'Booking system for Cinestar cinema chain. Pixel-perfect seat selection UI, schedule browsing, ticket booking flow, and membership integration.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Zustand', 'REST API'],
    link: 'https://cinestar.com.vn',
    category: 'Booking System',
    preview: '/projects/cinestar.png',
  },
  {
    title: 'Bachlong Mobile',
    description:
      'Electronics retail e-commerce website with complex product variants, comparison features, and a robust product search system for a large retail chain.',
    tech: ['Next.js', 'TypeScript', 'Ant Design', 'GraphQL', 'Zustand'],
    link: 'https://bachlongmobile.com',
    category: 'E-Commerce',
    preview: '/projects/bachlongmobile.png',
  },
  {
    title: 'Kim Thanh',
    description:
      'Motorcycle parts retail e-commerce solution with product catalog, category management, and a streamlined checkout flow for an automotive parts chain.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'REST API', 'TanStack Query'],
    link: 'https://kimthanh.com.vn',
    category: 'E-Commerce',
    preview: '/projects/kimthanh.png',
  },
  {
    title: 'Sieu Thi Nghe Nhin',
    description:
      'Consumer electronics e-commerce platform with wide product range, advanced filtering, and optimized performance for a multi-category electronics store.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL', 'TanStack Query'],
    link: 'https://sieuthinghenhin.vn',
    category: 'E-Commerce',
    preview: '/projects/sieuthinghenhin.png',
  },
  {
    title: 'Sophie Distributor',
    description:
      'Premium beauty & cosmetics distribution platform with product showcase, distributor portal, and e-commerce functionality for an international brand.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'REST API', 'Zustand'],
    link: 'https://sophiedistributor.com',
    category: 'E-Commerce',
    preview: '/projects/sophiedistributor.png',
  },
  {
    title: 'Nhathuoc Pharceco',
    description:
      'Pharmaceutical e-commerce platform with product management, prescription handling, and online ordering for a pharmacy chain.',
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'TailwindCSS', 'TanStack Query'],
    link: 'https://nhathuocpharceco.monaweb.dev',
    category: 'E-Commerce',
  },
]

// =============================================
// Badge màu theo category
// =============================================
const categoryColors: Record<string, string> = {
  'E-Commerce': 'bg-blue-500',
  'ERP Dashboard': 'bg-purple-500',
  'E-Learning': 'bg-green-500',
  'Booking System': 'bg-orange-500',
  Personal: 'bg-gray-500',
}

// Lấy danh sách categories duy nhất
const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

// =============================================
// ProjectCard: card với ảnh preview
// =============================================
const ProjectCard = ({ project, index }: { project: IProject; index: number }) => {
  return (
    <m.div
      variants={varFade({ durationIn: 0.4 + (index % 6) * 0.08 }).inUp}
      className="group border-2 border-solid border-dark/10 dark:border-light/10 rounded-2xl overflow-hidden
        hover:border-primary dark:hover:border-primary hover:shadow-[4px_4px_0px_0px] hover:shadow-primary/30
        transition-all duration-300 flex flex-col bg-white dark:bg-dark"
    >
      {/* Ảnh preview */}
      <div className="relative w-full h-44 bg-gray-100 dark:bg-gray-800 overflow-hidden flex-shrink-0">
        {project.preview ? (
          <Image
            src={project.preview}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Placeholder khi không có ảnh */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30">
            <div className="text-4xl font-bold text-primary/40 select-none">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        {/* Badge category overlay */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold text-white px-2.5 py-1 rounded-full shadow-md ${categoryColors[project.category] ?? 'bg-gray-500'}`}
        >
          {project.category}
        </span>
      </div>

      {/* Nội dung card */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tiêu đề */}
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Mô tả */}
        <p className="text-sm text-dark/60 dark:text-light/60 leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-medium text-dark/40 dark:text-light/40 px-1">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Link */}
        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline self-start mt-auto"
          >
            View Project
            <LinkArrow className="!w-4 pl-0.5 pb-0.5 inline-block" />
          </Link>
        )}
      </div>
    </m.div>
  )
}

// =============================================
// ProjectsPage: trang chính
// =============================================
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <MotionContainer>
      {/* Heading */}
      <m.div variants={varFade({ durationIn: 0.4 }).inDown}>
        <div className="w-full text-center mb-2">
          <h1 className="font-bold text-4xl lg:text-5xl">Projects</h1>
          <p className="mt-4 text-dark/60 dark:text-light/60 text-base lg:text-lg max-w-2xl mx-auto">
            Real-world projects shipped to production — from e-commerce platforms to ERP dashboards
            and e-learning systems.
          </p>
        </div>
      </m.div>

      {/* Filter tabs */}
      <m.div
        variants={varFade({ durationIn: 0.5 }).inUp}
        className="flex flex-wrap justify-center gap-2 mt-8 mb-8"
      >
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all duration-200
              ${
                activeCategory === cat
                  ? 'bg-primary border-primary text-white'
                  : 'border-dark/20 dark:border-light/20 hover:border-primary hover:text-primary'
              }`}
          >
            {cat}
          </button>
        ))}
      </m.div>

      {/* Grid dự án */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </MotionContainer>
  )
}

export default ProjectsPage
