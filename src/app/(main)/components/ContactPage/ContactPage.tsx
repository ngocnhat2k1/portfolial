'use client'

import React from 'react'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import MotionContainer from '@/components/animate/MotionContainer'
import Link from 'next/link'

// Thông tin liên hệ từ CV
const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'ngocnhat2k1@gmail.com',
    href: 'mailto:ngocnhat2k1@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+84 395 115 641',
    href: 'tel:+84395115641',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Tân Bình, Ho Chi Minh City, Vietnam',
    href: null,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'tran-ngoc-nhat-109a06279',
    href: 'https://www.linkedin.com/in/tran-ngoc-nhat-109a06279/',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/ngocnhat2k1',
    href: 'https://github.com/ngocnhat2k1',
  },
]

const ContactPage = () => {
  return (
    <MotionContainer>
      {/* Heading */}
      <m.div
        variants={varFade({ durationIn: 0.4 }).inDown}
        className="text-center mb-10"
      >
        <h1 className="font-bold text-4xl lg:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-dark/60 dark:text-light/60 text-base lg:text-lg max-w-xl mx-auto">
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out via any channel below.
        </p>
      </m.div>

      {/* Contact cards */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {contactInfo.map((item, index) => (
          <m.div
            key={item.label}
            variants={varFade({ durationIn: 0.4 + index * 0.1 }).inUp}
            className="border-2 border-solid border-dark/20 dark:border-light/20 rounded-2xl p-5
              hover:border-primary dark:hover:border-primary transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-dark/50 dark:text-light/50">
                  {item.label}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:underline break-all"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-sm font-semibold">{item.value}</p>
                )}
              </div>
            </div>
          </m.div>
        ))}
      </div>

      {/* CTA Resume */}
      <m.div
        variants={varFade({ durationIn: 0.9 }).inUp}
        className="text-center mt-12"
      >
        <p className="text-dark/60 dark:text-light/60 mb-4">
          Want to know more about my experience?
        </p>
        <Link
          href="/resume-v2.pdf"
          target="_blank"
          className="inline-block py-3 px-8 border-2 border-primary bg-primary text-light rounded-md
            hover:bg-transparent hover:text-primary font-bold ease-in duration-300"
        >
          Download My Resume
        </Link>
      </m.div>
    </MotionContainer>
  )
}

export default ContactPage
