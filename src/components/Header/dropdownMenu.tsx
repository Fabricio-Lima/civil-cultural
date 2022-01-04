/* Resources */
import { useRef, useState, useEffect, useMemo } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useTheme } from 'Hooks/useTheme'

/* Components */
import { Button } from 'react-bootstrap'

/* Styles */
import styles from 'Components/Header/styles.module.scss'


export function DropdownMenu() {
  const { theme } = useTheme()
  const [isActive, setIsActive] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { pathname, locale, push } = useRouter()
  const { t } = useTranslation()

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

  const changeLanguage = (locale) => push(pathname, pathname, { locale })

  const languages = [
    { language: t('portuguese'), value: 'pt-BR' },
    { language: t('english'), value: 'en-US' },
  ]

  const LanguagesMemoized = useMemo(
    () => languages.map(({ language, value }, index) => (
      <span
        className={`${styles.option} ${styles[theme]}`}
        key={index}
        onClick={() => changeLanguage(value)}
      >
        {language}
      </span>
    )),
    [languages]
  )

  return (
    <>
      <div className={styles.dropdownMenuContainer}>
        <Button
          className={`${styles.dropdownButton} ${styles[theme]}`}
          ref={buttonRef}
          onClick={() => setIsActive(!isActive)}
        >
          {t(locale == 'pt-BR' ? 'portuguese' : 'english')}
        </Button>

        <div className={`${styles.dropdown} ${styles[theme]} ${isActive ? styles.active : ''}`} >
          <div className={styles.select}>
            {LanguagesMemoized}
          </div>
        </div>
      </div>

    </>
  )
}