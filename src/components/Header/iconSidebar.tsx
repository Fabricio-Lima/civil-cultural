import { useState, useEffect } from 'react'
import { IconBaseProps } from 'react-icons/lib'

import {
  BoxIconMenu,
  IconMenu
} from 'Components/Header/styles'


export function IconSidebar() {
  const [isActive, setIsActive] = useState(true)
  let [isHandler, setIsHandler ] = useState(true)

  const menuToggle = () => {
    setIsActive(!isActive)
    if(isHandler) setIsHandler(false)
  }

  const className = (!isHandler && isActive) ? 'animation-open' : ''

  return (
    <BoxIconMenu onClick={menuToggle}>
      <IconMenu className='open'/>
    </BoxIconMenu>
  )
}