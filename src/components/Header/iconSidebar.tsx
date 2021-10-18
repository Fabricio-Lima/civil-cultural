import { useState, useEffect } from 'react'
import { IconBaseProps } from 'react-icons/lib'

import {
  BoxIconMenu,
  IconClosedMenu,
  IconOpenMenu
} from 'Components/Header/styles'


export function IconSidebar() {
  const [isActive, setIsActive] = useState(true)
  let [isHandler, setIsHandler ] = useState(true)

  const menuToggle = () => {
    setIsActive(!isActive)
    if(isHandler) setIsHandler(false)
  }

    const iconOpenMenu = (!isHandler && isActive) ? 
      <IconOpenMenu className='animation-open' /> :
      <IconOpenMenu />

  return (
    <BoxIconMenu onClick={menuToggle}>
      {isActive ?  iconOpenMenu : <IconClosedMenu className='animation-closed' />}
    </BoxIconMenu>
  )
}