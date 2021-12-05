/* Resources */
import { useState, useEffect, useRef } from 'react'
import NextLink from 'next/link'
import { useTheme } from 'Hooks/useTheme'

/* Components */
import { InputSearch } from 'Components/Header/inputSearch'
import { Switch } from 'Components/Header/switch'
import { IconSidebar } from 'Components/Header/iconSidebar'
import { DropdownMenu } from 'Components/Header/dropdownMenu'

/* Styles */
import {
  HeaderContainer,
  FlexContainer,
  BoxItem,
  Nav,
  NavRow,
  NavItem,
  IconSearch,
  ButtonLogin,
  DropdownSearch,
  DropdownMenuSearch
} from 'Components/Header/styles'

interface HTMLEventElement extends MouseEvent {
  target: EventTarget & HTMLElement
}

export default function Header() {
  const { theme } = useTheme()
  const [isShow, setIsShow] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  /**
   * @description Toggle function showing search input
   * @return void
   */
  const setViewDropDown = () => setIsShow(x => !x)

  useEffect(() => {
    function pageClick(evt: HTMLEventElement) {
      const targetId = evt.target?.parentElement?.id ?? evt.target?.id
      
      if (isShow && targetId != buttonRef?.current?.id && !dropdownRef.current?.contains(evt.target as Element)) {
        setIsShow(false)
      }
    }

    function pageKeyPress(evt: KeyboardEvent) {
      if (evt?.key == 'Escape') setIsShow(false)
    }

    let doc = document.querySelector('body')

      doc && doc.addEventListener('click', pageClick)
      doc && doc.addEventListener('keydown', pageKeyPress)
    

    return () => {
      doc && doc.removeEventListener('click', pageClick)
      doc && doc.removeEventListener('keydown', pageKeyPress)
    }
  }, [isShow])

  return (
    <HeaderContainer>
      <FlexContainer>
        <BoxItem className='col-3 col-md-2' >
          <FlexContainer>
            <IconSidebar/>

            <DropdownSearch className='me-2 mt-1'>
              <button
                id='btnShowDropdown'
                className='btn remove-focus remove-bg-image p-1 m-0'
                onClick={setViewDropDown} 
                ref={buttonRef}
              >
                <IconSearch  className='cursor-pointer'  style={{ color: theme.link }} />
              </button>
              {
                isShow && (
                  <DropdownMenuSearch
                    ref={dropdownRef}
                  >
                    <InputSearch />
                  </DropdownMenuSearch>
                )
              }
            </DropdownSearch>
          </FlexContainer>
        </BoxItem>

        <BoxItem className='col-3 col-md-2' >
          <Nav>
            <NavRow>
              <NavItem>
                <DropdownMenu/>
              </NavItem>
              <NavItem className='d-none d-lg-block'>
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