'use client'

import React, { useEffect, useRef, useCallback, useMemo } from 'react'

const DEFAULT_INNER_GRADIENT =
  'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)'

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180,
} as const

const clamp = (v: number, min = 0, max = 100): number =>
  Math.min(Math.max(v, min), max)
const round = (v: number, precision = 3): number =>
  parseFloat(v.toFixed(precision))
const adjust = (
  v: number,
  fMin: number,
  fMax: number,
  tMin: number,
  tMax: number
): number => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin))

const KEYFRAMES_ID = 'pc-keyframes'
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
  const style = document.createElement('style')
  style.id = KEYFRAMES_ID
  style.textContent = `
    @keyframes pc-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 90% 90%, center; }
    }
  `
  document.head.appendChild(style)
}

export interface ProfileCardProps {
  avatarUrl?: string
  iconUrl?: string
  grainUrl?: string
  innerGradient?: string
  behindGlowEnabled?: boolean
  behindGlowColor?: string
  behindGlowSize?: string
  className?: string
  enableTilt?: boolean
  enableMobileTilt?: boolean
  mobileTiltSensitivity?: number
  miniAvatarUrl?: string
  name?: string
  title?: string
  handle?: string
  status?: string
  contactText?: string
  showUserInfo?: boolean
  onContactClick?: () => void
}

