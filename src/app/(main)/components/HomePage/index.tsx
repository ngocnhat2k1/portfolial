'use client'

import MotionContainer from '@/components/animate/MotionContainer'
import { varFade } from '@/components/animate/variants'
import { LinkArrow } from '@/components/icons/icons'
import Squares from '@/components/Squares'
import BlurText from '@/components/blur_text'
import Button from '@/components/ui/Button'
import TechBadge from '@/components/ui/TechBadge'
import { heroOverview, heroTyped, profile, ui } from '@/data/site'
import { useLocale } from '@/i18n'
import { m } from 'framer-motion'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import HomeImage from '../../../../public/HomeImage-2.png'

const HERO_TECH = ['React', 'Next.js', 'TypeScript', 'GraphQL', 'TailwindCSS']

const HomePage = () => {
  const { t, locale } = useLocale()
  return (
    <MotionContainer className="relative overflow-hidden w-full rounded-[var(--r-2xl)] border border-[var(--c-border)] shadow-[var(--shadow-md)] bg-[var(--c-surface)]">
      {/* Background Squares hoạt hình */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="var(--c-border)"
          hoverFillColor="color-mix(in srgb, var(--c-primary) 20%, transparent)"
        />
      </div>

      {/* Content Overlay */}
      <section className="relative z-10 flex flex-col-reverse items-center justify-between gap-8 p-6 sm:p-8 md:p-12 lg:flex-row w-full min-h-[600px] bg-gradient-to-br from-transparent to-[color-mix(in_srgb,var(--c-surface)_60%,transparent)]">
        {/* Cột văn bản */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center">
          {/* Trạng thái công việc + Eyebrow role */}
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

          {/* Tiêu đề chính hiển thị với hiệu ứng BlurText nghệ thuật */}
          <h1 className="text-[var(--c-text)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-2">
            <BlurText
              text="Tran Ngoc Nhat"
              delay={80}
              animateBy="letters"
              direction="bottom"
              className="justify-start font-display"
            />
          </h1>

          {/* Dòng chữ chạy giới thiệu vai trò */}
          <m.div
            variants={varFade({ durationIn: 0.5 }).inDown}
            className="text-[var(--c-primary)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold min-h-[50px] sm:min-h-[60px] leading-tight mb-4"
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

          {/* Đoạn giới thiệu tổng quan với hiệu ứng BlurText theo từng từ */}
          <div className="py-2 text-[var(--c-text-muted)] text-base md:text-lg leading-8 max-w-2xl">
            <BlurText
              text={t(heroOverview)}
              delay={25}
              animateBy="words"
              direction="top"
              className="justify-start text-left text-[var(--c-text-muted)]"
            />
          </div>

          {/* Các Badge công nghệ */}
          <m.div
            variants={varFade({ durationIn: 0.7 }).inUp}
            className="flex flex-wrap gap-2 mb-6 mt-6"
          >
            {HERO_TECH.map((tech) => (
              <TechBadge key={tech} accent>
                {tech}
              </TechBadge>
            ))}
          </m.div>

          {/* Các nút hành động */}
          <m.div
            variants={varFade({ durationIn: 0.7 }).inUp}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              href={profile.resume}
              target="_blank"
              magnet
              variant="primary"
            >
              {t(ui.resume)}
              <LinkArrow className="w-5 h-5" />
            </Button>

            <Button href="mailto:ngocnhat2k1@gmail.com" variant="outline">
              {t(ui.contactMe)}
            </Button>
          </m.div>
        </div>

        {/* Cột hình ảnh */}
        <m.div
          className="w-[70%] sm:w-[50%] lg:w-[38%] max-w-[440px] relative"
          variants={varFade({ durationIn: 0.7 }).inRight}
        >
          {/* Vùng phát sáng trang trí phía sau hình ảnh */}
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
