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
      className="flex items-center justify-center rounded-full bg-dark text-light py-3 px-6 shadow-dark absolute"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {name}
    </m.div>
  )
}

const Skills = (props: Props) => {
  return (
    <>
      <div className="font-bold text-5xl mt-52 w-full text-center">Skill</div>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full">
        <m.div
          className="flex items-center justify-center rounded-full bg-dark text-light p-8 shadow-dark cursor-default"
          whileHover={{ scale: 1.1 }}
          whileInView={{ x: 0, y: 0 }}
        >
          Web
        </m.div>

        <Skill name="CSS" x={'0vw'} y={'-10vw'} />
        <Skill name="HTML" x={'10vw'} y={'10vw'} />
        <Skill name="JavaScript" x={'20vw'} y={'-5vw'} />
        <Skill name="React" x={'15vw'} y={'-10vw'} />
        <Skill name="Redux" x={'0vw'} y={'15vw'} />
        <Skill name="Redux-Toolkit" x={'10vw'} y={'-15vw'} />
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
