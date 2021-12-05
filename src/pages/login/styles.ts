import styled from 'styled-components'

import {
  Col,
  FloatingLabel
} from 'react-bootstrap'

export const Logo = styled(Col)`

`
export const LogoTitle = styled.h4`
    font-size: 2.2em;
    font-weight: 600;
    letter-spacing: 0.10rem;
    line-height: 1.4rem;
    margin-right: .9rem;
    margin-bottom: 0;
`

export const ImgIllustration = styled(Col)`
    background-image: radial-gradient(#0DB958 36%, #234D4C);
`

export const FloatLabel = styled(FloatingLabel)`
    font-size: .94em;
    color: ${t => t.theme.type === 'dark' ? 'var(--gray-200)' : 'var(--gray-600)'};

    & > label {
        bottom: -.8rem;
        padding-left: .5rem !important;
        padding-right: .5rem !important;
    }
`

export const FormLink = styled.a`
    font-size: .86em;
    font-weight: 500;
`