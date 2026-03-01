'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import AvatarAbout from '../../../../public/avatarAbout.png'
import CountUp from 'react-countup'

const AboutPage = () => {
  // Số liệu thực tế từ CV: 3+ năm = 36+ tháng kinh nghiệm
  const listCountUp = [
    { number: 36, text: 'Months of Experience' },
    { number: 10, text: 'Projects Completed' },
    { number: 5, text: 'Satisfied Clients' },
  ]

  return (
    <>
      <div className="w-fit mx-auto pt-6 pb-8">
        <div className="w-full lg:text-5xl font-bold uppercase text-xl lg:pb-8 lg:pt-2">
          <Typewriter
            options={{
              strings: ['Welcome to my profile!', 'Be better, be complete!'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-3">
        <div className="border-4 border-primary rounded-3xl shadow-2xl hover:scale-105 duration-300 bg-gray-300">
          <Image
            alt=""
            src={AvatarAbout}
            priority
            className="p-4 rounded-3xl "
          />
        </div>
        <div className="biography col-span-2 lg:pl-12 text-justify pt-4 lg:pt-0">
          <div className="lg:px-8 px-2 text-xl font-bold text-gray-600 pb-4">
            BIOGRAPHY
          </div>
          <div>
            <div className="py-2">
              Hi. I&lsquo;m <strong>Tran Ngoc Nhat</strong>, a Frontend
              Developer &amp; Team Leader from Ho Chi Minh City, Vietnam. With
              3+ years of hands-on experience specializing in the React/Next.js
              ecosystem, I have a passion for building high-performance web
              applications and leading development teams.
            </div>
            <div className="py-2">
              I have experience building high-performance e-commerce platforms,
              complex Admin Dashboards (ERP), and E-learning systems. Currently
              serving as Frontend Team Leader at <strong>Mona Media</strong>, I
              manage task distribution, conduct code reviews, and drive product
              quality with a strong product mindset.
            </div>
            <div className="py-2">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users. I look forward to the opportunity
              to bring my skills and passion to your next project.
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-col-3 py-12 lg:px-12">
        {listCountUp.map((item, index) => {
          return (
            <div className="text-center" key={index}>
              <CountUp
                start={0}
                end={item.number}
                enableScrollSpy={true}
                scrollSpyDelay={2000}
                duration={3}
                suffix="+"
                className="text-5xl font-bold "
              ></CountUp>
              <div className="lg:text-2xl lg:my-6 my-2">{item.text}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AboutPage
