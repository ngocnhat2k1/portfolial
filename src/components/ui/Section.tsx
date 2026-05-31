import React from 'react'

// =============================================
// Section — wrapper chuẩn cho mọi khu vực trang
// - id để điều hướng (#about, #project, ...)
// - nhịp dọc thống nhất qua --section-py
// - container giới hạn bề rộng (trừ khi bleed = full-bleed)
// =============================================
type Props = {
  id?: string
  className?: string
  containerClassName?: string
  /** Bỏ container (dùng cho khu vực full-bleed như Projects 3D) */
  bleed?: boolean
  /** Bỏ padding dọc mặc định (khi cần kiểm soát riêng) */
  noPadding?: boolean
  children: React.ReactNode
}

const Section = ({
  id,
  className = '',
  containerClassName = '',
  bleed = false,
  noPadding = false,
  children,
}: Props) => {
  const pad = noPadding ? '' : 'pt-[var(--section-py)]'
  return (
    <section id={id} className={`w-full ${pad} ${className}`}>
      {bleed ? (
        children
      ) : (
        <div
          className={`mx-auto w-full max-w-[var(--container-max)] px-4 sm:px-6 ${containerClassName}`}
        >
          {children}
        </div>
      )}
    </section>
  )
}

export default Section
