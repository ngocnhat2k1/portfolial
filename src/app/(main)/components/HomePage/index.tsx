'use client'

import MotionContainer from '@/components/animate/MotionContainer'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import Image from 'next/image'
import HomeImage from '../../../../public/HomeImage.png'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons/icons'

const HomePage = () => {
  return (
    <main className=" flex items-center text-dark w-full ">
      <MotionContainer>
        <div className="flex items-center justify-between w-full flex-row">
          <div className="w-[60%] p-12">
            <m.h1
              variants={varFade({ durationIn: 0.7 }).inDown}
              className="text-6xl font-bold"
            >
              Turning Vision Into Reality With Code And Design.
            </m.h1>
            <m.p
              variants={varFade({ durationIn: 0.7 }).inLeft}
              className="py-8"
            >
              As a skilled front-end developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js, NextJS and web
              development.
            </m.p>
            <m.div variants={varFade({ durationIn: 0.7 }).inUp}>
              <Link
                href="/resume.pdf"
                className="w-8 h-2 py-4 px-4 border-2 border-primary bg-primary text-light rounded-md mr-4 hover:bg-transparent hover:text-primary font-bold ease-in duration-300 "
                target="_blank"
              >
                Resume
                <LinkArrow className="w-7 pl-1 pb-1 inline-block" />
              </Link>
              <Link
                href="mailto:ngocnhat2k1@gmail.com"
                target="_blank"
                className="relative group font-bold text-primary  ease-in duration-300 ml-4"
              >
                Contact
                <span className="h-[2px] inline-block w-0 bg-primary absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300">
                  &nbsp;
                </span>
              </Link>
            </m.div>
          </div>

          <m.div
            className="w-[40%]"
            variants={varFade({ durationIn: 0.7 }).inRight}
          >
            <Image alt="" src={HomeImage} priority />
          </m.div>
        </div>
      </MotionContainer>
    </main>
  )
}

export default HomePage
