'use client'

import MotionContainer from '@/components/animate/MotionContainer'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import Image from 'next/image'
import HomeImage from '../../../../public/HomeImage-2.png'
import Link from 'next/link'
import { LinkArrow, GithubIcon, LinkedInIcon, FacebookIcon } from '@/components/icons/icons'
import Typewriter from 'typewriter-effect'
import Squares from '@/components/Squares'
import Button from '@/components/ui/Button'
import TechBadge from '@/components/ui/TechBadge'
import { useLocale } from '@/i18n'
import { heroTyped, heroOverview, ui, profile, socials } from '@/data/site'

const HERO_TECH = ['React', 'Next.js', 'TypeScript', 'GraphQL', 'TailwindCSS']

const HomePage = () => {
  const { t, locale } = useLocale()
  return (
    <MotionContainer className="relative overflow-hidden w-full rounded-[var(--r-2xl)] border border-[var(--c-border)] shadow-[var(--shadow-md)] bg-[var(--c-surface)]">
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
        Tran Ngoc Nhat — Frontend Technical Leader
      </h1>

      {/* Content Overlay */}
      <section className="relative z-10 flex flex-col-reverse items-center justify-between gap-8 p-6 sm:p-8 md:p-12 lg:flex-row w-full min-h-[600px] bg-gradient-to-br from-transparent to-[color-mix(in_srgb,var(--c-surface)_60%,transparent)]">
        {/* Text Column */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center">
          {/* Status + role eyebrow */}
          <m.div
            variants={varFade({ durationIn: 0.4 }).inDown}
            className="flex flex-wrap items-center gap-3 mb-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--c-border)] bg-[color-mix(in_srgb,var(--c-text)_5%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--c-text-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t(ui.availableForWork)}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--c-primary)]">
              {t(profile.title)}
            </span>
          </m.div>

          <m.div
            variants={varFade({ durationIn: 0.5 }).inDown}
            className="text-[var(--c-text)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] leading-tight"
          >
            <Typewriter
              key={locale}
              options={{
                strings: heroTyped.map((s) => t(s)),
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 30,
              }}
            />
          </m.div>

          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="py-6 text-[var(--c-text-muted)] text-base md:text-lg leading-8 max-w-2xl"
          >
            {t(heroOverview)}
          </m.p>

          {/* Tech badges */}
          <m.div
            variants={varFade({ durationIn: 0.7 }).inUp}
            className="flex flex-wrap gap-2 mb-6"
          >
            {HERO_TECH.map((tech) => (
              <TechBadge key={tech} accent>
                {tech}
              </TechBadge>
            ))}
          </m.div>

          <m.div
            variants={varFade({ durationIn: 0.7 }).inUp}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href={profile.resume} target="_blank" magnet variant="primary">
              {t(ui.resume)}
              <LinkArrow className="w-5 h-5" />
            </Button>

            <Button href="mailto:ngocnhat2k1@gmail.com" variant="outline">
              {t(ui.contactMe)}
            </Button>

            {/* Social links */}
            <div className="flex items-center gap-1 sm:ml-2">
              <Link
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full text-[var(--c-text-muted)] hover:text-[var(--c-primary)] hover:bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)] transition-colors"
              >
                <GithubIcon className="text-2xl" />
              </Link>
              <Link
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full text-[var(--c-text-muted)] hover:text-[var(--c-primary)] hover:bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)] transition-colors"
              >
                <LinkedInIcon className="text-2xl" />
              </Link>
              <Link
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full text-[var(--c-text-muted)] hover:text-[var(--c-primary)] hover:bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)] transition-colors"
              >
                <FacebookIcon className="text-base" />
              </Link>
            </div>
          </m.div>
        </div>

        {/* Image Column */}
        <m.div
          className="w-[70%] sm:w-[50%] lg:w-[38%] max-w-[440px] relative"
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
