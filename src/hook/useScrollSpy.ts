'use client'

import { useState, useEffect } from 'react'

/**
 * A hook that uses IntersectionObserver to determine which section is currently active
 * based on what is visible in the viewport.
 * @param sectionIds Array of section element IDs to observe
 * @param offset Option to adjust intersection root margin
 * @returns The ID of the currently active section
 */
export function useScrollSpy(
  sectionIds: string[],
  offset: string = '-20% 0px -60% 0px'
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: offset }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sectionIds, offset])

  return activeSection
}
