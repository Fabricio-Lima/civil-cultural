import { ReactNode } from 'react'

export interface ThemeContextProps {
  theme: object,
  defineTheme: (isThemeDark: boolean) => void
}

export interface ThemeProviderProps {
  children: ReactNode
}