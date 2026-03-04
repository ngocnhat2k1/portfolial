'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Props = {
  name: string
  href: string
  css?: string
  toggle?: () => void
  isActive?: boolean
}

const ItemNavBar = ({ name, href, css, toggle, isActive }: Props) => {
  const router = useRouter()
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link, we let default behavior or manually scroll
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.getElementById(href.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      toggle && toggle()
    } else {
      toggle && toggle()
      router.push(href)
    }
  }

  return (
    <m.div
      className={` hover:bg-primary hover:text-white mx-auto px-8 rounded-full ease-in hover:opacity-75 
      ${isActive ? 'bg-primary text-white' : ''} ${css} `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      <Link href={`${href}`} onClick={handleClick}>
        {name}
      </Link>
    </m.div>
  )
}

export default ItemNavBar
