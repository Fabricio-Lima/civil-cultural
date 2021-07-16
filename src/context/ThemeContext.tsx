import { createContext, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { CustomThemeContextProps, CustomThemeProviderProps, ThemeStateProps } from 'Contracts/ThemeContext'
import { usePersistedState } from 'Hooks/usePersistedState'
import { ThemeStyle } from 'Styles/theme'

export const ThemeContext = createContext({} as CustomThemeContextProps)

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {

  const [theme, setTheme] = usePersistedState('theme', ThemeStyle.light)
  
  const toggleTheme = (themeType: ThemeStateProps) => {
    setTheme(ThemeStyle[themeType.toLowerCase()])
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