'use client'

import { useReducedMotion } from 'framer-motion'
import { BrutalScroll } from '@/components/brutal_scroll'
import ProjectGrid from './ProjectGrid'
import { projects } from '@/data/projects'
import { sectionTitles } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import { useMediaQuery } from '@/hook/useMediaQuery'

// Re-export để giữ tương thích các import cũ (IProject, projects)
export type { IProject } from '@/data/projects'
export { projects } from '@/data/projects'

const ProjectsPage = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const prefersReducedMotion = useReducedMotion()

  // Desktop + cho phép motion → hiệu ứng 3D; còn lại → lưới card.
  const use3D = isDesktop && !prefersReducedMotion

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-4 sm:px-6">
        <SectionHeading
          eyebrow={{ vi: 'Tuyển chọn', en: 'Selected Work' }}
          title={sectionTitles.projects}
          subtitle={{
            vi: 'Các nền tảng thương mại điện tử, ERP và e-learning tôi đã dẫn dắt và xây dựng.',
            en: 'E-commerce, ERP, and e-learning platforms I have led and built.',
          }}
        />
      </div>

      {use3D ? (
        <div className="mt-4">
          <BrutalScroll projects={projects} />
        </div>
      ) : (
        <div className="mx-auto mt-10 w-full max-w-[var(--container-max)] px-4 sm:px-6">
          <ProjectGrid projects={projects} />
        </div>
      )}
    </div>
  )
}

export default ProjectsPage
