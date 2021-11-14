/* Resources */
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

/* Components */
import { Overlay, Popover } from 'react-bootstrap'

/* Styles */
import {
  SearchContainer,
  Search,
  BoxIcon,
  IconSearch,
  IconAudio,
  IconClear,
  ButtonClear,
  ButtonSearch,
  ButtonAudio,
  PopoverContainer,
  PopoverBody,
  PopoverTitle
} from 'Components/Header/styles'

export function InputSearch() {
  let idTimeout: any[] = []

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

  useEffect(() => { 
    if(alert)
        idTimeout.push(setTimeout(() => setAlert(false), 3800))

      return () => {
        idTimeout.forEach(id => clearTimeout(id))
      }
  }, [alert])

  useEffect(() => {
    setText(s => s + transcript)
  }, [transcript])

  return (
    <>
      <SearchContainer>
        <Search placeholder='Pesquise aqui' onChange={ event => setText(event.target.value)} value={text} />
        <BoxIcon
          width='2rem'
          height='2rem'
        >
          {text.length > 0 && (
            <ButtonClear
              title='Limpar pesquisa'
              onClick={_ => (setText(''))}
              aria-hidden='true'
            >
              <IconClear />
            </ButtonClear>
          )
          }
        </BoxIcon>
        <BoxIcon ref={boxIconRef}>
          <ButtonAudio title='Fale para pesquisar' onClick={speaking} >
            <IconAudio className={isListening ? 'listening' : ''} />
          </ButtonAudio>
          <Overlay
            show={alert}
            target={target}
            placement='bottom'
            container={boxIconRef}
            transition
          >
            <PopoverContainer>
              <PopoverBody>
                <PopoverTitle className='mb-0'>{t('pages.home.popover_message')}</PopoverTitle>
              </PopoverBody>
            </PopoverContainer>
          </Overlay>
        </BoxIcon>
        <BoxIcon style={{ padding: 0, height: '100%' }} >
          <ButtonSearch ref={buttonRef} title='Click para pesquisar'>
            <IconSearch />
          </ButtonSearch>
        </BoxIcon>
      </SearchContainer>
    </>
  )
}