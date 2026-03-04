'use client'

import React, { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

interface ParticlesProps {
  particleCount?: number
  particleColors?: string[]
  maxSize?: number
  minSize?: number
  maxSpeed?: number
  className?: string
}

const Particles: React.FC<ParticlesProps> = ({
  particleCount = 50,
  particleColors = ['#1D7874', '#0096C7', '#679289', '#F4C095'],
  maxSize = 4,
  minSize = 1,
  maxSpeed = 0.5,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
        initParticles() // Re-initialize particles on resize to spread them out
      }
    }

    window.addEventListener('resize', resizeCanvas)

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = (Math.random() - 0.5) * maxSpeed
        const speedY = (Math.random() - 0.5) * maxSpeed
        const opacity = Math.random() * 0.5 + 0.1
        const color =
          particleColors[Math.floor(Math.random() * particleColors.length)]

        particles.push({ x, y, size, speedX, speedY, opacity, color })
      }
    }

    resizeCanvas()

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

        // Convert hex to rgba for opacity
        if (p.color.startsWith('#')) {
          const hex = p.color.replace('#', '')
          const r = parseInt(hex.substring(0, 2), 16)
          const g = parseInt(hex.substring(2, 4), 16)
          const b = parseInt(hex.substring(4, 6), 16)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`
        } else {
          // Fallback for CSS variables or strings like "white"
          ctx.fillStyle = p.color
          ctx.globalAlpha = p.opacity
        }

        ctx.fill()
        ctx.globalAlpha = 1.0 // Reset

        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      }

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    drawParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleCount, particleColors, maxSize, minSize, maxSpeed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 \${className}`.trim()}
    />
  )
}

export default Particles
