'use client'

import Link from 'next/link'
import { FacebookIcon, GithubIcon, LinkedInIcon } from '../icons/icons'
import { useLocale } from '@/i18n'
import { socials, profile, ui, navItems } from '@/data/site'

const Footer = () => {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document
        .getElementById(href.replace('#', ''))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full border-t border-[var(--c-border)] bg-[var(--c-surface)]">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-4 sm:px-6 py-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-baseline text-xl font-bold tracking-tight"
            >
              <span className="text-[var(--c-text)]">Ngọc&nbsp;Nhật</span>
              <span className="text-[var(--c-primary)]">.dev</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-[var(--c-text-muted)]">
              {t(profile.title)} · {t(profile.location)}
            </p>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleNav(item.href)}
                className="text-sm font-medium text-[var(--c-text-muted)] transition-colors hover:text-[var(--c-primary)]"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <Link
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 text-[var(--c-text-muted)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--c-primary)] hover:bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)]"
            >
              <GithubIcon className="text-[28px]" />
            </Link>
            <Link
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-[var(--c-text-muted)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--c-primary)] hover:bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)]"
            >
              <LinkedInIcon className="text-[28px]" />
            </Link>
            <Link
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full p-2 text-[var(--c-text-muted)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--c-primary)] hover:bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)]"
            >
              <FacebookIcon className="text-[14px]" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-[var(--c-border)] pt-6 text-center text-sm text-[var(--c-text-muted)]">
          {year} © {profile.name}. {t(ui.copyright)}
        </div>
      </div>
    </footer>
  )
}

export default Footer
