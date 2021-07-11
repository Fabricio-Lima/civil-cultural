import styled from 'styled-components'
import { IoMdSearch, IoMdClose } from 'react-icons/io'


export const HeaderContainer = styled.header`
  grid-area: header;
  position: fixed;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  top: 0;
`

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
`

export const BoxItem = styled.div`
  padding: .3rem;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 .8rem;  
  border-radius: .5rem;
  background-color: #DFDFDF;
`

export const IconBox = styled.div.attrs((props: { width: string; height: string }) => ({
  width: props.width ?? '',
  height: props.height ?? ''
}))`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: .2rem;
`

export const IconSearch = styled(IoMdSearch)`
  font-size: 1.5rem;
  color: #656565;
  vertical-align: middle;
`

export const IconClear = styled(IoMdClose)`
  font-size: 1.5rem;
  color: #656565;
  vertical-align: middle;
`
export const ButtonIconClear = styled.button`
  background: transparent;
  border: 0;
`

export const Search = styled.input.attrs(props => ({
  type: 'text'
}))`
  width: 22rem;
  padding: .85rem;
  border-radius: .5rem;
  border: 0px solid;
  background-color: #DFDFDF;

  &::placeholder {
    color: rgb(101 101 101);
  }
`