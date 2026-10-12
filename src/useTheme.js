import { useEffect, useState } from 'react'

/**
 * Light/dark theme. Defaults to the OS preference; an explicit choice is
 * remembered in localStorage (wrapped in try/catch for private browsing).
 * The initial value is applied pre-render by an inline script in index.html.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  }

  return [theme, toggle]
}
