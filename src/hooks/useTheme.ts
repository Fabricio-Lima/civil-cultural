import { useContext, Context } from "react"

import { ThemeContext } from 'Context/ThemeContext'
import { CustomThemeContextProps } from 'Contracts/ThemeContext'

export const useTheme: () => CustomThemeContextProps = () => useContext(ThemeContext)