'use client'

import React from 'react'
import Link from 'next/link'
import Magnet from '@/components/Magnet'

// =============================================
// Button — nút thống nhất toàn site
// Dùng class .btn / .btn-primary|outline|ghost trong globals.css
// Render <Link> nếu có href, ngược lại render <button>.
// Bọc hiệu ứng Magnet tuỳ chọn.
// =============================================
type Variant = 'primary' | 'outline' | 'ghost'

type CommonProps = {
  variant?: Variant
  magnet?: boolean
  className?: string
  children: React.ReactNode
}

type AsLink = CommonProps & {
  href: string
  target?: string
  rel?: string
  onClick?: never
  type?: never
}

type AsButton = CommonProps & {
  href?: undefined
  onClick?: () => void
  type?: 'button' | 'submit'
  target?: never
  rel?: never
}

type Props = AsLink | AsButton

const Button = ({
  variant = 'primary',
  magnet = false,
  className = '',
  children,
  ...rest
}: Props) => {
  const cls = `btn btn-${variant} ${className}`

  let node: React.ReactNode
  if ('href' in rest && rest.href) {
    const { href, target, rel } = rest
    node = (
      <Link
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={cls}
      >
        {children}
      </Link>
    )
  } else {
    const { onClick, type = 'button' } = rest as AsButton
    node = (
      <button type={type} onClick={onClick} className={cls}>
        {children}
      </button>
    )
  }

  if (magnet) {
    return (
      <Magnet padding={80} magnetStrength={3} wrapperClassName="inline-block">
        {node}
      </Magnet>
    )
  }
  return node
}

export default Button
