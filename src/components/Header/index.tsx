// import Link from 'next/link'

import { InputSearch } from 'Components/Header/inputSearch'

import {
  HeaderContainer,
  FlexContainer,
  BoxItem,
} from 'Components/Header/styles'

export default function Header() {
  return (
    <HeaderContainer>
      <FlexContainer>
        <BoxItem>
          <p>Menu</p>
        </BoxItem>
        <BoxItem>
          <InputSearch/>
        </BoxItem>
        <BoxItem>
          <p>Menu</p>
        </BoxItem>
      </FlexContainer>
    </HeaderContainer>
  )
}