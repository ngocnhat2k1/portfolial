'use client'

import React from 'react'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import SpotlightCard from '@/components/SpotlightCard'
import { FaTrophy } from 'react-icons/fa'
import { useLocale } from '@/i18n'
import { awards } from '@/data/experience'
import { sectionTitles } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'

const Awards = () => {
  const { t } = useLocale()

  return (
    <div className="relative">
      <SectionHeading
        eyebrow={{ vi: 'Ghi nhận', en: 'Recognition' }}
        title={sectionTitles.awards}
      />

      <div className="max-w-3xl mx-auto px-4 grid grid-cols-1 gap-6 mt-12">
        {awards.map((award, index) => (
          <m.div
            key={index}
            variants={varFade({ durationIn: 0.5 + index * 0.15 }).inUp}
          >
            <SpotlightCard className="p-7">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--c-primary)_15%,transparent)] text-2xl text-[var(--c-primary)] border border-[color-mix(in_srgb,var(--c-primary)_25%,transparent)] shadow-[0_0_18px_color-mix(in_srgb,var(--c-primary)_30%,transparent)]">
                  <FaTrophy />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="font-bold text-xl md:text-2xl text-[var(--c-text)]">
                      {t(award.title)}
                    </h4>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[color-mix(in_srgb,var(--c-primary)_15%,transparent)] text-[var(--c-primary)] border border-[color-mix(in_srgb,var(--c-primary)_20%,transparent)]">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-base text-[var(--c-text-muted)] leading-relaxed">
                    {t(award.description)}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </m.div>
        ))}
      </div>
    </div>
  )
}

export default Awards
