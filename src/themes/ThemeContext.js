/* eslint-disable */
import { createContext, useEffect, useCallback, useState } from 'react'

export const THEME_TYPE = {
  DARK: 'dark',
  LIGHT: 'light'
}

const ThemeContext = createContext({
  theme: THEME_TYPE.DARK,
  toggleTheme: () => {}
})

export const CustomThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(THEME_TYPE.DARK)
  
  const toggleTheme = useCallback(() => {
    if (currentTheme === THEME_TYPE.DARK) {
      localStorage.setItem('theme', THEME_TYPE.LIGHT)
      setCurrentTheme(THEME_TYPE.LIGHT)
    } else {
      localStorage.setItem('theme', THEME_TYPE.DARK)
      setCurrentTheme(THEME_TYPE.DARK)
    }
  }, [currentTheme])

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setCurrentTheme(theme || THEME_TYPE.DARK)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
