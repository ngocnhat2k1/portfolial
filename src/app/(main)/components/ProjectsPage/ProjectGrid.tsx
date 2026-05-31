'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import TechBadge from '@/components/ui/TechBadge'
import { useLocale } from '@/i18n'
import { projects as allProjects, type IProject } from '@/data/projects'

// =============================================
// ProjectGrid — lưới dự án responsive (mobile & reduced-motion)
// Đọc cùng nguồn dữ liệu với hiệu ứng 3D; có lọc theo category.
// =============================================

const ProjectCard = ({ project }: { project: IProject }) => {
  const { t } = useLocale()
  const href = project.link || '#'

  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--r-xl)] border border-[var(--c-border)] bg-[var(--c-surface)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] hover:border-[color-mix(in_srgb,var(--c-primary)_40%,transparent)]"
    >
      {/* Ảnh preview */}
      <Link
        href={href}
        target={project.link ? '_blank' : undefined}
        rel={project.link ? 'noopener noreferrer' : undefined}
        className="relative block aspect-[16/10] overflow-hidden bg-[var(--c-surface-2)]"
      >
        {project.preview && (
          <Image
            src={project.preview}
            alt={`${project.title} — ${t(project.category)}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute left-3 top-3 inline-flex rounded-full bg-[color-mix(in_srgb,var(--c-bg)_70%,transparent)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--c-primary)] backdrop-blur-md">
          {t(project.category)}
        </span>
        {project.period && (
          <span className="absolute right-3 top-3 inline-flex rounded-full bg-[color-mix(in_srgb,var(--c-bg)_70%,transparent)] px-2.5 py-1 text-[11px] font-medium text-[var(--c-text-muted)] backdrop-blur-md">
            {project.period}
          </span>
        )}
      </Link>

      {/* Nội dung */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[var(--c-text)]">
            <Link
              href={href}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noopener noreferrer' : undefined}
              className="transition-colors hover:text-[var(--c-primary)]"
            >
              {project.title}
            </Link>
          </h3>
          {project.link && (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Mở ${project.title}`}
              className="mt-0.5 flex-shrink-0 text-[var(--c-text-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--c-primary)]"
            >
              <FiArrowUpRight className="h-5 w-5" />
            </Link>
          )}
        </div>

        {project.role && (
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--c-primary)]">
            {t(project.role)}
          </span>
        )}

        {project.metric && (
          <p className="flex items-center gap-1.5 text-sm font-semibold text-[var(--c-text)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--c-primary)]" />
            {t(project.metric)}
          </p>
        )}

        <p className="line-clamp-3 text-sm leading-relaxed text-[var(--c-text-muted)]">
          {t(project.description)}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tech.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </div>
    </m.article>
  )
}

const ProjectGrid = ({ projects = allProjects }: { projects?: IProject[] }) => {
  const { t } = useLocale()
  const [active, setActive] = useState<string>('all')

  // Danh sách category duy nhất (key = bản tiếng Anh, ổn định giữa 2 ngôn ngữ)
  const categories = useMemo(() => {
    const map = new Map<string, IProject['category']>()
    projects.forEach((p) => map.set(p.category.en, p.category))
    return Array.from(map.entries()).map(([key, cat]) => ({ key, cat }))
  }, [projects])

  const filtered = useMemo(
    () =>
      active === 'all'
        ? projects
        : projects.filter((p) => p.category.en === active),
    [active, projects]
  )

  const pill = (isActive: boolean) =>
    `rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 border ${
      isActive
        ? 'bg-[var(--c-primary)] text-[var(--c-primary-content)] border-[var(--c-primary)] shadow-[var(--shadow-sm)]'
        : 'text-[var(--c-text-muted)] border-[var(--c-border)] hover:text-[var(--c-primary)] hover:border-[color-mix(in_srgb,var(--c-primary)_40%,transparent)]'
    }`

  return (
    <div className="w-full">
      {/* Bộ lọc category */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button onClick={() => setActive('all')} className={pill(active === 'all')}>
          {t({ vi: 'Tất cả', en: 'All' })}
        </button>
        {categories.map(({ key, cat }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={pill(active === key)}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      {/* Lưới card */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectGrid
