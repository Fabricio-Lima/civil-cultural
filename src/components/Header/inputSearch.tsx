/* ----------- RESOURCES ----------- */
import { useState, useRef, useEffect, forwardRef, Ref } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useTheme } from 'Hooks/useTheme'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

/* ----------- COMPONENTS ----------- */
import { IoMdClose, IoMdSearch } from 'react-icons/io'
import { AiFillAudio } from 'react-icons/ai'
import { 
  Col, 
  Overlay, 
  InputGroup, 
  FormControl, 
  Button, 
  Popover
} from 'react-bootstrap'

/* ----------- STYLES ----------- */
import styles from 'Components/Header/styles.module.scss'

export const InputSearch = forwardRef((_: any | null, ref: Ref<any>) => {
  let idTimeout: any[] = []

  const { theme } = useTheme()
  const [text, setText] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [alert, setAlert] = useState(false)
  const [target, setTarget] = useState(null)

  const { locale } = useRouter()
  const { t } = useTranslation()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const boxIconRef = useRef<HTMLDivElement>(null)

  const commands = [
    {
      command: 'clear',
      callback: () => resetTranscript()
    },
    {
      command: 'search',
      callback: () => buttonRef.current && buttonRef.current.click()
    }
  ]

  const { transcript, resetTranscript } = useSpeechRecognition({ commands })

  /**
   * Toggle the recognition
   * @param [EVENT CLICK] event 
   * @return void 
   */
  function speaking(event) {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      setAlert(x => !x)
      setTarget(event.target)
      return
    }

    isListening ?
      (SpeechRecognition.stopListening(), setIsListening(false)) :
      (SpeechRecognition.startListening({ language: locale, continuous: true }), setIsListening(true))

  }

  /**
   * @description Remove the alert with setTimeout
   */
  useEffect(() => {
    if (alert)
      idTimeout.push(setTimeout(() => setAlert(false), 3800))

    return () => {
      idTimeout.forEach(id => clearTimeout(id))
    }
  }, [alert])

  /**
   * @description Set the text of recognition in input
   */
  useEffect(() => {
    setText(s => s + transcript)
  }, [transcript])

  return (
    <>
      <div className={`${styles.searchContainer} col-11 col-xxl-5 col-xl-5 col-lg-5 col-md-8`} ref={ref}>
        <InputGroup className='p-0'>
          <FormControl
            className={`${styles.search} ${styles[theme]} remove-focus`}
            placeholder='Pesquise aqui'
            aria-label='Pesquise aqui'
            aria-describedby='input para pesquisa de artigos e notícias'
            onChange={event => setText(event.target.value)} value={text}
          />

          <InputGroup.Text className={`${styles.inputGroupText} ${styles[theme]}`}>
            <div className={`${styles.boxIcon} col-1 offset-1 p-0 m-0`}>
              <Button
                className={`${styles.buttonClear} ${text.length == 0 ? 'd-none' : ''} remove-focus border-0`}
                title='Limpar pesquisa'
                onClick={_ => (setText(''))}
                aria-hidden='true'
              >
                <IoMdClose className={`${styles.iconClear} ${styles[theme]}`} />
              </Button>
            </div>
          </InputGroup.Text>

          <InputGroup.Text className={`${styles.inputGroupText} ${styles[theme]}`}>
            <div className={`${styles.boxIcon} col-1 offset-1 p-0 m-0`} ref={boxIconRef}>
              <Button className={`${styles.buttonAudio} remove-focus border-0`} title='Fale para pesquisar' onClick={speaking} >
                <AiFillAudio className={`${styles.iconAudio} ${styles[theme]} ${isListening ? styles.listening : ''}`} />
              </Button>
              <Overlay
                show={alert}
                target={target}
                placement='bottom'
                container={boxIconRef}
                transition
              >
                <Popover className={`${styles.popoverContainer} ${styles[theme]}`}>
                  <Popover.Body className={`${styles.popoverBody} ${styles[theme]}`}>
                    <p className={`${styles.popoverTitle} mb-0`}>{t('pages.home.popover_message')}</p>
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>
          </InputGroup.Text>

          <InputGroup.Text className={`${styles.inputGroupText} ${styles[theme]}`}>
            <div className={`${styles.boxIcon} col-3 p-0 m-0`} >
              <Button className={`${styles.buttonSearch} remove-focus`} ref={buttonRef} title='Click para pesquisar'>
                <IoMdSearch className={styles.iconSearch} />
              </Button>
            </div>
          </InputGroup.Text>
        </InputGroup>
      </div>
    </>
  )
})