/* Resources */
import { useRef, useState, useEffect, useMemo } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

/* Components */
import { Button } from 'react-bootstrap'

/* Styles */
import styles from 'Components/Header/styles.module.scss'


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
      <span className={styles.option} key={index} onClick={() => changeLanguage(language)}>
        <Link href={pathname} locale={value} scroll={false}><a className='text-decoration-none'>{language}</a></Link>
      </span>
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
      <div className={styles.dropdownMenuContainer}>
        <Button
          className={styles.dropdownButton}
          ref={buttonRef}
          onClick={() => setIsActive(!isActive)}
        >
          {languageTitle}
        </Button>

        <div
          className={`${styles.dropdown} ${isActive ? 'active' : ''}`}
        >
          <div className={styles.select}>
            {LanguagesMemoized}
          </div>
        </div>
      </div>

    </>
  )
}