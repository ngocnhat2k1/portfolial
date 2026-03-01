'use client'

import React from 'react'
import Logo from './Logo'
import ItemNavBar from './ItemNavBar'
import { m } from 'framer-motion'
import ThemePicker from '@/components/theme_picker/theme_picker'

const ItemNavBars = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

type Props = {}

function NavBar({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }

  return (
    <header className="h-full py-8 font-medium flex justify-between align-middle leading-[44px] items-center px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44">
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Desktop Nav */}
      <div>
        <nav className="grid-cols-4 gap-1 h-fit hidden lg:grid">
          {ItemNavBars.map((item, index) => (
            <ItemNavBar key={index} name={item.name} href={item.href} />
          ))}
        </nav>
      </div>

      {/* Desktop ThemePicker */}
      <div className="hidden lg:flex items-center">
        <ThemePicker />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden rounded-2xl gap-2 z-10 overflow-y-hidden py-8"
          style={{ background: 'var(--c-surface)' }}
        >
          <nav>
            {ItemNavBars.map((item, index) => (
              <ItemNavBar
                key={index}
                name={item.name}
                href={item.href}
                css="my-6 min-w-[40vw] text-center"
                toggle={handleClick}
              />
            ))}
          </nav>
          {/* Theme picker trong mobile menu */}
          <div className="mt-4">
            <ThemePicker />
          </div>
        </m.div>
      )}

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
    </header>
  )
}

export default NavBar
