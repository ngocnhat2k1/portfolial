import React, { use } from 'react'

const useThemeSwitcher = () => {
  const [theme, setTheme] = React.useState<string>('')
  const prefersDarkQuery = '(prefers-color-scheme: dark)'

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return [theme, setTheme] as const
}

export default useThemeSwitcher
