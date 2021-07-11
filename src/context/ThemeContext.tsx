import { createContext, useState } from 'react'

import { ThemeContextProps, ThemeProviderProps } from 'Contracts/ThemeContextProps'
import { ThemeStyle } from 'Styles/theme'

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeProvider({ children }: ThemeProviderProps) {

  const [ theme, setTheme ] = useState(ThemeStyle.light)
  
  
  const defineTheme = (isThemeDark: boolean) => {
    setTheme(isThemeDark ? ThemeStyle.dark : ThemeStyle.light)
  }

  const themeProps: ThemeContextProps = {
    theme,
    defineTheme
  }

  return (
    <ThemeContext.Provider value={themeProps}>
      children
    </ThemeContext.Provider>
  )
}