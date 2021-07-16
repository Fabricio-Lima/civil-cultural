import Image from 'next/image'

import {
  LogoContainer,
  Typography
} from 'Components/Header/styles'


export function Logo() {
  return (
    <LogoContainer>
      <Image
        src='/civilcultural.png'
        alt='Logo Civil Cultural'
        width={40}
        height={40}
        objectFit='cover'
      />
      <Typography>
        Civil Cultural
      </Typography>
    </LogoContainer>
  )
}