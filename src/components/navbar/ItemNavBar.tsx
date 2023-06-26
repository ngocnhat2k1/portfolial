'use client'

import useActiveLink from '@/hook/useActiveLink'
import { m } from 'framer-motion'
import Link from 'next/link'

type Props = {
  name: string
  href: string
  css?: string
  toggle?: () => void
}

const ItemNavBar = ({ name, href, css, toggle }: Props) => {
  const { active } = useActiveLink(href)

  return (
    <m.div
      className={` hover:bg-primary hover:text-white mx-auto px-8 rounded-full ease-in hover:opacity-75 
      ${active ? 'bg-primary text-white' : ''} ${css} `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      onClick={toggle}
    >
      <Link href={`${href}`}>{name}</Link>
    </m.div>
  )
}

export default ItemNavBar
