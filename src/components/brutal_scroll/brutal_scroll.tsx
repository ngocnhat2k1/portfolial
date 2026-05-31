/* eslint-disable @next/next/no-img-element */
'use client'

import { IProject } from '@/data/projects'
import { useLocale } from '@/i18n'
import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// =============================================
// Config: cấu hình chính tương ứng code gốc
// =============================================
const Z_GAP = 500 // Khoảng cách giữa các item theo trục Z
const STAR_COUNT = 1

// Text hiển thị trên big-text
const TEXTS = [
  'FRONTEND',
  'REACT.JS',
  'NEXT.JS',
  'TYPESCRIPT',
  'TAILWIND',
  'GRAPHQL',
  'ANIMATION',
  'PERFORMANCE',
  'UI/UX',
]

// =============================================
// Kiểu dữ liệu cấu hình cho mỗi item trong scene (trước khi render)
// =============================================
interface ISceneItemDef {
  id: string
  x: number
  y: number
  rotZ: number
  baseZ: number
  type: 'text' | 'card' | 'star'
  projectIndex: number
}

// =============================================
// BrutalScroll: Component hiệu ứng 3D scroll
// =============================================
const BrutalScroll = ({ projects = [] }: { projects?: IProject[] }) => {
  const { t } = useLocale()
  const [itemDefs, setItemDefs] = useState<ISceneItemDef[]>([])

  // Ref chứa các DOM node render ra từ React
  const itemElsRef = useRef<(HTMLDivElement | null)[]>([])

  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const worldRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  const rafIdRef = useRef<number>(0)

  // Bỏ qua hiệu ứng, nhảy thẳng tới phần Liên hệ
  const handleSkip = useCallback(() => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Track scroll position of the tracking section natively
  const scrollPosRef = useRef(0)
  const velocityRef = useRef(0)
  const lastScrollPosRef = useRef(0)

  // =============================================
  // 1. Tạo config (ngẫu nhiên) cho items khi mount
  // =============================================
  useEffect(() => {
    const list: ISceneItemDef[] = []
    const totalProject = projects.length > 0 ? projects.length : 9

    // Tạo mảng trung gian: xen text vào giữa các card project
    // Cứ sau mỗi 2 card thì chèn 1 text item
    // => tất cả projects đều được hiển thị đúng thứ tự
    const TEXT_INTERVAL = 2 // chèn text sau mỗi N card
    type IntermediateItem =
      | { kind: 'card'; projectIndex: number }
      | { kind: 'text'; textIndex: number }

    const interleaved: IntermediateItem[] = []
    let textCounter = 0
    for (let p = 0; p < totalProject; p++) {
      // Chèn text trước mỗi nhóm TEXT_INTERVAL card
      if (p % TEXT_INTERVAL === 0) {
        interleaved.push({
          kind: 'text',
          textIndex: textCounter % TEXTS.length,
        })
        textCounter++
      }
      interleaved.push({ kind: 'card', projectIndex: p })
    }

    // Build scene items từ mảng trung gian
    interleaved.forEach((item, i) => {
      list.push({
        id: `main-${i}`,
        x: (Math.random() - 0.5) * window.innerWidth * 0.8,
        y: (Math.random() - 0.5) * window.innerHeight * 0.8,
        rotZ: (Math.random() - 0.5) * 20,
        baseZ: -i * Z_GAP,
        type: item.kind === 'text' ? 'text' : 'card',
        projectIndex: item.kind === 'card' ? item.projectIndex : item.textIndex,
      })
    })

    const totalItems = interleaved.length

    // Stars
    for (let i = 0; i < STAR_COUNT; i++) {
      list.push({
        id: `star-${i}`,
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        rotZ: 0,
        baseZ: -(Math.random() * (totalItems * Z_GAP)),
        type: 'star',
        projectIndex: -1,
      })
    }

    setItemDefs(list)
  }, [projects.length])

  // Lặp chiều sâu theo số lượng items (card + text interleaved)
  const totalDepth = useMemo(() => {
    const totalProject = projects.length > 0 ? projects.length : 9
    const TEXT_INTERVAL = 2
    const textCount = Math.ceil(totalProject / TEXT_INTERVAL)
    const totalItems = totalProject + textCount
    return totalItems * Z_GAP
  }, [projects.length])

  // Chiều cao track tỉ lệ theo số item (thay cho 800vh cố định)
  const trackVh = useMemo(() => {
    const totalProject = projects.length > 0 ? projects.length : 9
    const textCount = Math.ceil(totalProject / 2)
    const totalItems = totalProject + textCount
    return Math.round(100 + totalItems * 30)
  }, [projects.length])

  // =============================================
  // 2. Animation Update Layout
  // =============================================
  const update = useCallback(
    (scroll: number, vel: number) => {
      const viewport = viewportRef.current
      const world = worldRef.current
      if (!viewport || !world) return

      // Dynamic FOV (Warp effect)
      const warp = Math.min(Math.abs(vel) * 2, 400)
      viewport.style.perspective = `${800 - warp}px`

      // World global rotation theo velocity
      const tilt = vel * 0.05
      world.style.transform = `rotateX(${-tilt}deg)`

      const speedFactor = 2.5
      const currentDist = scroll * speedFactor

      itemDefs.forEach((item, index) => {
        const el = itemElsRef.current[index]
        if (!el) return

        let z = item.baseZ + currentDist
        const offset = z % totalDepth

        let vizZ = offset
        if (vizZ > 500) vizZ -= totalDepth
        if (vizZ < -totalDepth + 500) vizZ += totalDepth
        while (vizZ > 500) vizZ -= totalDepth

        let alpha = 1
        const maxDist = -3000

        if (vizZ < maxDist) alpha = 0
        else if (vizZ < maxDist + 1000) alpha = (vizZ - maxDist) / 1000

        if (vizZ > 0) alpha = 1 - vizZ / 400
        if (alpha < 0) alpha = 0

        el.style.opacity = String(alpha)

        if (alpha > 0) {
          if (item.type === 'star') {
            const stretch = Math.max(1, Math.min(1 + Math.abs(vel) * 0.05, 5))
            el.style.transform = `translate3d(${item.x}px, ${item.y}px, ${vizZ}px) scale3d(1, ${stretch}, 1)`
          } else {
            const floatRot = Math.sin(Date.now() * 0.001 + item.baseZ) * 5
            el.style.transform = `translate3d(${item.x}px, ${item.y}px, ${vizZ}px) rotateZ(${item.rotZ + floatRot}deg)`
          }
        }
      })
    },
    [itemDefs, totalDepth]
  )

  useEffect(() => {
    if (itemDefs.length === 0) return

    // =============================================
    // 2. Track scroll & Animation loop
    // =============================================
    const handleScroll = () => {
      if (!trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()

      // Calculate progress from 0 to max distance within the track
      // If rect.top > 0, we haven't reached it yet (0)
      // If rect.top <= 0, we calculate how far we scrolled past it
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // Map native pixel scrolls directly or calculate exact scroll delta within the track section
        // We'll calculate total distance scrolled through this block
        let distance = -rect.top

        // Prevent backward motion before track is reached
        if (distance < 0) distance = 0
        if (distance > rect.height - window.innerHeight)
          distance = rect.height - window.innerHeight

        // Cập nhật vị trí cuộn cho update
        scrollPosRef.current = distance

        // Cập nhật thanh tiến trình
        const maxDist = rect.height - window.innerHeight
        if (progressBarRef.current && maxDist > 0) {
          const pct = Math.max(0, Math.min(1, distance / maxDist))
          progressBarRef.current.style.width = `${pct * 100}%`
        }
      }
    }

    // Lắng nghe scroll natively
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Khởi tạo ban đầu

    const raf = () => {
      // Calculate velocity smoothly from scroll delta
      const delta = scrollPosRef.current - lastScrollPosRef.current
      velocityRef.current += (delta * 0.5 - velocityRef.current) * 0.1

      update(scrollPosRef.current, velocityRef.current)

      lastScrollPosRef.current = scrollPosRef.current
      rafIdRef.current = requestAnimationFrame(raf)
    }

    rafIdRef.current = requestAnimationFrame(raf)

    // =============================================
    // Cleanup khi unmount
    // =============================================
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      // Dọn dẹp không cần xoá DOM nữa vì React quản lý DOM
    }
  }, [itemDefs.length, update])

  return (
    <div
      ref={trackRef}
      className="relative w-full"
      style={{ height: `${trackVh}vh` }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Skip + progress HUD */}
        <div className="absolute top-4 left-1/2 z-[5] flex w-[min(90%,420px)] -translate-x-1/2 flex-col items-center gap-2 pointer-events-none">
          <div className="flex w-full items-center justify-between gap-3 pointer-events-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--c-text-muted)]">
              {t({ vi: 'Cuộn để khám phá', en: 'Scroll to explore' })}
            </span>
            <button
              onClick={handleSkip}
              className="rounded-full border border-[var(--c-border)] bg-[color-mix(in_srgb,var(--c-bg)_60%,transparent)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--c-text)] backdrop-blur-md transition-colors hover:border-[var(--c-primary)] hover:text-[var(--c-primary)]"
            >
              {t({ vi: 'Bỏ qua', en: 'Skip' })}
            </button>
          </div>
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--c-text)_12%,transparent)]">
            <div
              ref={progressBarRef}
              className="h-full w-0 rounded-full bg-[var(--c-primary)]"
            />
          </div>
        </div>

        {/* Depth mask overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          // style={{
          //   background:
          //     'radial-gradient(circle at center, transparent 0%, var(--c-bg) 85%)',
          // }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none opacity-40"
          // style={{
          //   background:
          //     'url(\'data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E\')',
          // }}
        />

        {/* Viewport — perspective 3D */}
        <div
          ref={viewportRef}
          className="absolute inset-0 overflow-hidden z-[1]"
          style={{ perspective: '800px' }}
        >
          <div
            ref={worldRef}
            className="absolute top-1/2 left-1/2 will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {itemDefs.map((def, i) => (
              <div
                key={def.id}
                ref={(el) => {
                  itemElsRef.current[i] = el
                }}
                className="absolute left-0 top-0 flex items-center justify-center"
                style={{
                  backfaceVisibility: 'hidden',
                  transformOrigin: 'center center',
                  opacity: 0, // initially hide until raf updates
                }}
              >
                {/* 3. Render Card (React Component context) */}
                {def.type === 'card' && projects[def.projectIndex] && (
                  <Link
                    href={projects[def.projectIndex].link || '#'}
                    target={
                      projects[def.projectIndex].link ? '_blank' : '_self'
                    }
                    className="block relative w-[250px] h-[350px] md:w-[350px] md:h-[500px] rounded overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:z-[100] group"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Background Image (If exists) or Solid Black */}
                    <div
                      className="absolute inset-0 bg-black/80 transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: projects[def.projectIndex]
                          .mobilePreview
                          ? `url(${projects[def.projectIndex].mobilePreview})`
                          : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    {/* Overlay gradient so text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:bg-black/80 transition-colors" />
                    {/* Card Content */}
                    <div className="relative w-full h-full p-5 md:p-8 flex flex-col justify-between border border-white/15 rounded hover:border-primary transition-colors">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-mono text-xs text-primary border border-primary inline-block px-1.5 py-0.5 uppercase backdrop-blur-md bg-black/50">
                            {t(projects[def.projectIndex].category)}
                          </span>
                          {projects[def.projectIndex].period && (
                            <span className="font-mono text-[10px] text-white/80 border border-white/20 inline-block px-1.5 py-0.5 backdrop-blur-md bg-black/50">
                              {projects[def.projectIndex].period}
                            </span>
                          )}
                        </div>
                        <h3 className="text-[2rem] md:text-3xl leading-[1.1] m-0 uppercase font-extrabold tracking-tighter text-white group-hover:text-primary transition-colors">
                          {projects[def.projectIndex].title}
                        </h3>
                        {projects[def.projectIndex].role && (
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary/90">
                            {t(projects[def.projectIndex].role!)}
                          </span>
                        )}
                      </div>
                      <span className="mt-2">
                        <img
                          src={projects[def.projectIndex].preview}
                          className="w-full aspect-video rounded-lg object-cover"
                          alt={`${projects[def.projectIndex].title} — ${t(projects[def.projectIndex].category)}`}
                          loading="lazy"
                        />
                      </span>
                      <div className="mt-auto">
                        {projects[def.projectIndex].metric && (
                          <p className="text-primary text-xs font-bold mb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {t(projects[def.projectIndex].metric!)}
                          </p>
                        )}
                        <p className="text-gray-300 text-sm line-clamp-3 mb-4 drop-shadow-md">
                          {t(projects[def.projectIndex].description)}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {projects[def.projectIndex].tech
                            .slice(0, 3)
                            .map((t) => (
                              <span
                                key={t}
                                className="text-[10px] text-white bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10"
                              >
                                {t}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* 4. Render Text */}
                {def.type === 'text' && (
                  <div
                    className="text-[12vw] md:text-[8vw] font-black text-transparent uppercase whitespace-nowrap pointer-events-none"
                    style={{
                      WebkitTextStroke: '2px var(--c-text)',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {TEXTS[def.projectIndex % TEXTS.length]}
                  </div>
                )}

                {/* 5. Render Star */}
                {def.type === 'star' && (
                  <div
                    className="w-1 h-1 bg-white rounded-full absolute shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrutalScroll
