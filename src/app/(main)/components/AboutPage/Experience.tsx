'use client'

import React, { useRef, useEffect } from 'react'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import SpotlightCard from '@/components/SpotlightCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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
      'GPA: 3.2 – Classification: Good',
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
      className="relative pl-10 pb-12 last:pb-0 group"
    >
      {/* Node (chấm tròn trên timeline) */}
      <span
        className="absolute left-[-9px] top-6 w-[20px] h-[20px] rounded-full border-4 border-[color-mix(in_srgb,var(--c-primary)_80%,transparent)] bg-[var(--c-surface)] z-10 
        group-hover:border-[var(--c-primary)] group-hover:shadow-[0_0_15px_color-mix(in_srgb,var(--c-primary)_60%,transparent)] group-hover:scale-125 transition-all duration-300"
      />

      <SpotlightCard className="p-7 hover:-translate-y-1 transition-transform duration-300">
        {/* Tiêu đề */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <span
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mr-3
              \${isWork ? 'bg-[color-mix(in_srgb,var(--c-primary)_15%,transparent)] text-[var(--c-primary)] border border-[color-mix(in_srgb,var(--c-primary)_20%,transparent)]' : 'bg-green-500/15 text-green-500 border border-green-500/20'}`}
            >
              {isWork ? 'Work' : 'Education'}
            </span>
            <h3 className="inline font-bold text-xl md:text-2xl text-[var(--c-text)]">
              {item.company}
            </h3>
          </div>
          <span className="text-sm md:text-base text-[var(--c-text-muted)] font-medium whitespace-nowrap bg-[color-mix(in_srgb,var(--c-surface-2)_40%,transparent)] px-3 py-1 rounded-md">
            {item.period}
          </span>
        </div>

        {/* Vai trò */}
        <p className="text-lg font-semibold text-[color-mix(in_srgb,var(--c-primary)_80%,white)] mb-4">
          {item.role}
        </p>

        {/* Highlights */}
        <ul className="space-y-3">
          {item.highlights.map((h) => (
            <li
              key={h}
              className="text-base text-[var(--c-text-muted)] flex items-start gap-3 leading-relaxed"
            >
              <span className="mt-[8px] w-2 h-2 rounded-sm bg-[var(--c-primary)] flex-shrink-0 opacity-80" />
              {h}
            </li>
          ))}
        </ul>
      </SpotlightCard>
    </m.div>
  )
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !fillRef.current) return

    const container = containerRef.current
    const fill = fillRef.current

    const timelineAnimation = gsap.fromTo(
      fill,
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 50%', // Khi nửa trên của container chạm giữa màn hình
          end: 'bottom 60%', // Khi đáy container chạm 60% màn hình
          scrub: 0.5, // Mượt mà với độ trễ 0.5s so với scroll
        },
      }
    )

    return () => {
      // Cleanup scroll trigger khi unmount
      timelineAnimation.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="relative py-16">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--c-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <h2 className="relative z-10 font-bold text-4xl lg:text-5xl w-full text-center mt-10 mb-16 text-[var(--c-text)]">
        Experience & Education
      </h2>

      <div className="relative max-w-3xl mx-auto lg:px-8 px-4 z-10">
        <div ref={containerRef} className="relative">
          {/* Continuous Timeline Base Line */}
          <div className="absolute left-[0px] top-4 bottom-4 w-[2px] bg-[color-mix(in_srgb,var(--c-surface-2)_80%,transparent)]">
            {/* The fill line that animates down */}
            <div
              ref={fillRef}
              className="absolute top-0 left-0 w-full bg-[var(--c-primary)] shadow-[0_0_8px_var(--c-primary)]"
            ></div>
          </div>

          <div className="flex flex-col">
            {experiences.map((item, index) => (
              <ExperienceItem key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
