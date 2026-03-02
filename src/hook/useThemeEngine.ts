'use client'

import { useEffect, useState, useCallback } from 'react'

// =============================================
// Danh sách tất cả themes có sẵn
// =============================================
export type ThemeName =
  | 'light'
  | 'dark'
  | 'ocean'
  | 'forest'
  | 'sunset'
  | 'cyberpunk'

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
    name: 'light',
    label: 'Light',
    previewColors: {
      bg: '#F5F5F5',
      surface: '#ffffff',
      primary: '#1D7874',
      text: '#071E22',
    },
  },
  {
    name: 'dark',
    label: 'Dark',
    previewColors: {
      bg: '#071E22',
      surface: '#0d2e33',
      primary: '#1D7874',
      text: '#F5F5F5',
    },
  },
  {
    name: 'ocean',
    label: 'Ocean',
    previewColors: {
      bg: '#03045E',
      surface: '#0d1b8a',
      primary: '#0096C7',
      text: '#CAF0F8',
    },
  },
  {
    name: 'forest',
    label: 'Forest',
    previewColors: {
      bg: '#1B4332',
      surface: '#2D6A4F',
      primary: '#52B788',
      text: '#D8F3DC',
    },
  },
  {
    name: 'sunset',
    label: 'Sunset',
    previewColors: {
      bg: '#264653',
      surface: '#2A5F70',
      primary: '#E76F51',
      text: '#F4F1DE',
    },
  },
  {
    name: 'cyberpunk',
    label: 'Cyberpunk',
    previewColors: {
      bg: '#10002B',
      surface: '#240046',
      primary: '#F72585',
      text: '#E0AAFF',
    },
  },
]

const STORAGE_KEY = 'portfolio-theme'
const DEFAULT_THEME: ThemeName = 'light'

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
