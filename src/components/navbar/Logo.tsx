'use client'

import Link from 'next/link'
import { m } from 'framer-motion'

// =============================================
// Logo – wordmark dựng bằng HTML/CSS (tự co giãn, dùng biến theme)
// Badge "</>" + tên "Ngọc Nhật.dev"
// =============================================
const Logo = () => {
  return (
    <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
      <Link
        href="/"
        aria-label="Ngọc Nhật - Trang chủ"
        className="group flex items-center gap-2 select-none"
      >
        {/* Monogram badge */}
        <span
          className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl
            font-mono text-sm sm:text-base font-bold leading-none text-[var(--c-primary-content)]
            shadow-[0_4px_14px_color-mix(in_srgb,var(--c-primary)_45%,transparent)]
            transition-transform duration-300 group-hover:rotate-3"
          style={{
            background:
              'linear-gradient(135deg, var(--c-primary), var(--c-primary-dark))',
          }}
        >
          {/* Glow nhẹ khi hover */}
          <span className="absolute inset-0 rounded-xl bg-[var(--c-primary)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
          <span className="relative">&lt;/&gt;</span>
        </span>

        {/* Wordmark */}
        <span className="hidden sm:flex items-baseline text-lg font-bold tracking-tight">
          <span className="text-[var(--c-text)]">Ngọc&nbsp;Nhật</span>
          <span className="text-[var(--c-primary)]">.dev</span>
        </span>
      </Link>
    </m.div>
  )
}

export default Logo
