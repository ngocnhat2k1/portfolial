import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import ItemNavBar from './ItemNavBar'

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
  return (
    <header className="h-full px-44 py-8 font-medium flex justify-between align-middle leading-[44px]">
      <div>
        <Logo />
      </div>
      <nav className="grid grid-cols-4 gap-1  h-fit ">
        {ItemNavBars.map((item, index) => (
          <ItemNavBar key={index} name={item.name} href={item.href} />
        ))}
      </nav>
    </header>
  )
}

export default NavBar
