'use client'

import React, { useEffect, useRef, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import useThemeEngine, { THEMES, ThemeName } from '@/hook/useThemeEngine'

// =============================================
// ThemePicker – Dropdown panel chọn theme
// Thay thế nút SunIcon/MoonIcon trong NavBar
// =============================================

const ThemePicker = () => {
  const { theme, setTheme, mounted } = useThemeEngine()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Đóng panel khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!mounted) {
    // Tránh hydration mismatch – render skeleton
    return <div className="w-8 h-8 rounded-full bg-dark/10 dark:bg-light/10 animate-pulse" />
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Nút toggle */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Choose theme"
        title="Choose theme"
        className={`
          w-9 h-9 flex items-center justify-center rounded-full
          border-2 border-solid transition-all duration-300
          ${isOpen
            ? 'border-primary bg-primary text-white'
            : 'border-dark/20 dark:border-light/20 hover:border-primary hover:text-primary'
          }
        `}
      >
        {/* Palette icon inline SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 3.735-1.66 6.27-3.563 7.584A3.75 3.75 0 0 1 14.25 21H9.75a3.75 3.75 0 0 1-3.938-1.666C3.91 18.27 2.25 15.735 2.25 12Zm12-.75a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75Zm-3 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3-3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`
              absolute right-0 top-12 z-50 w-52
              rounded-2xl border-2 border-solid border-dark/10 dark:border-light/10
              shadow-xl backdrop-blur-md overflow-hidden
            `}
            style={{ background: 'var(--c-surface)' }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-dark/10 dark:border-light/10">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--c-text-muted)' }}>
                Choose Theme
              </p>
            </div>

            {/* Theme list */}
            <div className="p-2 flex flex-col gap-1">
              {THEMES.map((t) => {
                const isActive = theme === t.name
                return (
                  <button
                    key={t.name}
                    onClick={() => {
                      setTheme(t.name)
                      setIsOpen(false)
                    }}
                    className={`
                      relative flex items-center gap-3 w-full px-3 py-2.5 rounded-xl
                      text-left transition-all duration-200
                      ${isActive
                        ? 'ring-2 ring-primary bg-primary/10'
                        : 'hover:bg-dark/5 dark:hover:bg-light/5'
                      }
                    `}
                  >
                    {/* Color swatches mini preview */}
                    <div className="flex items-center gap-0.5 flex-shrink-0">
                      {/* bg swatch */}
                      <span
                        className="w-4 h-6 rounded-l-md border border-white/20"
                        style={{ background: t.previewColors.bg }}
                      />
                      {/* surface swatch */}
                      <span
                        className="w-3 h-6 border-t border-b border-white/20"
                        style={{ background: t.previewColors.surface }}
                      />
                      {/* primary swatch */}
                      <span
                        className="w-4 h-6 rounded-r-md border border-white/20"
                        style={{ background: t.previewColors.primary }}
                      />
                    </div>

                    {/* Label */}
                    <span className="flex items-center gap-1.5 flex-1">
                      <span className="text-sm leading-none">{t.emoji}</span>
                      <span
                        className={`text-sm font-medium ${isActive ? 'font-bold' : ''}`}
                        style={{ color: 'var(--c-text)' }}
                      >
                        {t.label}
                      </span>
                    </span>

                    {/* Active checkmark */}
                    {isActive && (
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: 'var(--c-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-dark/10 dark:border-light/10">
              <p className="text-[10px]" style={{ color: 'var(--c-text-muted)' }}>
                Theme persisted in localStorage ✨
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemePicker
