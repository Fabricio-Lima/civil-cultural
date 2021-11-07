/* Resources */
import { ChangeEvent, useState, useEffect } from 'react'
import { useSpeech } from 'react-use'

/* Components */
import {
  SearchContainer,
  BoxIcon,
  IconSearch,
  Button,
  IconClear,
  Search,
  ButtonSearch,
  IconAudio,
  ButtonAudio
} from 'Components/Header/styles'

export function InputSearch() {
  const [text, setText] = useState('')
  let state, voice;

  function speaking() {
    console.log(state)
  }

  function hasSearchChanger(evt: ChangeEvent & { target: { value: string; } }) {
    setText(evt.target.value)
  }

  useEffect(() => {


  }, [])


  return (
    <>
      <SearchContainer>
        <Search placeholder='Pesquise aqui' onChange={hasSearchChanger} value={text} />
        <BoxIcon
          width='2rem'
          height='2rem'
        >
          {text.length > 0 && (
            <Button
              title='Limpar pesquisa'
              onClick={_ => (setText(''))}
              aria-hidden='true'
            >
              <IconClear />
            </Button>
          )
          }
        </BoxIcon>
        <BoxIcon>
          <ButtonAudio title='Fale para escrever pesquisar' >
            <IconAudio />
          </ButtonAudio>
        </BoxIcon>
        <BoxIcon style={{padding: 0}} >
          <ButtonSearch  title='Click para pesquisar' onClick={speaking} >
            <IconSearch />
          </ButtonSearch>
        </BoxIcon>
      </SearchContainer>
    </>
  )
}