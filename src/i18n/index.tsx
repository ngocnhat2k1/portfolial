'use client'

// =============================================
// i18n nhẹ bằng React Context — đồng bộ pattern với useThemeEngine
// Lưu lựa chọn ngôn ngữ vào localStorage('portfolio-locale')
// Mặc định tiếng Việt (đối tượng chính: HR/công ty Việt Nam)
// =============================================
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type Locale = 'vi' | 'en'

// Kiểu dữ liệu text song ngữ dùng xuyên suốt lớp data
export type Localized = { vi: string; en: string }

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: 'vi', label: 'Tiếng Việt', short: 'VI' },
  { code: 'en', label: 'English', short: 'EN' },
]

const STORAGE_KEY = 'portfolio-locale'
const DEFAULT_LOCALE: Locale = 'vi'

interface ILocaleContext {
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  /** Lấy chuỗi theo ngôn ngữ hiện tại từ một object song ngữ */
  t: (value: Localized) => string
  mounted: boolean
}

const LocaleContext = createContext<ILocaleContext | null>(null)

export const LocaleProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [mounted, setMounted] = useState(false)

  // Khởi tạo từ localStorage sau khi mount (tránh hydration mismatch)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    const initial = saved === 'en' || saved === 'vi' ? saved : DEFAULT_LOCALE
    setLocaleState(initial)
    document.documentElement.setAttribute('lang', initial)
    setMounted(true)
  }, [])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    document.documentElement.setAttribute('lang', l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'vi' ? 'en' : 'vi')
  }, [locale, setLocale])

  const t = useCallback((value: Localized) => value[locale], [locale])

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, toggleLocale, t, mounted }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = (): ILocaleContext => {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return ctx
}
