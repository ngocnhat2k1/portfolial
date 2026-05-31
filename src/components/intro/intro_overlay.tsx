'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import dynamic from 'next/dynamic'
import DecryptedText from './decrypted_text'

/* ============================================================
   Lazy load các component nặng – tránh SSR issues với WebGL
   ============================================================ */
const Particles = dynamic(() => import('./particles'), { ssr: false })

const STORAGE_KEY = 'intro-seen'

/* Đọc biến màu theme và chuẩn hoá về hex (cho WebGL particles) */
const readThemeColors = (): string[] => {
  if (typeof window === 'undefined') return ['#ffffff']
  const styles = getComputedStyle(document.documentElement)
  const toHex = (raw: string): string | null => {
    const v = raw.trim()
    if (!v) return null
    if (v.startsWith('#')) return v
    const nums = v.match(/\d+(\.\d+)?/g)
    if (!nums || nums.length < 3) return null
    const [r, g, b] = nums.map((n) => Math.round(parseFloat(n)))
    return (
      '#' +
      [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')
    )
  }
  const colors = ['--c-primary', '--c-secondary', '--c-accent', '--c-light']
    .map((name) => toHex(styles.getPropertyValue(name)))
    .filter((c): c is string => Boolean(c))
  return colors.length ? colors : ['#ffffff']
}

/* ============================================================
   IntroOverlay – Màn hình intro fullscreen (hiển thị 1 lần)
   ============================================================ */
const IntroOverlay = () => {
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [particleColors, setParticleColors] = useState<string[]>(['#ffffff'])

  // Quyết định hiển thị: chỉ hiện lần đầu & khi không bật reduced-motion
  useEffect(() => {
    let seen = false
    try {
      seen = !!localStorage.getItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    if (seen) return
    if (prefersReducedMotion) {
      try {
        localStorage.setItem(STORAGE_KEY, '1')
      } catch {
        /* ignore */
      }
      return
    }
    setParticleColors(readThemeColors())
    setIsVisible(true)
  }, [prefersReducedMotion])

  // Hiệu ứng fade-in nội dung sau 500ms
  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [isVisible])

  // Khoá scroll triệt để khi intro đang hiển thị
  useEffect(() => {
    const preventScroll = (e: Event) => e.preventDefault()

    if (isVisible) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
      document.documentElement.style.overscrollBehavior = 'none'
      document.addEventListener('touchmove', preventScroll, { passive: false })
      document.addEventListener('wheel', preventScroll, { passive: false })
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.overscrollBehavior = ''
      document.documentElement.style.overscrollBehavior = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.overscrollBehavior = ''
      document.documentElement.style.overscrollBehavior = ''
      document.removeEventListener('touchmove', preventScroll)
      document.removeEventListener('wheel', preventScroll)
    }
  }, [isVisible])

  // Xử lý khi vào trang (nút Enter / Skip / phím)
  const handleEnter = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
    setIsExiting(true)
    setTimeout(() => setIsVisible(false), 800)
  }, [])

  // Bàn phím: Enter / Space để vào, Esc để bỏ qua
  useEffect(() => {
    if (!isVisible) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault()
        handleEnter()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isVisible, handleEnter])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="intro-overlay"
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          role="dialog"
          aria-label="Intro"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--c-dark)',
            overflow: 'hidden',
          }}
        >
          {/* === Particles Background === */}
          <Particles
            particleCount={250}
            particleSpread={12}
            speed={0.06}
            particleColors={particleColors}
            moveParticlesOnHover={true}
            particleHoverFactor={1.5}
            alphaParticles={true}
            particleBaseSize={100}
            sizeRandomness={1.5}
            cameraDistance={25}
            className="intro-particles"
          />

          {/* === Gradient overlays cho depth === */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 50% 50%, transparent 0%, color-mix(in srgb, var(--c-dark) 40%, transparent) 50%, color-mix(in srgb, var(--c-dark) 80%, transparent) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* === Skip button === */}
          <button
            onClick={handleEnter}
            aria-label="Bỏ qua intro"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              zIndex: 5,
              padding: '0.5rem 1.25rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--c-light)',
              background: 'color-mix(in srgb, var(--c-light) 10%, transparent)',
              border:
                '1px solid color-mix(in srgb, var(--c-light) 25%, transparent)',
              borderRadius: '50px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
            }}
          >
            Skip →
          </button>

          {/* === Main Content === */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              maxWidth: '1400px',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              style={{
                flex: '1 1 100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '0 2rem',
                textAlign: 'center',
              }}
              className="intro-text-content"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  color: 'color-mix(in srgb, var(--c-light) 55%, transparent)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                Hi, I&apos;m Ngoc Nhat
              </motion.p>

              {/* Main heading – DecryptedText */}
              <h1
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--c-light)',
                  lineHeight: 1.2,
                }}
              >
                <DecryptedText
                  text="WELCOME TO MY PORTFOLIO!"
                  speed={60}
                  maxIterations={15}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  characters="01<>{}[]!@#$%&*"
                  className="intro-text-revealed"
                  encryptedClassName="intro-text-encrypted"
                  parentClassName="intro-text-parent"
                />
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
                style={{
                  color: 'color-mix(in srgb, var(--c-light) 65%, transparent)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                  maxWidth: '450px',
                  lineHeight: 1.6,
                }}
              >
                Frontend Technical Leader &bull; React/Next.js
              </motion.p>

              {/* Enter Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={showContent ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="intro-enter-btn"
                style={{
                  marginTop: '0.5rem',
                  padding: '0.875rem 2.5rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--c-light)',
                  background: 'transparent',
                  border:
                    '1.5px solid color-mix(in srgb, var(--c-primary) 60%, transparent)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
              >
                Visit my Portfolio
              </motion.button>
            </motion.div>
          </div>

          {/* === Scroll indicator === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 0.4 } : {}}
            transition={{ duration: 1, delay: 2.5 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                color: 'color-mix(in srgb, var(--c-light) 40%, transparent)',
                letterSpacing: '0.15em',
              }}
            >
              CLICK TO ENTER
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: '2px',
                height: '20px',
                background:
                  'linear-gradient(to bottom, color-mix(in srgb, var(--c-primary) 60%, transparent), transparent)',
                borderRadius: '1px',
              }}
            />
          </motion.div>
        </motion.div>
      ) : (
        /* === Exit animation === */
        <motion.div
          key="intro-exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'var(--c-dark)',
          }}
        />
      )}
    </AnimatePresence>
  )
}

export default IntroOverlay
