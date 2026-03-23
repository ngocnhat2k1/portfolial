'use client'

import Link from 'next/link'
import { m } from 'framer-motion'

const Logo = () => {
  return (
    <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href="/" className="flex items-center gap-0 select-none">
        <svg
          viewBox="0 0 220 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 sm:h-10 w-auto"
        >
          {/* Left bracket < */}
          <text
            x="0"
            y="34"
            fontFamily="'Courier New', monospace"
            fontSize="30"
            fontWeight="700"
            fill="var(--c-primary)"
          >
            {'<'}
          </text>
          {/* Name text */}
          <text
            x="22"
            y="33"
            fontFamily="'Montserrat', sans-serif"
            fontSize="26"
            fontWeight="700"
            fill="var(--c-text)"
            letterSpacing="-0.5"
          >
            Ngọc Nhật
          </text>
          {/* "Dev" with primary color */}
          <text
            x="160"
            y="33"
            fontFamily="'Montserrat', sans-serif"
            fontSize="26"
            fontWeight="700"
            fill="var(--c-primary)"
            letterSpacing="-0.5"
          >
            Dev
          </text>
          {/* Right bracket /> */}
          <text
            x="195"
            y="34"
            fontFamily="'Courier New', monospace"
            fontSize="30"
            fontWeight="700"
            fill="var(--c-primary)"
          >
            {'/>'}
          </text>
        </svg>
      </Link>
    </m.div>
  )
}

export default Logo
