'use client'

import MotionContainer from '@/components/animate/MotionContainer'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import Image from 'next/image'
import HomeImage from '../../../../public/HomeImage-2.png'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons/icons'
import Typewriter from 'typewriter-effect'
import Squares from '@/components/Squares'
import Magnet from '@/components/Magnet'

const HomePage = () => {
  return (
    <MotionContainer className="relative overflow-hidden w-full rounded-3xl border border-[var(--c-border)] shadow-sm bg-[var(--c-surface)]">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="var(--c-border)"
          hoverFillColor="color-mix(in srgb, var(--c-primary) 20%, transparent)"
        />
      </div>

      <h1 className="sr-only">
        Tran Ngoc Nhat - Frontend Developer & Software Engineer
      </h1>

      {/* Content Overlay */}
      <section className="relative z-10 flex flex-col-reverse items-center justify-between gap-8 p-6 sm:p-8 md:p-12 lg:flex-row w-full min-h-[600px] bg-gradient-to-br from-transparent to-[color-mix(in_srgb,var(--c-surface)_60%,transparent)]">
        {/* Text Column */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <m.div
            variants={varFade({ durationIn: 0.5 }).inDown}
            className="text-[var(--c-text)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] leading-tight"
          >
            <Typewriter
              options={{
                strings: [
                  'Turning Vision Into Reality With Code.',
                  'Frontend Team Leader & Software Engineer.',
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 30,
              }}
            />
          </m.div>

          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="py-6 text-[var(--c-text-muted)] text-base md:text-lg leading-10 max-w-2xl"
          >
            Frontend Developer with 3+ years of experience specializing in the
            React/Next.js ecosystem. Experienced in building high-performance
            e-commerce platforms, complex Admin Dashboards (ERP), and E-learning
            systems. Currently serving as Frontend Team Leader at Mona Media.
          </m.p>

          <m.div
            variants={varFade({ durationIn: 0.7 }).inUp}
            className="flex flex-wrap items-center gap-6 mt-4"
          >
            <Magnet padding={50} magnetStrength={3}>
              <Link
                href="/resume-v2.pdf"
                className="group relative inline-flex items-center justify-center gap-2 py-3 px-6 md:px-8 text-[var(--c-primary-content)] font-bold rounded-xl overflow-hidden shadow-[0_4px_15px_color-mix(in_srgb,var(--c-primary)_30%,transparent)] hover:shadow-[0_8px_25px_color-mix(in_srgb,var(--c-primary)_50%,transparent)] transition-all duration-300 outline-none"
                target="_blank"
                passHref
              >
                <span className="absolute inset-0 bg-[var(--c-primary)] rounded-xl transition-transform duration-300 group-hover:scale-105"></span>
                <span className="relative flex items-center gap-2">
                  Resume
                  <LinkArrow className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </Link>
            </Magnet>

            <Link
              href="mailto:ngocnhat2k1@gmail.com"
              target="_blank"
              className="relative group font-bold text-[var(--c-text)] hover:text-[var(--c-primary)] transition-colors duration-300"
              passHref
            >
              Contact Me
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--c-primary)] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </m.div>
        </div>

        {/* Image Column */}
        <m.div
          className="w-[70%] sm:w-[50%] lg:w-[40%] max-w-[450px] relative"
          variants={varFade({ durationIn: 0.7 }).inRight}
        >
          {/* Decorative glow behind image */}
          <div className="absolute inset-0 bg-[var(--c-primary)] blur-[80px] opacity-20 rounded-full animate-pulse"></div>

          <Image
            alt="Tran Ngoc Nhat"
            src={HomeImage}
            priority
            className="relative z-10 drop-shadow-2xl"
          />
        </m.div>
      </section>
    </MotionContainer>
  )
}

export default HomePage
