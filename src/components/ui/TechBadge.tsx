import React from 'react'

// =============================================
// TechBadge — pill công nghệ nhất quán (theme-safe)
// =============================================
type Props = {
  children: React.ReactNode
  className?: string
  /** nhấn mạnh bằng màu primary */
  accent?: boolean
}

const TechBadge = ({ children, className = '', accent = false }: Props) => {
  const base =
    'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium border transition-colors'
  const tone = accent
    ? 'text-[var(--c-primary)] border-[color-mix(in_srgb,var(--c-primary)_30%,transparent)] bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)]'
    : 'text-[var(--c-text-muted)] border-[var(--c-border)] bg-[color-mix(in_srgb,var(--c-text)_5%,transparent)]'
  return <span className={`${base} ${tone} ${className}`}>{children}</span>
}

export default TechBadge
