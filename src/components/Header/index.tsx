/* Resources */
import NextLink from 'next/link'
import { useTheme } from 'Hooks/useTheme'

/* Components */
import { InputSearch } from 'Components/Header/inputSearch'
import { Switch } from 'Components/Header/switch'
import { IconSidebar } from 'Components/Header/iconSidebar'
import { DropdownMenu } from 'Components/Header/dropdownMenu'
import { Logo } from 'Components/Header/logo'

/* Styles */
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
        <BoxItem className='col-3' >
          <FlexContainer style={{ justifyContent: 'flex-start' }} >
            <IconSidebar />
          </FlexContainer>
        </BoxItem>
        <BoxItem className='col-6'>
          <InputSearch />
        </BoxItem>
        <BoxItem className='col-3' >
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