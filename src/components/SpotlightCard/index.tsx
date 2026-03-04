'use client'

import React, { useRef, useState } from 'react'

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string
  spotlightColor?: string
  spotlightSize?: number
  highlightColor?: string // New variable to represent the subtle border brightness
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'var(--c-primary)',
  spotlightSize = 400,
  highlightColor = 'color-mix(in srgb, var(--c-primary) 15%, transparent)',
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return
    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl overflow-hidden border border-[var(--c-border)] bg-[color-mix(in_srgb,var(--c-surface)_70%,transparent)] backdrop-blur-md \${className}`.trim()}
    >
      {/* Spot light underlying effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${highlightColor}, transparent 40%)`,
        }}
      />

      {/* Dynamic background lighting inside */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize * 0.8}px circle at ${position.x}px ${position.y}px, color-mix(in srgb, ${spotlightColor} 5%, transparent), transparent 40%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full p-4">{children}</div>
    </div>
  )
}

export default SpotlightCard
