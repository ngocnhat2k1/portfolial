'use client'

import React from 'react'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'

// Dữ liệu kinh nghiệm, học vấn từ CV thực tế
type IExperience = {
  company: string
  role: string
  period: string
  type: 'work' | 'education'
  highlights: string[]
}

const experiences: IExperience[] = [
  {
    company: 'Mona Media',
    role: 'Frontend Team Leader – Retail Solution',
    period: 'Sep 2023 – Present',
    type: 'work',
    highlights: [
      'Lead a frontend team: task management, work distribution, progress tracking',
      'Develop high-performance web apps using React.js, Next.js (App/Pages Router)',
      'Apply OOP & S.O.L.I.D principles to build highly reusable components',
      'Research & develop E-commerce, ERP, and E-learning systems',
      'Optimize SEO performance and Google Lighthouse scores',
      'Conduct code reviews and maintain code quality standards',
    ],
  },
  {
    company: 'University of Transport HCM City (UTH)',
    role: 'Bachelor of Information Technology – GPA 3.2 / Distinction',
    period: '2019 – 2023',
    type: 'education',
    highlights: [
      'Major: Information Technology',
      'GPA: 3.2 – Classification: Khá (Good)',
      'TOEIC Certificate: 500',
    ],
  },
]

const ExperienceItem = ({
  item,
  index,
}: {
  item: IExperience
  index: number
}) => {
  const isWork = item.type === 'work'

  return (
    <m.div
      variants={varFade({ durationIn: 0.5 + index * 0.15 }).inLeft}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Thanh dọc timeline */}
      <span className="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-primary bg-light dark:bg-dark z-10" />
      {index < experiences.length - 1 && (
        <span className="absolute left-[7px] top-5 w-0.5 h-full bg-primary/30" />
      )}

      <div
        className="border-2 border-solid border-dark/20 dark:border-light/20 rounded-2xl p-5
        hover:border-primary dark:hover:border-primary transition-colors duration-300"
      >
        {/* Tiêu đề */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <span
              className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mr-2
              ${isWork ? 'bg-primary/10 text-primary' : 'bg-green-500/10 text-green-600 dark:text-green-400'}`}
            >
              {isWork ? 'Work' : 'Education'}
            </span>
            <h3 className="inline font-bold text-lg">{item.company}</h3>
          </div>
          <span className="text-sm text-dark/60 dark:text-light/50 font-medium whitespace-nowrap">
            {item.period}
          </span>
        </div>

        {/* Vai trò */}
        <p className="text-base font-semibold text-primary mb-3">{item.role}</p>

        {/* Highlights */}
        <ul className="space-y-1.5">
          {item.highlights.map((h) => (
            <li
              key={h}
              className="text-sm text-dark/70 dark:text-light/70 flex items-start gap-2"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </m.div>
  )
}

const Experience = () => {
  return (
    <>
      <div className="font-bold text-4xl lg:text-5xl w-full text-center mt-16 mb-10">
        Experience & Education
      </div>
      <div className="max-w-3xl mx-auto lg:px-8 px-2">
        {experiences.map((item, index) => (
          <ExperienceItem key={item.company} item={item} index={index} />
        ))}
      </div>
    </>
  )
}

export default Experience
