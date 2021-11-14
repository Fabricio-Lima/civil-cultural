/* Resources */
import { useRef, useState, useEffect, useMemo } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

/* Styles */
import {
  DropdownButton,
  DropdownMenuContainer,
  Dropdown,
  Select,
  Option
} from 'Components/Header/styles';


export function DropdownMenu() {
  const [isActive, setIsActive] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useRouter()
  const { t } = useTranslation()

  const languages = [
    { language: t('portuguese'), value: 'pt-BR' },
    { language: t('english'), value: 'en-US' },
  ]

  const LanguagesMemoized = useMemo(
    () => languages.map(({ language, value }, index) => <Option key={index} onClick={() => setIsActive(false)}><Link href={pathname} locale={value}><a className='text-decoration-none'>{language}</a></Link></Option>),
    [languages]
  )

  useEffect(() => {
    function pageClick(evt: MouseEvent) {
      if (
        (dropdownRef.current && !dropdownRef.current!.contains(evt.target as Node)) &&
        (buttonRef.current && !buttonRef.current!.contains(evt.target as Node))
      ) {
        setIsActive(false)
      }
    }

    function pageKeyPress(evt: KeyboardEvent) {
      if (evt?.key == 'Escape') setIsActive(false)
    }

    let doc = document.querySelector('body')

    if (isActive) {
      doc && doc.addEventListener('click', pageClick)
      doc && doc.addEventListener('keydown', pageKeyPress)
    }

    return () => {
      doc && doc.removeEventListener('click', pageClick)
      doc && doc.removeEventListener('keydown', pageKeyPress)
    }

  }, [isActive])

  return (
    <>
      <DropdownMenuContainer>
        <DropdownButton
          ref={buttonRef}
          onClick={() => setIsActive(!isActive)}
        >
          {t('english')}
        </DropdownButton>

        <Dropdown
          ref={dropdownRef}
          className={isActive ? 'active' : ''}
        >
          <Select>
            {LanguagesMemoized}
          </Select>
        </Dropdown>
      </DropdownMenuContainer>

    </>
  )
}