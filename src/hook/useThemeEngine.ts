'use client'

import { useEffect, useState, useCallback } from 'react'

// =============================================
// Danh sách tất cả themes có sẵn
// =============================================
export type ThemeName =
  | 'terminal-noir'
  | 'cyber-midnight'
  | 'amber-noir'
  | 'light-minimal'

export interface IThemeConfig {
  name: ThemeName
  label: string
  // Màu preview để hiện trong ThemePicker (không dùng CSS var vì cần hardcode cho preview)
  previewColors: {
    bg: string
    surface: string
    primary: string
    text: string
  }
}

export const THEMES: IThemeConfig[] = [
  {
    name: 'terminal-noir',
    label: 'Terminal Noir',
    previewColors: {
      bg: '#080808',
      surface: '#111111',
      primary: '#9ECEF9',
      text: '#E2E2E5',
    },
  },
  {
    name: 'cyber-midnight',
    label: 'Cyber Midnight',
    previewColors: {
      bg: '#0A0512',
      surface: '#140C20',
      primary: '#D946EF',
      text: '#F5F3FF',
    },
  },
  {
    name: 'amber-noir',
    label: 'Amber Noir',
    previewColors: {
      bg: '#0A0806',
      surface: '#14110F',
      primary: '#F59E0B',
      text: '#FDF6E2',
    },
  },
  {
    name: 'light-minimal',
    label: 'Light Minimal',
    previewColors: {
      bg: '#F9F9FB',
      surface: '#FFFFFF',
      primary: '#111111',
      text: '#111111',
    },
  },
]

const STORAGE_KEY = 'portfolio-theme'
const DEFAULT_THEME: ThemeName = 'terminal-noir'

// =============================================
// useThemeEngine hook
// =============================================
const useThemeEngine = () => {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME)
  const [mounted, setMounted] = useState(false)

  // Áp dụng theme vào <html> element
  const applyTheme = useCallback((newTheme: ThemeName) => {
    const root = document.documentElement

    // Xóa tất cả theme class cũ và set data-theme mới
    root.setAttribute('data-theme', newTheme)

    // Tương thích ngược với darkMode class của Tailwind (tất cả các theme ngoại trừ light-minimal đều là dark)
    if (newTheme !== 'light-minimal') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem(STORAGE_KEY, newTheme)
  }, [])

  // Khởi tạo từ localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    const initialTheme = savedTheme || DEFAULT_THEME
    setThemeState(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)
  }, [applyTheme])

  const setTheme = useCallback(
    (newTheme: ThemeName) => {
      setThemeState(newTheme)
      applyTheme(newTheme)
    },
    [applyTheme]
  )

  const currentThemeConfig = THEMES.find((t) => t.name === theme) ?? THEMES[0]

  return {
    theme,
    setTheme,
    mounted,
    themes: THEMES,
    currentThemeConfig,
  }
}

export default useThemeEngine