interface TiltEngine {
  setImmediate: (x: number, y: number) => void
  setTarget: (x: number, y: number) => void
  toCenter: () => void
  beginInitial: (durationMs: number) => void
  getCurrent: () => { x: number; y: number; tx: number; ty: number }
  cancel: () => void
}

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = '/images/profile/avt.jpeg',
  iconUrl = '',
  grainUrl = '',
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor = 'var(--c-primary)',
  behindGlowSize,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Nguyễn Trần Ngọc Nhật',
  title = 'Full-Stack Developer',
  handle = 'ngocnhat',
  status = 'Available for work',
  contactText = 'Contact Me',
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)

  const enterTimerRef = useRef<number | null>(null)
  const leaveRafRef = useRef<number | null>(null)

  const tiltEngine = useMemo<TiltEngine | null>(() => {
    if (!enableTilt) return null

    let rafId: number | null = null
    let running = false
    let lastTs = 0

    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const DEFAULT_TAU = 0.14
    const INITIAL_TAU = 0.6
    let initialUntil = 0

    const setVarsFromXY = (x: number, y: number): void => {
      const shell = shellRef.current
      const wrap = wrapRef.current
      if (!shell || !wrap) return

      const width = shell.clientWidth || 1
      const height = shell.clientHeight || 1

      const percentX = clamp((100 / width) * x)
      const percentY = clamp((100 / height) * y)

      const centerX = percentX - 50
      const centerY = percentY - 50

      const properties: Record<string, string> = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`,
      }

      for (const [k, v] of Object.entries(properties))
        wrap.style.setProperty(k, v)
    }

    const step = (ts: number): void => {
      if (!running) return
      if (lastTs === 0) lastTs = ts
      const dt = (ts - lastTs) / 1000
      lastTs = ts

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU
      const k = 1 - Math.exp(-dt / tau)

      currentX += (targetX - currentX) * k
      currentY += (targetY - currentY) * k

      setVarsFromXY(currentX, currentY)

      const stillFar =
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step)
      } else {
        running = false
        lastTs = 0
        if (rafId) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
      }
    }

    const start = (): void => {
      if (running) return
      running = true
      lastTs = 0
      rafId = requestAnimationFrame(step)
    }

    return {
      setImmediate(x: number, y: number): void {
        currentX = x
        currentY = y
        setVarsFromXY(currentX, currentY)
      },
      setTarget(x: number, y: number): void {
        targetX = x
        targetY = y
        start()
      },
      toCenter(): void {
        const shell = shellRef.current
        if (!shell) return
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2)
      },
      beginInitial(durationMs: number): void {
        initialUntil = performance.now() + durationMs
        start()
      },
      getCurrent(): { x: number; y: number; tx: number; ty: number } {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY }
      },
      cancel(): void {
        if (rafId) cancelAnimationFrame(rafId)
        rafId = null
        running = false
        lastTs = 0
      },
    }
  }, [enableTilt])

  const getOffsets = (
    evt: PointerEvent,
    el: HTMLElement
  ): { x: number; y: number } => {
    const rect = el.getBoundingClientRect()
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top }
  }

  const handlePointerMove = useCallback(
    (event: PointerEvent): void => {
      const shell = shellRef.current
      if (!shell || !tiltEngine) return
      const { x, y } = getOffsets(event, shell)
      tiltEngine.setTarget(x, y)
    },
    [tiltEngine]
  )

  const handlePointerEnter = useCallback(
    (event: PointerEvent): void => {
      const shell = shellRef.current
      if (!shell || !tiltEngine) return

      shell.classList.add('active')
      shell.classList.add('entering')
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current)
      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove('entering')
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS)

      const { x, y } = getOffsets(event, shell)
      tiltEngine.setTarget(x, y)
    },
    [tiltEngine]
  )

  const handlePointerLeave = useCallback((): void => {
    const shell = shellRef.current
    if (!shell || !tiltEngine) return

    tiltEngine.toCenter()

    const checkSettle = (): void => {
      const { x, y, tx, ty } = tiltEngine.getCurrent()
      const settled = Math.hypot(tx - x, ty - y) < 0.6
      if (settled) {
        shell.classList.remove('active')
        leaveRafRef.current = null
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle)
      }
    }
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current)
    leaveRafRef.current = requestAnimationFrame(checkSettle)
  }, [tiltEngine])

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent): void => {
      const shell = shellRef.current
      if (!shell || !tiltEngine) return

      const { beta, gamma } = event
      if (beta == null || gamma == null) return

      const centerX = shell.clientWidth / 2
      const centerY = shell.clientHeight / 2
      const x = clamp(
        centerX + gamma * mobileTiltSensitivity,
        0,
        shell.clientWidth
      )
      const y = clamp(
        centerY +
          (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        0,
        shell.clientHeight
      )

      tiltEngine.setTarget(x, y)
    },
    [tiltEngine, mobileTiltSensitivity]
  )

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return

    const shell = shellRef.current
    if (!shell) return

    const pointerMoveHandler = handlePointerMove as EventListener
    const pointerEnterHandler = handlePointerEnter as EventListener
    const pointerLeaveHandler = handlePointerLeave as EventListener
    const deviceOrientationHandler = handleDeviceOrientation as EventListener

    shell.addEventListener('pointerenter', pointerEnterHandler)
    shell.addEventListener('pointermove', pointerMoveHandler)
    shell.addEventListener('pointerleave', pointerLeaveHandler)

    const handleClick = (): void => {
      if (
        !enableMobileTilt ||
        typeof window === 'undefined' ||
        location.protocol !== 'https:'
      )
        return
      const anyMotion = window.DeviceMotionEvent as typeof DeviceMotionEvent & {
        requestPermission?: () => Promise<string>
      }
      if (anyMotion && typeof anyMotion.requestPermission === 'function') {
        anyMotion
          .requestPermission()
          .then((state: string) => {
            if (state === 'granted') {
              window.addEventListener(
                'deviceorientation',
                deviceOrientationHandler
              )
            }
          })
          .catch(console.error)
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler)
      }
    }
    shell.addEventListener('click', handleClick)

    const initialX =
      (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET
    tiltEngine.setImmediate(initialX, initialY)
    tiltEngine.toCenter()
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION)

    return () => {
      shell.removeEventListener('pointerenter', pointerEnterHandler)
      shell.removeEventListener('pointermove', pointerMoveHandler)
      shell.removeEventListener('pointerleave', pointerLeaveHandler)
      shell.removeEventListener('click', handleClick)
      window.removeEventListener('deviceorientation', deviceOrientationHandler)
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current)
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current)
      tiltEngine.cancel()
      shell.classList.remove('entering')
    }
  }, [
    enableTilt,
    enableMobileTilt,
    tiltEngine,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation,
  ])

  const cardRadius = '30px'

  const cardStyle = useMemo(
    () => ({
      '--icon': iconUrl ? `url(${iconUrl})` : 'none',
      '--grain': grainUrl ? `url(${grainUrl})` : 'none',
      '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
      '--behind-glow-color': behindGlowColor ?? 'var(--c-primary)',
      '--behind-glow-size': behindGlowSize ?? '50%',
      '--pointer-x': '50%',
      '--pointer-y': '50%',
      '--pointer-from-center': '0',
      '--pointer-from-top': '0.5',
      '--pointer-from-left': '0.5',
      '--card-opacity': '1',
      '--rotate-x': '0deg',
      '--rotate-y': '0deg',
      '--background-x': '50%',
      '--background-y': '50%',
      '--card-radius': cardRadius,
      '--sunpillar-1': 'hsl(2, 100%, 73%)',
      // '--sunpillar-2': 'hsl(53, 100%, 69%)',
      '--sunpillar-3': 'hsl(93, 100%, 69%)',
      '--sunpillar-4': 'hsl(176, 100%, 76%)',
      '--sunpillar-5': 'hsl(228, 100%, 74%)',
      '--sunpillar-6': 'hsl(283, 100%, 73%)',
      '--sunpillar-clr-1': 'var(--sunpillar-1)',
      '--sunpillar-clr-2': 'var(--sunpillar-2)',
      '--sunpillar-clr-3': 'var(--sunpillar-3)',
      '--sunpillar-clr-4': 'var(--sunpillar-4)',
      '--sunpillar-clr-5': 'var(--sunpillar-5)',
      '--sunpillar-clr-6': 'var(--sunpillar-6)',
    }),
    [
      iconUrl,
      grainUrl,
      innerGradient,
      behindGlowColor,
      behindGlowSize,
      cardRadius,
    ]
  )

  const handleContactClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      onContactClick?.()
    },
    [onContactClick]
  )

  // Use simple strings instead of template literals for the gradients to avoid any parsing issues
  const bgImageValue =
    'repeating-linear-gradient(0deg, var(--sunpillar-clr-1) 5%, var(--sunpillar-clr-2) 10%, var(--sunpillar-clr-3) 15%, var(--sunpillar-clr-4) 20%, var(--sunpillar-clr-5) 25%, var(--sunpillar-clr-6) 30%, var(--sunpillar-clr-1) 35%), repeating-linear-gradient(-45deg, #0e152e 0%, hsl(180, 10%, 60%) 3.8%, hsl(180, 29%, 66%) 4.5%, hsl(180, 10%, 60%) 5.2%, #0e152e 10%, #0e152e 12%), radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsla(0, 0%, 0%, 0.1) 12%, hsla(0, 0%, 0%, 0.15) 20%, hsla(0, 0%, 0%, 0.25) 120%)'
  const glareBgValue =
    'radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsl(248, 25%, 80%) 12%, hsla(207, 40%, 30%, 0.8) 90%)'
  const bgOverlayValue =
    'radial-gradient(circle at var(--pointer-x) var(--pointer-y), color-mix(in srgb, var(--behind-glow-color) 40%, transparent) 0%, transparent var(--behind-glow-size))'

  const shineStyle: React.CSSProperties = {
    maskImage: 'var(--icon)',
    maskMode: 'luminance',
    maskRepeat: 'repeat',
    maskSize: '150%',
    maskPosition:
      'top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x))',
    filter: 'brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5)',
    animation: 'pc-holo-bg 18s linear infinite',
    animationPlayState: 'running',
    mixBlendMode: 'color-dodge',
    transform: 'translate3d(0, 0, 1px)',
    overflow: 'hidden',
    zIndex: 3,
    background: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: bgImageValue,
    gridArea: '1 / -1',
    borderRadius: cardRadius,
    pointerEvents: 'none',
  }

  const glareStyle: React.CSSProperties = {
    transform: 'translate3d(0, 0, 1.1px)',
    overflow: 'hidden',
    backgroundImage: glareBgValue,
    mixBlendMode: 'overlay',
    filter: 'brightness(0.8) contrast(1.2)',
    zIndex: 4,
    gridArea: '1 / -1',
    borderRadius: cardRadius,
    pointerEvents: 'none',
  }

  const classNameStr = ('relative touch-none ' + className).trim()
  const avatarAltStr = (name || 'User') + ' avatar'
  const miniAvatarAltStr = (name || 'User') + ' mini avatar'
  const contactAriaStr = 'Contact ' + (name || 'user')

  return (
    <div
      ref={wrapRef}
      className={classNameStr}
      style={
        {
          perspective: '800px',
          transform: 'translate3d(0, 0, 0.1px)',
          ...cardStyle,
        } as React.CSSProperties
      }
    >
      {behindGlowEnabled && (
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-200 ease-out"
          style={{
            background: bgOverlayValue,
            filter: 'blur(50px) saturate(1.1)',
            opacity: 'calc(1 * var(--card-opacity))',
          }}
        />
      )}
      <div
        ref={shellRef}
        className="relative z-[1] group w-full h-full max-w-[400px] mx-auto"
      >
        <section
          className="grid relative overflow-hidden h-full max-h-[540px] aspect-[0.718] w-full"
          style={{
            borderRadius: cardRadius,
            backgroundBlendMode: 'color-dodge, normal, normal, normal',
            boxShadow:
              'rgba(0, 0, 0, 0.4) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px',
            transition: 'transform 1s ease',
            transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)',
            background: 'var(--c-surface)',
            backfaceVisibility: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transition = 'none'
            e.currentTarget.style.transform =
              'translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))'
          }}
          onMouseLeave={(e) => {
            const shell = shellRef.current
            if (shell?.classList.contains('entering')) {
              e.currentTarget.style.transition = 'transform 180ms ease-out'
            } else {
              e.currentTarget.style.transition = 'transform 1s ease'
            }
            e.currentTarget.style.transform =
              'translateZ(0) rotateX(0deg) rotateY(0deg)'
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'var(--inner-gradient)',
              backgroundColor: 'var(--c-surface)',
              borderRadius: cardRadius,
              display: 'grid',
              gridArea: '1 / -1',
            }}
          >
            {/* Shine layer */}
            <div style={shineStyle} />

            {/* Glare layer */}
            <div style={glareStyle} />

            {/* Avatar content */}
            <div
              className="overflow-visible"
              style={{
                mixBlendMode: 'normal',
                transform: 'translateZ(2px)',
                gridArea: '1 / -1',
                borderRadius: cardRadius,
                pointerEvents: 'none',
                backfaceVisibility: 'hidden',
              }}
            >
              <img
                className="w-full h-full object-cover absolute left-0 top-0 will-change-transform transition-transform duration-[120ms] ease-out opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 hover:mix-blend-normal transition-all"
                src={avatarUrl}
                alt={avatarAltStr}
                loading="lazy"
                style={{
                  transformOrigin: '50% 100%',
                  transform:
                    'translateX(calc((var(--pointer-from-left) - 0.5) * 6px)) translateZ(0) scaleY(calc(1 + (var(--pointer-from-top) - 0.5) * 0.02)) scaleX(calc(1 + (var(--pointer-from-left) - 0.5) * 0.01))',
                  borderRadius: cardRadius,
                  backfaceVisibility: 'hidden',
                }}
                onError={(e) => {
                  const t = e.target as HTMLImageElement
                  t.style.display = 'none'
                }}
              />

              {/* Overlay gradient over full image to make text pop */}
              <div
                className="absolute inset-0 transition-opacity"
                style={{
                  background:
                    'linear-gradient(to top, var(--c-surface) 0%, color-mix(in srgb, var(--c-surface) 60%, transparent) 40%, transparent 100%)',
                  borderRadius: cardRadius,
                  pointerEvents: 'none',
                }}
              />

              {showUserInfo && (
                <div
                  className="absolute z-[10] flex items-center justify-between backdrop-blur-md border border-[var(--c-border)] pointer-events-auto shadow-lg"
                  style={
                    {
                      '--ui-inset': '20px',
                      '--ui-radius-bias': '6px',
                      bottom: 'var(--ui-inset)',
                      left: 'var(--ui-inset)',
                      right: 'var(--ui-inset)',
                      background:
                        'color-mix(in srgb, var(--c-surface) 60%, transparent)',
                      borderRadius:
                        'calc(max(0px, var(--card-radius) - var(--ui-inset) + var(--ui-radius-bias)))',
                      padding: '12px 14px',
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-full overflow-hidden border border-[var(--c-border)] flex-shrink-0 bg-[var(--c-surface-2)]"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={miniAvatarUrl || avatarUrl}
                        alt={miniAvatarAltStr}
                        loading="lazy"
                        style={{
                          display: 'block',
                          gridArea: 'auto',
                          borderRadius: '50%',
                          pointerEvents: 'auto',
                        }}
                        onError={(e) => {
                          const t = e.target as HTMLImageElement
                          t.style.opacity = '0.5'
                          t.src = avatarUrl
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1.5">
                      <div className="text-sm font-medium text-[var(--c-text)] leading-none">
                        @{handle}
                      </div>
                      <div className="text-xs text-[var(--c-text-muted)] flex items-center gap-1.5 leading-none">
                        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                        {status}
                      </div>
                    </div>
                  </div>
                  <button
                    className="border border-[var(--c-border)] bg-[var(--c-primary)] rounded-lg px-4 py-3 text-xs font-semibold text-[currentcolor] cursor-pointer backdrop-blur-[10px] transition-all duration-200 ease-out hover:bg-[var(--c-primary-dark)] hover:-translate-y-px shadow-[0_4px_12px_var(--shadow-primary)]"
                    onClick={handleContactClick}
                    style={{
                      pointerEvents: 'auto',
                      display: 'block',
                      gridArea: 'auto',
                      borderRadius: '8px',
                      color: 'var(--c-primary-content)',
                    }}
                    type="button"
                    aria-label={contactAriaStr}
                  >
                    {contactText}
                  </button>
                </div>
              )}
            </div>

            {/* Details content */}
            <div
              className="max-h-full overflow-hidden text-center relative z-[5]"
              style={{
                transform:
                  'translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px)',
                gridArea: '1 / -1',
                borderRadius: cardRadius,
                pointerEvents: 'none',
              }}
            >
              <div
                className="w-full absolute flex flex-col pt-[10%]"
                style={{ display: 'flex', gridArea: 'auto' }}
              >
                <h3
                  className="font-bold m-0 drop-shadow-md pb-2 px-4"
                  style={{
                    fontSize: '32px',
                    color: 'var(--c-text)',
                    display: 'block',
                    gridArea: 'auto',
                    borderRadius: '0',
                    pointerEvents: 'auto',
                  }}
                >
                  {name}
                </h3>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default React.memo(ProfileCardComponent)
