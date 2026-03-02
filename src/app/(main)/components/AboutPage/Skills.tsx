'use client'

import React from 'react'
import { m } from 'framer-motion'

type Props = {}
type PropSkill = {
  name: string
  x: number | string
  y: number | string
}
// Component hiển thị từng skill trên biểu đồ
const Skill = ({ name, x, y }: PropSkill) => {
  return (
    <m.h3
      className="flex items-center justify-center rounded-full bg-dark dark:bg-light dark:text-black text-light py-1 px-2
      lg:py-3 lg:px-6 md:text-sm md:py-1.5 md:px-3 text-xs
      shadow-dark absolute"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </m.h3>
  )
}

const Skills = (props: Props) => {
  return (
    <>
      <h2 className="font-bold text-5xl lg:mt-52 w-full text-center mt-10 mb-4">
        Skills
      </h2>
      <div className="w-full h-[40vh] relative flex items-center justify-center bg-circularLightSm dark:bg-circularDarkSm rounded-full xl:h-screen lg:h-[80vh]  lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        {/* Trung tâm */}
        <m.div
          className="flex items-center justify-center rounded-full bg-dark text-light py-2 px-4 shadow-dark cursor-default dark:bg-light dark:text-black lg:py-3 lg:px-6 md:text-sm md:py-1.5 md:px-3 text-xs"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, y: 0 }}
        >
          Full Stack
        </m.div>

        {/* Ngôn ngữ cốt lõi */}
        <Skill name="TypeScript" x={'-15vw'} y={'-5vw'} />
        <Skill name="JavaScript" x={'20vw'} y={'-5vw'} />
        <Skill name="HTML5" x={'10vw'} y={'10vw'} />
        <Skill name="CSS3 / SCSS" x={'-25vw'} y={'-10vw'} />

        {/* Frameworks */}
        <Skill name="Next.js" x={'-10vw'} y={'-15vw'} />
        <Skill name="React.js" x={'15vw'} y={'-10vw'} />
        <Skill name="Vite" x={'25vw'} y={'5vw'} />
        <Skill name="Electron" x={'0vw'} y={'-18vw'} />

        {/* State & Data */}
        <Skill name="TanStack Query" x={'10vw'} y={'-18vw'} />
        <Skill name="Zustand" x={'-20vw'} y={'2vw'} />
        <Skill name="GraphQL" x={'0vw'} y={'15vw'} />
        <Skill name="Redux" x={'15vw'} y={'4vw'} />

        {/* UI */}
        <Skill name="TailwindCSS" x={'-20vw'} y={'12vw'} />
        <Skill name="MaterialUI" x={'-15vw'} y={'10vw'} />
        <Skill name="Ant Design" x={'20vw'} y={'12vw'} />
        <Skill name="Framer Motion" x={'10vw'} y={'18vw'} />

        {/* Tools */}
        <Skill name="Git" x={'-10vw'} y={'18vw'} />
        <Skill name="Docker" x={'-25vw'} y={'-2vw'} />
        <Skill name="Jest" x={'-5vw'} y={'20vw'} />
        <Skill name="Figma" x={'5vw'} y={'-22vw'} />
      </div>
    </>
  )
}

export default Skills
