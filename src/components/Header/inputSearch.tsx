/* Resources */
import { useState, useRef, useEffect, forwardRef, Ref } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

/* Components */
import { Col, Overlay, InputGroup } from 'react-bootstrap'

/* Styles */
import {
  SearchContainer,
  Search,
  InputGroupText,
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

export const InputSearch = forwardRef((_: any | null, ref: Ref<any>) => {
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
      <SearchContainer className='col-11 col-xxl-5 col-xl-5 col-lg-5 col-md-8' ref={ref}>
        <InputGroup className='p-0'>
          <Search
            className='remove-focus'
            placeholder='Pesquise aqui'
            aria-label='Pesquise aqui'
            aria-describedby='input para pesquisa de artigos e notícias'
            onChange={event => setText(event.target.value)} value={text}
          />
          
          <InputGroupText>
            <BoxIcon className='col-1 offset-1 p-0 m-0'>
              <ButtonClear
                  className={text.length == 0 ? 'd-none' : ''}
                  title='Limpar pesquisa'
                  onClick={_ => (setText(''))}
                  aria-hidden='true'
                >
                  <IconClear />
                </ButtonClear>
            </BoxIcon>
          </InputGroupText>

          <InputGroupText>
            <BoxIcon className='col-1 offset-1 p-0 m-0' ref={boxIconRef}>
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
          </InputGroupText>

          <InputGroupText>
            <BoxIcon className='col-3 p-0 m-0' >
              <ButtonSearch ref={buttonRef} title='Click para pesquisar'>
                <IconSearch />
              </ButtonSearch>
            </BoxIcon>
          </InputGroupText>
        </InputGroup>
      </SearchContainer>
    </>
  )
})