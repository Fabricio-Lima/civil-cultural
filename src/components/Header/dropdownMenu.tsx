/* Resources */
import { useRef, useState, useEffect, useMemo } from "react"
import { useTranslation } from 'react-i18next'

/* Styles */
import {
  DropdownButton,
  DropdownMenuContainer,
  Dropdown,
  Select,
  Option
} from 'Components/Header/styles';


export function DropdownMenu() {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isActive, setIsActive] = useState(false)
  const { t, i18n } = useTranslation()

  const languages = useMemo(() => [
    {language : t('portuguese') , value : 'pt'},
    {language : t('english') , value : 'en'},
  ], [t('portuguese'), t('english')])

  function changeLanguage(lang: string) {
    console.log(lang)
    i18n.changeLanguage(lang)
    setIsActive(false)
  }
  

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
      if(evt?.key == 'Escape') setIsActive(false)
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
              {
                languages.map(({ language, value }, index) => <Option key={index} onClick={() => changeLanguage(value)}>{language}</Option>)
              }
            </Select>
        </Dropdown>
      </DropdownMenuContainer>

    </>
  )
}