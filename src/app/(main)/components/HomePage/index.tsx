'use client'

import MotionContainer from '@/components/animate/MotionContainer'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import Image from 'next/image'
import HomeImage from '../../../../public/HomeImage.png'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons/icons'
import Typewriter from 'typewriter-effect'

const HomePage = () => {
  return (
    <MotionContainer>
      <div className=" flex items-center flex-col-reverse gap-4 lg:flex-row light:text-dark dark:text-white  justify-between w-full ">
        <div className="w-[100%] md:p-12 md:w-[60%] ">
          <m.h1
            variants={varFade({ durationIn: 0.5 }).inDown}
            className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold h-14 lg:h-48 py-3 "
          >
            <Typewriter
              options={{
                strings: [
                  'Turning Vision Into Reality With Code And Design.',
                  'Frontend Team Leader & Software Engineer.',
                ],
                autoStart: true,
                loop: true,
                delay: 80,
              }}
            />
          </m.h1>
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="py-8 xs:text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Frontend Developer with 3+ years of experience specializing in the
            React/Next.js ecosystem. Experienced in building high-performance
            e-commerce platforms, complex Admin Dashboards (ERP), and E-learning
            systems. Currently serving as Frontend Team Leader at Mona Media.
          </m.p>
          <m.div variants={varFade({ durationIn: 0.7 }).inUp}>
            <Link
              href="/resume-v2.pdf"
              className="w-8 h-2 py-4 px-4 border-2 border-primary bg-primary text-light rounded-md mr-4 hover:bg-transparent hover:text-primary font-bold ease-in duration-300 "
              target="_blank"
              passHref
            >
              Resume
              <LinkArrow className="!w-7 pl-1 pb-1 inline-block" />
            </Link>
            <Link
              href="mailto:ngocnhat2k1@gmail.com"
              target="_blank"
              className="relative group font-bold text-primary  ease-in duration-300 ml-4"
              passHref
            >
              Contact
              <span className="h-[2px] inline-block w-0 bg-primary absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300">
                &nbsp;
              </span>
            </Link>
          </m.div>
        </div>

        <m.div
          className="lg:w-2/5 w-[80%] "
          variants={varFade({ durationIn: 0.7 }).inRight}
        >
          <Image alt="" src={HomeImage} priority />
        </m.div>
      </div>
    </MotionContainer>
  )
}

export default HomePage
