import { useState, useRef } from 'react'

import { useTheme } from 'Hooks/useTheme'
import { ThemeStyle } from 'Styles/theme'

import {
  SwitchContainer,
  Span,
  FlexSwitch,
  InputCheck,
  StateSwitch,
  ContainerMoon,
  ContainerSun
} from "Components/Header/styles";


export function Switch() {
  const { theme, toggleTheme } = useTheme()

  const [isDark, setIsDark] = useState(theme.type == 'dark')
  const switchRef = useRef<HTMLInputElement>(null)

  const themeStyle = ThemeStyle[isDark ? 'light' : 'dark']

  const alternateTheme = () => {
    if (switchRef.current) {
      let checked = switchRef.current.checked && theme.type == 'light'
      setIsDark(checked)
      toggleTheme(checked ? 'DARK' : 'LIGHT')
    }
  }

  return (
    <SwitchContainer style={{background: themeStyle.background}} onClick={alternateTheme}>
        <InputCheck ref={switchRef} />
        <FlexSwitch>
          <ContainerMoon>
            <Span>🌜</Span>
          </ContainerMoon>
          <ContainerSun>
            <Span>🌞</Span>
          </ContainerSun>
        </FlexSwitch>
        <StateSwitch className={isDark  ? 'active-switch' : ''} />
    </SwitchContainer>
  )
}