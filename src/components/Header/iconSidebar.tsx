import { useState } from 'react';
import {
  BoxIconMenu,
  IconMenu,
  IconMenuClose
} from 'Components/Header/styles'
import { useEffect } from 'react';



export function IconSidebar() {
  const [isActive, setIsActive] = useState(false)
  
  let visibleClose = isActive ? 'visible' : ''
  let visibleMenu = !isActive ? 'visible' : ''

  useEffect(() => {
    visibleMenu = ''
    console.log(visibleMenu)

  }, [])

  return (
    <BoxIconMenu onClick={_=> setIsActive(!isActive)}>
      { !isActive ?  <IconMenu { ...visibleMenu ? {className: visibleMenu } : '' }/> :  <IconMenuClose className={visibleClose}/>}
    </BoxIconMenu>
  )
}