'use client'

import { useEffect, useState } from 'react'

// =============================================
// useMediaQuery — phát hiện breakpoint, SSR-safe
// Trả về false ở lần render đầu (server) để tránh hydration mismatch,
// rồi cập nhật đúng sau khi mount trên client.
// =============================================
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

export default useMediaQuery
