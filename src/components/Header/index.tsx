import NextLink from 'next/link'

import { useTheme } from 'Hooks/useTheme'

import { InputSearch } from 'Components/Header/inputSearch'
import { Switch } from 'Components/Header/switch'
import { IconSidebar } from 'Components/Header/iconSidebar'
import { DropdownMenu } from 'Components/Header/dropdownMenu'
import { Logo } from 'Components/Header/logo'


import {
  HeaderContainer,
  FlexContainer,
  BoxItem,
  Nav,
  NavRow,
  NavItem,
  Link,
  ButtonLogin
} from 'Components/Header/styles'

export default function Header() {
  return (
    <HeaderContainer>
      <FlexContainer>
        <BoxItem />
        <BoxItem />

      </FlexContainer>
      <FlexContainer>
        <BoxItem style={{ width: '50%' }} >
          <FlexContainer style={{ justifyContent: 'flex-start' }} >
            <IconSidebar />
            {<Logo/>}
          </FlexContainer>
        </BoxItem>
        <BoxItem>
          <InputSearch />
        </BoxItem>
        <BoxItem style={{ width: '50%' }} >
          <Nav>
            <NavRow>
              <NavItem>
                <DropdownMenu />
              </NavItem>
              <NavItem>
                <NextLink href='/login' passHref>
                  <ButtonLogin >Login</ButtonLogin>
                </NextLink>
              </NavItem>
              <NavItem>
                <BoxItem>
                  <Switch />
                </BoxItem>
              </NavItem>
            </NavRow>
          </Nav>
        </BoxItem>
      </FlexContainer>
    </HeaderContainer>
  )
}