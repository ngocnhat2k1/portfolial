'use client'

import React, { useRef, useEffect, useState } from 'react'

interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left'
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

const Squares: React.FC<SquaresProps> = ({
  direction = 'right',
  speed = 1,
  borderColor = 'var(--c-border)',
  squareSize = 40,
  hoverFillColor = 'var(--c-primary)',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredSquare, setHoveredSquare] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let gridOffset = { x: 0, y: 0 }

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        // Handle device pixel ratio for sharper rendering
        const dpr = window.devicePixelRatio || 1
        canvas.width = parent.clientWidth * dpr
        canvas.height = parent.clientHeight * dpr
        canvas.style.width = `\${parent.clientWidth}px`
        canvas.style.height = `\${parent.clientHeight}px`
        ctx.scale(dpr, dpr)
      }
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const drawGrid = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // We need logical width/height (unscaled by DPR) to loop correctly
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)

      const startX = Math.floor(gridOffset.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.y / squareSize) * squareSize

      // Draw grid lines and filled squares
      for (let x = startX; x < width + squareSize; x += squareSize) {
        for (let y = startY; y < height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.x % squareSize)
          const squareY = y - (gridOffset.y % squareSize)

          // Fill hovered square
          if (
            hoveredSquare &&
            Math.floor((hoveredSquare.x - squareX) / squareSize) === 0 &&
            Math.floor((hoveredSquare.y - squareY) / squareSize) === 0
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          // Draw borders
          ctx.strokeStyle = borderColor
          ctx.lineWidth = 1
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }

      // Update grid offset based on direction and speed
      switch (direction) {
        case 'right':
          gridOffset.x -= speed
          break
        case 'left':
          gridOffset.x += speed
          break
        case 'down':
          gridOffset.y -= speed
          break
        case 'up':
          gridOffset.y += speed
          break
        case 'diagonal':
          gridOffset.x -= speed
          gridOffset.y -= speed
          break
      }

      animationFrameId = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [direction, speed, borderColor, squareSize, hoverFillColor, hoveredSquare])

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    setHoveredSquare({ x, y })
  }

  const handleMouseLeave = () => {
    setHoveredSquare(null)
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 w-full h-full pointer-events-auto z-0 \${className}`.trim()}
    />
  )
}

export default Squares
