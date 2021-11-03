import { ChangeEvent, useState, useEffect } from 'react';

import { ModalPopup } from 'Components/ModalPopup'

import {
  SearchContainer,
  BoxIcon,
  IconSearch,
  Button,
  IconClear,
  Search,
  ButtonSearch,
  IconAudio,
  IconInfo,
  ButtonAudio
} from 'Components/Header/styles'


export function InputSearch() {
  const [text, setText] = useState('')
  const [hasText, setHasText] = useState(false)
  // const stateless = useState(false)

  function hasSearchChanger(evt: ChangeEvent & { target: { value: string; } }) {
    const changeText = evt.target.value

    setHasText(changeText?.length > 0)
    setText(changeText)
  }


  return (
    <>
      <SearchContainer>
        <Search placeholder='Pesquise aqui' onChange={hasSearchChanger} value={text} />
        <BoxIcon
          width='2rem'
          height='2rem'
        >
          {hasText && (
            <Button
              title='Limpar pesquisa'
              onClick={_ => (setText(''), setHasText(false))}
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
          <ButtonSearch  title='Click para pesquisar'  >
            <IconSearch />
          </ButtonSearch>
        </BoxIcon>
      </SearchContainer>
    </>
  )
}