'use client'

import { useRef, useState } from 'react'
import { m, useMotionValue, useSpring, SpringOptions } from 'framer-motion'

// Định nghĩa props cho component TiltedCard
interface ITiltedCardProps {
  imageSrc: string
  altText?: string
  captionText?: string
  containerHeight?: React.CSSProperties['height']
  containerWidth?: React.CSSProperties['width']
  imageHeight?: React.CSSProperties['height']
  imageWidth?: React.CSSProperties['width']
  scaleOnHover?: number
  rotateAmplitude?: number
  showMobileWarning?: boolean
  showTooltip?: boolean
  overlayContent?: React.ReactNode
  displayOverlayContent?: boolean
  className?: string
}

// Cấu hình spring cho hiệu ứng mượt mà
const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

export const TiltedCard: React.FC<ITiltedCardProps> = ({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
  showMobileWarning = false,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  className = '',
}) => {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  })

  const [lastY, setLastY] = useState(0)

  // Xử lý sự kiện di chuyển chuột để tính toán góc nghiêng 3D
  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

    rotateX.set(rotationX)
    rotateY.set(rotationY)

    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)

    const velocityY = offsetY - lastY
    rotateFigcaption.set(-velocityY * 0.6)
    setLastY(offsetY)
  }

  // Khi chuột đi vào card
  function handleMouseEnter() {
    scale.set(scaleOnHover)
    opacity.set(1)
  }

  // Khi chuột rời khỏi card, reset về trạng thái ban đầu
  function handleMouseLeave() {
    opacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
  }

  return (
    <figure
      ref={ref}
      className={`relative w-full h-full [perspective:1000px] flex flex-col items-center justify-center ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-xs block sm:hidden text-[var(--c-text-muted)]">
          Hiệu ứng này tối ưu cho thiết bị máy tính.
        </div>
      )}

      <m.div
        className="relative [transform-style:preserve-3d] w-full h-full flex items-center justify-center"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <m.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[var(--r-xl)] border border-[var(--c-border)] shadow-[var(--shadow-sm)] will-change-transform [transform:translateZ(0)]"
          style={{
            width: '100%',
            height: '100%',
          }}
        />

        {displayOverlayContent && overlayContent && (
          <m.div className="absolute inset-0 z-[2] will-change-transform [transform:translateZ(30px)] pointer-events-none">
            {overlayContent}
          </m.div>
        )}
      </m.div>

      {showTooltip && captionText && (
        <m.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[var(--r-sm)] bg-[var(--c-surface)] border border-[var(--c-border)] px-2.5 py-1 text-xs text-[var(--c-text)] opacity-0 z-[3] hidden sm:block shadow-[var(--shadow-md)]"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </m.figcaption>
      )}
    </figure>
  )
}

export default TiltedCard
