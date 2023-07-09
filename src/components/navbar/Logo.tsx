'use client'

import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'
import iconDark from '../../public/faviconDark.png'

const Logo = () => {


  return (
    <m.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Link href="/">
        {/* {Logo ? (
          <Image alt="Logo" src={iconDark} width={80} height={50} />
        ) : (
          <Image alt="Logo" src="/favicon.ico" width={80} height={50} />
        )} */}
        <Image alt="Logo" src='/favicon.ico' width={80} height={50} />
      </Link>
    </m.div>
  )
}

export default Logo
