/* ----------- RESOURCES ----------- */
import { useState, useEffect, useRef } from 'react'
import NextLink from 'next/link'
import { useTheme } from 'Hooks/useTheme'

/* ----------- COMPONENTS ----------- */
import { Col } from 'react-bootstrap'
import InputSearch from 'Components/InputSearch'
import { Switch } from 'Components/Header/switch'

import { MdMenu } from 'react-icons/md'
import { DropdownMenu } from 'Components/Header/dropdownMenu'

/* ----------- STYLES ----------- */
import styles from 'Components/Header/styles.module.scss'

interface HTMLEventElement extends MouseEvent {
  target: EventTarget & HTMLElement
}

interface SidebarState {
  isActive: boolean;
  setIsActive: () => void;
}

export default function Header({ isActive, setIsActive }: SidebarState) {
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
    <header className={`${styles.headerContainer} ${styles[theme]}`}>
      <Col className={styles.flexContainer}>
        <Col
          className='col-3'
          aria-controls='sidebar'
          onClick={setIsActive}
        >
          <Col className={styles.boxIconMenu}>
            <MdMenu className={`${styles.iconMenu} ${styles[theme]} w-100 ${isActive ? styles.open : ''} `} />
          </Col>
        </Col>

        <Col className='col-5 d-flex justify-content-center align-items-center'>
          <InputSearch />
        </Col>

        <Col className='col-9 col-xxl-4 col-xl-4 col-lg-4 col-md-5' >
          <nav className='col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex justify-content-end align-items-center'>
            <ul className={styles.navRow}>
              <li className={styles.navItem}>
                <DropdownMenu />
              </li>
              <li className={`${styles.navItem} d-none d-lg-block`}>
                <NextLink href='/login' passHref>
                  <a className={styles.buttonLogin}>Login</a>
                </NextLink>
              </li>
              <li className={styles.navItem}>
                <Switch />
              </li>
            </ul>
          </nav>
        </Col>
      </Col>
    </header >
  )
}