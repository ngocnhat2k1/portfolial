'use client'

import React from 'react'
import MagicBento, { BentoCardProps } from '@/components/MagicBento'
import {
  FaCode,
  FaReact,
  FaDatabase,
  FaNetworkWired,
  FaPaintBrush,
  FaTools,
} from 'react-icons/fa'
import { useLocale } from '@/i18n'
import { skillGroups, SkillGroup } from '@/data/skills'
import { sectionTitles } from '@/data/site'

const iconMap: Record<SkillGroup['iconKey'], React.ReactNode> = {
  code: <FaCode />,
  react: <FaReact />,
  database: <FaDatabase />,
  network: <FaNetworkWired />,
  paint: <FaPaintBrush />,
  tools: <FaTools />,
}

const Skills = () => {
  const { t } = useLocale()

  const skillCardsData: BentoCardProps[] = skillGroups.map((g) => ({
    title: t(g.title),
    description: g.description,
    label: t(g.label),
    icon: iconMap[g.iconKey],
  }))

  return (
    <>
      <h3 className="font-bold text-3xl md:text-4xl xl:text-5xl w-full text-center  my-4 md:my-6 xl:my-8">
        {t(sectionTitles.skills)}
      </h3>
      <div className="w-full relative flex items-center justify-center py-4 xl:py-10 min-h-[60vh]">
        <MagicBento
          cardsData={skillCardsData}
          glowColor="var(--c-primary)"
          enableMagnetism={true}
          enableTilt={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableStars={true}
          particleCount={15}
        />
      </div>
    </>
  )
}

export default Skills
