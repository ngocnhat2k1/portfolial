'use client'

import React from 'react'
import { useLocale, LOCALES } from '@/i18n'

// =============================================
// LanguageToggle – chuyển đổi nhanh Tiếng Việt / English
// Đặt cạnh ThemePicker trong NavBar
// =============================================
const LanguageToggle = () => {
  const { locale, setLocale, mounted } = useLocale()

  if (!mounted) {
    return (
      <div className="w-[68px] h-9 rounded-full bg-dark/10 dark:bg-light/10 animate-pulse" />
    )
  }

  return (
    <div
      className="relative flex items-center rounded-full border-2 border-solid border-dark/20 dark:border-light/20 p-0.5"
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map((l) => {
        const isActive = locale === l.code
        return (
          <button
            key={l.code}
            onClick={() => setLocale(l.code)}
            aria-pressed={isActive}
            title={l.label}
            className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
              isActive
                ? 'bg-[var(--c-primary)] text-[var(--c-primary-content)] shadow-sm'
                : 'text-[var(--c-text-muted)] hover:text-[var(--c-primary)]'
            }`}
          >
            {l.short}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageToggle
