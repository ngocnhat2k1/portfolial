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
import SectionHeading from '@/components/ui/SectionHeading'

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
    <div>
      <SectionHeading
        eyebrow={{ vi: 'Năng lực', en: 'Capabilities' }}
        title={sectionTitles.skills}
        subtitle={{
          vi: 'Bộ công nghệ và quy trình tôi dùng để xây dựng sản phẩm frontend chất lượng cao.',
          en: 'The stack and practices I use to build high-quality frontend products.',
        }}
      />
      <div className="w-full relative flex items-center justify-center pt-8 xl:pt-12">
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
    </div>
  )
}

export default Skills
