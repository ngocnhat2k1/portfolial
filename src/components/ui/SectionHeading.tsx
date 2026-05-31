'use client'

import React from 'react'
import { m } from 'framer-motion'
import { useLocale, type Localized } from '@/i18n'

// =============================================
// SectionHeading — tiêu đề khu vực thống nhất
// eyebrow (nhãn nhỏ) + title + subtitle (tuỳ chọn)
// Một thang typography duy nhất cho toàn site.
// Nhận chuỗi thường hoặc object song ngữ (Localized).
// =============================================
type Text = string | Localized

type Props = {
  eyebrow?: Text
  title: Text
  subtitle?: Text
  align?: 'center' | 'left'
  className?: string
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: Props) => {
  const { t } = useLocale()
  const render = (v: Text) => (typeof v === 'string' ? v : t(v))

  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col gap-3 ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[var(--c-primary)]">
          <span className="h-px w-6 bg-[var(--c-primary)] opacity-60" />
          {render(eyebrow)}
        </span>
      )}

      <h2 className="font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight text-[var(--c-text)]">
        {render(title)}
      </h2>

      {subtitle && (
        <p
          className={`text-base md:text-lg text-[var(--c-text-muted)] leading-relaxed ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {render(subtitle)}
        </p>
      )}
    </m.div>
  )
}

export default SectionHeading
