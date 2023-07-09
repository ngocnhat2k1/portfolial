'use client'

import React from 'react'
import { m } from 'framer-motion'

type Props = {}
type PropSkill = {
  name: string
  x: number | string
  y: number | string
}
const Skill = ({ name, x, y }: PropSkill) => {
  return (
    <m.div
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
    </m.div>
  )
}

const Skills = (props: Props) => {
  return (
    <>
      <div className="font-bold text-5xl lg:mt-52 w-full text-center mt-10 mb-4">
        Skill
      </div>
      <div className="w-full h-[40vh] relative flex items-center justify-center bg-circularLightSm dark:bg-circularDarkSm rounded-full xl:h-screen lg:h-[80vh]  lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <m.div
          className="flex items-center justify-center rounded-full bg-dark text-light py-2 px-4 shadow-dark cursor-default dark:bg-light dark:text-black lg:py-3 lg:px-6 md:text-sm md:py-1.5 md:px-3 text-xs"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, y: 0 }}
        >
          Web
        </m.div>

        <Skill name="CSS" x={'0vw'} y={'-10vw'} />
        <Skill name="HTML" x={'10vw'} y={'10vw'} />
        <Skill name="JavaScript" x={'20vw'} y={'-5vw'} />
        <Skill name="React" x={'15vw'} y={'-10vw'} />
        <Skill name="Redux" x={'0vw'} y={'15vw'} />
        <Skill name="Redux-Toolkit" x={'10vw'} y={'-18vw'} />
        <Skill name="NextJS" x={'-10vw'} y={'-15vw'} />
        <Skill name="TailwindCSS" x={'-20vw'} y={'2vw'} />
        <Skill name="TypeScript" x={'-15vw'} y={'-5vw'} />
        <Skill name="MaterialUI" x={'-15vw'} y={'10vw'} />
        <Skill name="SCSS" x={'-25vw'} y={'-10vw'} />
        <Skill name="Bootstrap" x={'15vw'} y={'4vw'} />
      </div>
    </>
  )
}

export default Skills
