/* Resources */
import { useState, useEffect, useRef, ReactChild } from 'react'
import NextLink from 'next/link'
import { useTheme } from 'Hooks/useTheme'

/* Components */
import { Col } from 'react-bootstrap'
import { InputSearch } from 'Components/Header/inputSearch'
import { Switch } from 'Components/Header/switch'
import { IoMdSearch, IoMdClose } from 'react-icons/io'
import { AiFillAudio } from 'react-icons/ai'
import { HiInformationCircle } from 'react-icons/hi'
import { MdMenu } from 'react-icons/md'
import { DropdownMenu } from 'Components/Header/dropdownMenu'

/* Styles */
import styles from 'Components/Header/styles.module.scss'

interface HTMLEventElement extends MouseEvent {
  target: EventTarget & HTMLElement
}

export default function Header({ isActive }: { isActive: () => void }) {
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
    <header className={styles.headerContainer}>
      <div className={styles.flexContainer}>
        <div className={`${styles.boxItem} col-3 col-md-2`} >
          <div className={styles.flexContainer}>
            <div className={`${styles.boxIcon} ${styles.boxIconMenu}`}
              aria-controls='sidebar'
              onClick={isActive}
            >
              <div className={`${styles.boxIcon} open`} />
            </div>

            <Col className={`${styles.dropdownMenuSearch} me-2 mt-1`}>
              <button
                id='btnShowDropdown'
                className='btn remove-focus remove-bg-image p-1 m-0'
                onClick={setViewDropDown}
                ref={buttonRef}
              >
                <IoMdSearch className={`${styles.iconSearch} cursor-pointer`} />
              </button>
              {
                isShow && (
                  <div
                    className={styles.dropdownMenuSearch}
                    ref={dropdownRef}
                  >
                    <InputSearch />
                  </div>
                )
              }
            </Col>
          </div>
        </div>

        <div className={`${styles.boxItem} col-3 col-md-2`} >
          <nav className={styles.nav}>
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
                <div className={styles.boxItem} >
                  <Switch />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header >
  )
}