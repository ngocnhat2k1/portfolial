'use client'

import useActiveLink from '@/hook/useActiveLink'
import { m } from 'framer-motion'
import Link from 'next/link'
import { type } from 'os'

type Props = {
  name: string
  href: string
}

const ItemNavBar = ({ name, href }: Props) => {
  const { active } = useActiveLink(href)

  return (
    <m.div
      className={`hover:bg-primary hover:text-white mx-auto px-8 rounded-full ease-in 
      ${active ? 'bg-secondary text-white' : ''} `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      <Link href={`${href}`}>{name}</Link>
    </m.div>
  )
}

export default ItemNavBar
