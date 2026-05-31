'use client'

import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import ItemNavBar from './ItemNavBar'
import { m, useScroll, useMotionValueEvent } from 'framer-motion'
import ThemePicker from '@/components/theme_picker/theme_picker'
import LanguageToggle from './LanguageToggle'
import { useScrollSpy } from '@/hook/useScrollSpy'
import { useLocale } from '@/i18n'
import { navItems } from '@/data/site'

type Props = {}

function NavBar({}: Props) {
  const { t } = useLocale()
  const [isOpen, setIsOpen] = React.useState(false)

  // Use scroll spy to track the active section
  const sectionIds = navItems.map((item) => item.id)
  const activeSectionId = useScrollSpy(sectionIds)

  // Auto-hide header logic
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()!
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const handleClick = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }

  // Effect to close mobile menu on section click and route change
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpen])

  return (
    <m.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="sticky top-0 z-50 py-4 lg:py-8 font-medium flex justify-between align-middle leading-[44px] items-center px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44"
      style={{ backgroundColor: 'var(--c-surface)', opacity: 0.95 }}
    >
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Desktop Nav */}
      <div>
        <nav className="grid-cols-4 gap-1 h-fit hidden lg:grid">
          {navItems.map((item, index) => (
            <ItemNavBar
              key={index}
              name={t(item.label)}
              href={item.href}
              isActive={activeSectionId === item.id}
            />
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          {/* overlay  */}
          <div
            onClick={handleClick}
            className="fixed w-full h-full top-0 left-0 z-10 "
            style={{
              inset: 0,
              backgroundColor: 'var(--c-overlay)',
              backdropFilter: 'blur(4px)',
              transition: 'opacity 0.3s ease',
            }}
          ></div>
          <m.div
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            className="min-w-[70vw] max-w-[90vw] max-h-[85vh] flex flex-col justify-between items-center fixed top-1/2 left-1/2 lg:hidden rounded-2xl gap-2 z-10 overflow-y-auto py-8 shadow-[var(--shadow-lg)] border border-[var(--c-border)]"
            style={{ background: 'var(--c-surface)' }}
          >
            <nav>
              {navItems.map((item, index) => (
                <ItemNavBar
                  key={index}
                  name={t(item.label)}
                  href={item.href}
                  css="my-6 min-w-[40vw] text-center"
                  toggle={handleClick}
                  isActive={activeSectionId === item.id}
                />
              ))}
            </nav>
          </m.div>
        </>
      )}
      <div className="flex items-center gap-3">
        {/* Language toggle */}
        <LanguageToggle />
        {/* Theme picker */}
        <ThemePicker />
        {/* Hamburger Button (Mobile) */}
        <button
          className="justify-center items-center flex-col gap-1 flex lg:hidden"
          onClick={handleClick}
        >
          <span
            className={`inline-block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
            }`}
            style={{ background: 'var(--c-text)' }}
          />
          <span
            className={`inline-block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ background: 'var(--c-text)' }}
          />
          <span
            className={`inline-block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
            }`}
            style={{ background: 'var(--c-text)' }}
          />
        </button>
      </div>
    </m.header>
  )
}

export default NavBar
