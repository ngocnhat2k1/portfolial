'use client'

import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'

const Logo = () => {
  return (
    <m.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Link href="/">
        <Image alt="Logo" src="/favicon.ico" width={80} height={50} />
      </Link>
    </m.div>
  )
}

export default Logo
