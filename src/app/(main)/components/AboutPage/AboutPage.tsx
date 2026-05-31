'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'
import CountUp from 'react-countup'
import ProfileCard from '@/components/ProfileCard'
import { useLocale } from '@/i18n'
import {
  stats,
  sectionTitles,
  biography,
  biographyQuote,
  profile,
  ui,
} from '@/data/site'

const AboutPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="w-full flex flex-col">
      {/* Header Section */}
      <div className="w-full text-center pb-12">
        <h2 className="text-base sm:text-xl md:text-2xl text-[var(--c-primary)] font-medium mb-2 uppercase tracking-wider">
          {t(sectionTitles.aboutEyebrow)}
        </h2>
        <div className="mx-auto w-full max-w-full break-words font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[var(--c-text)]">
          <Typewriter
            key={locale}
            options={{
              strings: sectionTitles.aboutTyped.map((s) => t(s)),
              autoStart: true,
              loop: true,
              wrapperClassName: 'text-[var(--c-text)]',
              cursorClassName: 'text-[var(--c-primary)]',
            }}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-4">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <ProfileCard
            avatarUrl="/avatarAbout.jpeg"
            name={profile.name}
            title={t(profile.title)}
            handle={profile.handle}
            status={t(ui.availableForWork)}
            contactText={t(ui.getInTouch)}
            behindGlowEnabled={true}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowColor="var(--c-primary)"
            className="w-full max-w-[420px]"
            onContactClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          />
        </div>

        {/* Right Column: Biography & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 h-full">
          <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-[30px] p-6 md:p-10 shadow-lg relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[color-mix(in_srgb,var(--c-primary)_20%,transparent)] to-transparent opacity-50 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-150"></div>

            <h3 className="text-2xl md:text-3xl font-bold text-[var(--c-text)] mb-6 relative z-10 flex items-center gap-3">
              <span className="text-[var(--c-primary)]">#</span>{' '}
              {t(sectionTitles.biography)}
            </h3>

            <div className="space-y-4 text-[var(--c-text-muted)] text-base md:text-lg leading-relaxed relative z-10 font-light">
              {biography.map((para, i) => (
                <p key={i}>{t(para)}</p>
              ))}
              <p className="italic border-l-4 border-[var(--c-primary)] pl-4 py-1 my-6 bg-[color-mix(in_srgb,var(--c-primary)_5%,transparent)]">
                {t(biographyQuote)}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-2">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-[24px] p-4 lg:p-6 flex flex-col items-center justify-center text-center shadow-md hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-3xl lg:text-5xl font-extrabold text-[var(--c-primary)] mb-2 flex items-center">
                  <CountUp
                    start={0}
                    end={item.number}
                    enableScrollSpy={true}
                    scrollSpyDelay={500}
                    duration={2.5}
                    suffix={item.suffix}
                  />
                </div>
                <div className="text-xs lg:text-sm font-medium text-[var(--c-text-muted)] uppercase tracking-wider">
                  {t(item.text)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
