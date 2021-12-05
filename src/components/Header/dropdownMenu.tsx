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

  const buttonRef = useRef<HTMLButtonElement>(null)
  const { pathname, locale } = useRouter()
  const { t } = useTranslation()
  const [languageTitle, setLanguageTitle] = useState(locale == 'pt-BR' ? 'Português' : 'English')

  const changeLanguage = (lang: string) => {
    setIsActive(false)
    setLanguageTitle(lang)
  }

  const languages = [
    { language: t('portuguese'), value: 'pt-BR' },
    { language: t('english'), value: 'en-US' },
  ]

  const LanguagesMemoized = useMemo(
    () => languages.map(({ language, value }, index) => (
      <Option key={index} onClick={() => changeLanguage(language)}>
        <Link href={pathname} locale={value} scroll={false}><a className='text-decoration-none'>{language}</a></Link>
      </Option>
    )),
    [languages]
  )

  useEffect(() => {
    function pageClick(evt: MouseEvent) {
      if (!Object.is(evt.target, buttonRef.current) && isActive)
        setIsActive(false)
    }

    function pageKeyPress(evt: KeyboardEvent) {
      if (evt?.key == 'Escape') setIsActive(false)
    }

    let doc = document.querySelector('body')

  
      doc && doc.addEventListener('click', pageClick)
      doc && doc.addEventListener('keydown', pageKeyPress)
    

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
          {languageTitle}
        </DropdownButton>

        <Dropdown
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