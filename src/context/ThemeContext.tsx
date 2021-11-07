import { createContext } from 'react'
import { useCookie } from 'react-use'
import { ThemeProvider } from 'styled-components'

import { CustomThemeContextProps, CustomThemeProviderProps, ThemeStateProps } from 'Contracts/ThemeContext'
import { ThemeStyle } from 'Styles/theme'

export const ThemeContext = createContext({} as CustomThemeContextProps)

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [cookieTheme, updateCookieTheme] = useCookie('theme')

  const theme = cookieTheme ? JSON.parse(cookieTheme) :  ThemeStyle.light

  const toggleTheme = (themeType: ThemeStateProps) => {
    updateCookieTheme(JSON.stringify(ThemeStyle[themeType.toLowerCase()]))
  }

  const themeProps: CustomThemeContextProps = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={themeProps}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}