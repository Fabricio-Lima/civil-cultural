import { ChangeEvent, useState } from 'react';


import {
  SearchContainer,
  IconBox,
  IconSearch,
  ButtonIconClear,
  IconClear,
  Search,
} from 'Components/Header/styles'


export function InputSearch() {
  const [text, setText] = useState('')
  const [hasText, setHasText] = useState(false)

  function hasSearch(changeEvent: ChangeEvent & { target: { value: string; } }  ) {
    const changeText = changeEvent.target.value

    setHasText(changeText?.length > 0)
    setText(changeText)
  }
  
  return (
    <SearchContainer>
      <IconBox>
        <IconSearch />
      </IconBox>
      <Search placeholder='Pesquise aqui' onChange={hasSearch} value={text} />
      <IconBox
        width='2rem'
        height='2rem'
      >
        {hasText && (
          <ButtonIconClear
            title='Limpar pesquisa'
            onClick={_ => setText('')}
            aria-hidden='true'
          ><IconClear /></ButtonIconClear>
        )
        }
      </IconBox>
    </SearchContainer>
  )
}