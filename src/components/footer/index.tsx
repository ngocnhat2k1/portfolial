'use client'

import Link from 'next/link'
import { FacebookIcon, GithubIcon, LinkedInIcon } from '../icons/icons'
import { useLocale } from '@/i18n'
import { socials, profile, ui } from '@/data/site'

const Footer = () => {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="bottom-0 w-full lg:flex-row border-t-4 border-black py-4 flex justify-between px-4 items-center sm:px-8 lg:px-12 xl:px-16">
      <div>
        {year} © {profile.name}. {t(ui.copyright)}
      </div>
      <div className="flex justify-center gap-2 sm:gap-3 lg:gap-5">
        <Link
          href={socials.github}
          target="_blank"
          className="hover:-translate-y-1 esae duration-300"
        >
          <GithubIcon className="text-[36px]" />
        </Link>
        <Link
          href={socials.linkedin}
          target="_blank"
          className="hover:-translate-y-1 esae duration-300"
        >
          <LinkedInIcon className="text-[36px]" />
        </Link>
        <Link
          href={socials.facebook}
          target="_blank"
          className="hover:-translate-y-1 esae duration-300"
        >
          <FacebookIcon className="text-[10px]" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
