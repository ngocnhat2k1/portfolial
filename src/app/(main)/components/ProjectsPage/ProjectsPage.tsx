'use client'

import { BrutalScroll } from '@/components/brutal_scroll'
import { projects } from '@/data/projects'
import { useLocale } from '@/i18n'
import { sectionTitles } from '@/data/site'

// Re-export để giữ tương thích các import cũ (IProject, projects)
export type { IProject } from '@/data/projects'
export { projects } from '@/data/projects'

const ProjectsPage = () => {
  const { t } = useLocale()
  return (
    <>
      <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl w-full text-center  my-4 md:my-6 xl:my-8">
        {t(sectionTitles.projects)}
      </h2>
      <BrutalScroll projects={projects} />
    </>
  )
}

export default ProjectsPage
