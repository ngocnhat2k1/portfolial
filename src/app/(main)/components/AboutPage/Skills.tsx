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

type Props = {}

const skillCardsData: BentoCardProps[] = [
  {
    title: 'Frontend Core',
    description: 'TypeScript, JavaScript, HTML5, CSS3 / SCSS',
    label: 'Core Languages',
    icon: <FaCode />,
  },
  {
    title: 'Frameworks',
    description: 'Next.js, React.js, Vite, Electron',
    label: 'Libraries',
    icon: <FaReact />,
  },
  {
    title: 'State Management',
    description: 'Zustand, Redux, Context API',
    label: 'State',
    icon: <FaDatabase />,
  },
  {
    title: 'Data & APIs',
    description: 'TanStack Query, GraphQL, REST',
    label: 'Networking',
    icon: <FaNetworkWired />,
  },
  {
    title: 'UI & Animation',
    description: 'TailwindCSS, MaterialUI, Ant Design, Framer Motion',
    label: 'Styling',
    icon: <FaPaintBrush />,
  },
  {
    title: 'Tools & Workflow',
    description: 'Git, Docker, Jest, Figma',
    label: 'Ecosystem',
    icon: <FaTools />,
  },
]

const Skills = (props: Props) => {
  return (
    <>
      <h2 className="font-bold text-5xl w-full text-center mt-10 mb-8">
        Skills & Expertise
      </h2>
      <div className="w-full relative flex items-center justify-center py-10 min-h-[60vh]">
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
