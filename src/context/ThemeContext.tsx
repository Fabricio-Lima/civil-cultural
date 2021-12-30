import { createContext } from 'react'
import { useCookie } from 'react-use'

import { CustomThemeContextProps, CustomThemeProviderProps, ThemeStateProps } from 'Contracts/ThemeContext'

export const ThemeContext = createContext({} as CustomThemeContextProps)

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [cookieTheme, updateCookieTheme] = useCookie('theme')

  const theme = cookieTheme ? cookieTheme as ThemeStateProps :  'light'

  const toggleTheme = (themeType: ThemeStateProps) => updateCookieTheme(themeType)

  const themeProps: CustomThemeContextProps = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={themeProps}>
      { children }
    </ThemeContext.Provider>
  )
}