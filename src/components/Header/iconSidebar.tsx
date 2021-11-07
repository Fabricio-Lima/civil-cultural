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

    const iconOpenMenu = <IconOpenMenu className={ (!isHandler && isActive) ? 'animation-open' : ''} /> 

  return (
    <BoxIconMenu onClick={menuToggle}>
      {isActive ?  iconOpenMenu : <IconClosedMenu className='animation-closed' />}
    </BoxIconMenu>
  )
}