'use client'

import { useEffect, useState, useCallback } from 'react'

// =============================================
// Danh sách tất cả themes có sẵn
// =============================================
export type ThemeName = 'dark' | 'ocean' | 'forest' | 'sunset' | 'cyberpunk'

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
    name: 'dark',
    label: 'Dark',
    previewColors: {
      bg: '#0f172a',
      surface: '#1e293b',
      primary: '#38bdf8',
      text: '#f8fafc',
    },
  },
  {
    name: 'ocean',
    label: 'Ocean',
    previewColors: {
      bg: '#0f111a',
      surface: '#1a1e2e',
      primary: '#818cf8',
      text: '#e0e7ff',
    },
  },
  {
    name: 'forest',
    label: 'Forest',
    previewColors: {
      bg: '#0e1511',
      surface: '#18241d',
      primary: '#34d399',
      text: '#d1fae5',
    },
  },
  {
    name: 'sunset',
    label: 'Sunset',
    previewColors: {
      bg: '#1a1412',
      surface: '#2a201d',
      primary: '#fb923c',
      text: '#ffedd5',
    },
  },
  {
    name: 'cyberpunk',
    label: 'Cyberpunk',
    previewColors: {
      bg: '#12091c',
      surface: '#201132',
      primary: '#c084fc',
      text: '#f3e8ff',
    },
  },
]

const STORAGE_KEY = 'portfolio-theme'
const DEFAULT_THEME: ThemeName = 'dark'

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

    // Tương thích ngược với darkMode class của Tailwind
    if (
      newTheme === 'dark' ||
      newTheme === 'ocean' ||
      newTheme === 'forest' ||
      newTheme === 'sunset' ||
      newTheme === 'cyberpunk'
    ) {
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
