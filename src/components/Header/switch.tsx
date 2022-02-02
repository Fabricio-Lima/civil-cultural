/* ----------- RESOURCES ----------- */
import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'Hooks/useTheme'

/* ----------- COMPONENTS ----------- */
import { Col, Button } from 'react-bootstrap'

/* ----------- STYLES ----------- */
import styles from "Components/Header/styles.module.scss";


export function Switch() {
  const { theme, toggleTheme } = useTheme()
  const [checked, setChecked] = useState((theme === 'dark'))
  const themeValue = theme === 'dark' ? 'light' : 'dark'


  useEffect(() => {
    setChecked(theme === 'dark')
  }, [theme])

  function alternateTheme() {
    toggleTheme(themeValue)
    setChecked(!(theme === 'dark'))
  }

  return (
    <Button className={`${styles.switchContainer} ${styles[theme]} remove-bg-image`}>
      <input
        type='checkbox'
        className={styles.inputCheck}
        onChange={alternateTheme}
        checked={checked}
      />
      <Col className={`${styles.flexSwitch} ${styles.flexContainer} col-12`}>
        <Col className={styles.containerSun}>
          <span className={styles.span}>🌞</span>
        </Col>
        <Col className={styles.containerMoon}>
          <span className={styles.span}>🌜</span>
        </Col>
      </Col>
      <div className={`${styles.stateSwitch} ${checked == true ? styles.activeSwitch : 'desativeSwitch' }`} />
    </Button>
  )
}