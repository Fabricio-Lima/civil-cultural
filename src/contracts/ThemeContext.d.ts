import { ReactNode } from 'react'
import { DefaultTheme } from 'styled-components'

export type ThemeStateProps = 'DARK' | 'LIGHT'

export interface CustomThemeContextProps {
  theme: DefaultTheme;
  toggleTheme: (themeType: ThemeStateProps) => void
}

export interface CustomThemeProviderProps {
  children: ReactNode
}