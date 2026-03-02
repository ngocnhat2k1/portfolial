'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import DecryptedText from './decrypted_text'

/* ============================================================
   Lazy load các component nặng – tránh SSR issues với WebGL
   ============================================================ */
const Particles = dynamic(() => import('./particles'), { ssr: false })
const IntroModel = dynamic(() => import('./intro_model'), { ssr: false })

/* ============================================================
   IntroOverlay – Màn hình intro fullscreen
   Hiển thị 3D model + particles + text animation + nút enter
   Layout: Model bên trái, Text bên phải (giống trang tham khảo)
   ============================================================ */
const IntroOverlay = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [showContent, setShowContent] = useState(false)

  // Hiệu ứng fade-in nội dung sau 500ms
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Khoá scroll khi intro đang hiển thị
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isVisible])

  // Xử lý khi nhấn nút Enter
  const handleEnter = useCallback(() => {
    setIsExiting(true)
    setTimeout(() => setIsVisible(false), 800)
  }, [])

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
            particleColors={[
              '#1D7874',
              '#679289',
              '#F4C095',
              '#ffffff',
              '#48CAE4',
            ]}
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
                'radial-gradient(ellipse at 35% 50%, transparent 0%, rgba(3,0,20,0.3) 40%, rgba(3,0,20,0.7) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* === Main Content – Split Layout === */}
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
            {/* --- Left: 3D Model --- */}
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={showContent ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{
                flex: '1 1 50%',
                height: '100%',
                minHeight: '400px',
                position: 'relative',
              }}
              className="intro-model-container"
            >
              <IntroModel />
            </motion.div> */}

            {/* --- Right: Text Content --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={showContent ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              style={{
                flex: '1 1 50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '0 2rem',
              }}
              className="intro-text-content"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  color: 'rgba(255,255,255,0.5)',
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
                  color: '#ffffff',
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
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                  maxWidth: '450px',
                  lineHeight: 1.6,
                }}
              >
                Frontend Developer &bull; React/Next.js
              </motion.p>

              {/* Enter Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={showContent ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(29,120,116,0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="intro-enter-btn"
                style={{
                  marginTop: '0.5rem',
                  padding: '0.875rem 2.5rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  background: 'transparent',
                  border: '1.5px solid rgba(29,120,116,0.6)',
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
                color: 'rgba(255,255,255,0.4)',
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
                  'linear-gradient(to bottom, rgba(29,120,116,0.6), transparent)',
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
