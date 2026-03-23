'use client'

import React, { useState } from 'react'
import { m } from 'framer-motion'
import { varFade } from '@/components/animate/variants'
import MotionContainer from '@/components/animate/MotionContainer'
import Link from 'next/link'
import SpotlightCard from '@/components/SpotlightCard'
import Magnet from '@/components/Magnet'
import Particles from '@/components/Particles'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiUser,
} from 'react-icons/fi'

// Thông tin liên hệ từ CV
const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'ngocnhat2k1@gmail.com',
    href: 'mailto:ngocnhat2k1@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+84 395 115 641',
    href: 'tel:+84395115641',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Tân Bình, Ho Chi Minh City, Vietnam',
    href: null,
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'tran-ngoc-nhat-109a06279',
    href: 'https://www.linkedin.com/in/tran-ngoc-nhat-109a06279/',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/ngocnhat2k1',
    href: 'https://github.com/ngocnhat2k1',
  },
]

const EMAIL = 'ngocnhat2k1@gmail.com'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body = `Hi Ngọc Nhật,\n\nFrom: ${name}\n\n${message}`
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <m.form
      variants={varFade({ durationIn: 0.6 }).inUp}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-12 space-y-5"
    >
      <h3 className="text-xl font-bold text-[var(--c-text)] mb-2">
        Send me a message
      </h3>
      <p className="text-sm text-[var(--c-text-muted)] mb-6">
        Please contact me directly at{' '}
        <Link
          href={`mailto:${EMAIL}`}
          className="text-[var(--c-primary)] hover:underline font-medium"
        >
          {EMAIL}
        </Link>{' '}
        or through this form.
      </p>

      {/* Name field */}
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-text-muted)] group-focus-within:text-[var(--c-primary)] transition-colors">
          <FiUser />
        </div>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[var(--c-surface-2)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-text-muted)] focus:outline-none focus:border-[var(--c-primary)] focus:shadow-[0_0_0_3px_var(--shadow-primary)] transition-all duration-300 text-sm"
        />
      </div>

      {/* Subject field */}
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-text-muted)] group-focus-within:text-[var(--c-primary)] transition-colors">
          <FiMail />
        </div>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[var(--c-surface-2)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-text-muted)] focus:outline-none focus:border-[var(--c-primary)] focus:shadow-[0_0_0_3px_var(--shadow-primary)] transition-all duration-300 text-sm"
        />
      </div>

      {/* Message field */}
      <div className="relative group">
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          rows={6}
          className="w-full px-4 py-3.5 rounded-xl bg-[var(--c-surface-2)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-text-muted)] focus:outline-none focus:border-[var(--c-primary)] focus:shadow-[0_0_0_3px_var(--shadow-primary)] transition-all duration-300 text-sm resize-none"
        />
      </div>

      {/* Submit button */}
      <Magnet
        padding={100}
        magnetStrength={3}
        wrapperClassName="inline-block w-full"
      >
        <button
          type="submit"
          className="group relative w-full py-3.5 px-8 text-[var(--c-primary-content)] font-bold rounded-xl overflow-hidden shadow-[0_4px_20px_color-mix(in_srgb,var(--c-primary)_40%,transparent)] hover:shadow-[0_8px_30px_color-mix(in_srgb,var(--c-primary)_60%,transparent)] transition-all duration-300 outline-none cursor-pointer"
        >
          <span className="absolute inset-0 bg-[var(--c-primary)] rounded-xl transition-transform duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,white_20%,transparent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center justify-center gap-2">
            <FiSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            Send Message
          </span>
        </button>
      </Magnet>
    </m.form>
  )
}

const ContactPage = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-[var(--c-border)] shadow-sm bg-[var(--c-surface)] py-12 px-4 sm:px-6">
      {/* Animated Particles Background */}
      <Particles
        particleCount={40}
        particleColors={[
          'var(--c-primary)',
          'var(--c-secondary)',
          'var(--c-accent)',
        ]}
        maxSize={4}
        minSize={1}
        maxSpeed={0.5}
        className="opacity-50"
      />

      <MotionContainer className="relative z-10 w-full">
        {/* Heading */}
        <m.div
          variants={varFade({ durationIn: 0.4 }).inDown}
          className="text-center mb-10"
        >
          <h2 className="font-bold text-4xl lg:text-5xl text-[var(--c-text)]">
            Get In Touch
          </h2>
          <p className="mt-4 text-[var(--c-text-muted)] text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out via any channel below.
          </p>
        </m.div>

        {/* Two-column layout: Contact info + Form */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact cards */}
          <div>
            <h3 className="sr-only">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <m.article
                  key={item.label}
                  variants={varFade({ durationIn: 0.4 + index * 0.1 }).inUp}
                  className="w-full"
                >
                  <SpotlightCard>
                    <div className="flex items-center gap-4 h-full group hover:border-[var(--c-primary)] transition-colors duration-300">
                      <Magnet
                        padding={50}
                        disabled={false}
                        magnetStrength={2}
                        wrapperClassName="flex-shrink-0"
                      >
                        <div className="mb-2 w-12 h-12 flex items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--c-primary)_15%,transparent)] text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-[color-mix(in_srgb,var(--c-primary)_20%,transparent)] group-hover:shadow-[0_0_15px_color-mix(in_srgb,var(--c-primary)_40%,transparent)]">
                          {item.icon}
                        </div>
                      </Magnet>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--c-text-muted)] mb-1">
                          {item.label}
                        </h4>
                        {item.href ? (
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base font-semibold text-[var(--c-text)] hover:text-[var(--c-primary)] transition-colors truncate block"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <p className="text-sm md:text-base font-semibold text-[var(--c-text)] truncate">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </m.article>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactForm />
        </div>

        {/* CTA Resume */}
        <m.section
          variants={varFade({ durationIn: 0.9 }).inUp}
          className="text-center mt-16"
        >
          <p className="text-[var(--c-text-muted)] mb-6 font-normal text-base">
            Want to know more about my experience?
          </p>

          <Magnet
            padding={150}
            magnetStrength={4}
            wrapperClassName="inline-block"
          >
            <Link
              href="/resume-v2.pdf"
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-2 py-3 px-8 text-[var(--c-primary-content)] font-bold rounded-xl overflow-hidden shadow-[0_4px_20px_color-mix(in_srgb,var(--c-primary)_40%,transparent)] hover:shadow-[0_8px_30px_color-mix(in_srgb,var(--c-primary)_60%,transparent)] transition-all duration-300 outline-none"
            >
              <span className="absolute inset-0 bg-[var(--c-primary)] rounded-xl transition-transform duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,white_20%,transparent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download My Resume
              </span>
            </Link>
          </Magnet>
        </m.section>
      </MotionContainer>
    </div>
  )
}

export default ContactPage
