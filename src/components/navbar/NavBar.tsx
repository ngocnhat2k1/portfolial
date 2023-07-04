'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import ItemNavBar from './ItemNavBar'
import { m } from 'framer-motion'
import useThemeSwitcher from '@/hook/useThemeSwitcher'
import { MoonIcon, SunIcon } from '../icons/icons'

const ItemNavBars = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

type Props = {}

function NavBar({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [theme, setTheme] = useThemeSwitcher()
  const handleClick = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }

  return (
    <header className="h-full py-8 font-medium flex justify-between align-middle leading-[44px] items-center px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44  ">
      <div>
        <Logo />
      </div>
      <div>
        <nav className="grid-cols-4 gap-1 h-fit hidden lg:grid ">
          {ItemNavBars.map((item, index) => (
            <ItemNavBar key={index} name={item.name} href={item.href} />
          ))}
        </nav>
      </div>

      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="hidden lg:block"
      >
        {theme === 'dark' ? (
          <SunIcon className="fill-dark" />
        ) : (
          <MoonIcon className="fill-dark" />
        )}
      </button>

      {isOpen && (
        <m.div
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden
      bg-light/90 dark:bg-dark/90 dark:text-light rounded-2xl gap-2 z-10 overflow-y-hidden "
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
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="block lg:hidden"
          >
            {theme === 'dark' ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </m.div>
      )}
      <button
        className="justify-center items-center flex-col gap-1  flex lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`dark:bg-light bg-dark inline-block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`dark:bg-light bg-dark inline-block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`dark:bg-light bg-dark inline-block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1.5 ' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
    </header>
  )
}

export default NavBar
