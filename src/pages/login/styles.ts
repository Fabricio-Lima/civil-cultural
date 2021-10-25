import styled from 'styled-components'

import {
  Col,
  FloatingLabel
} from 'react-bootstrap'

export const Logo = styled(Col)`

`
export const LogoTitle = styled.h4`
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 0.10rem;
    line-height: .4rem;
    margin-right: .9rem;
`

export const ImgIllustration = styled(Col)`
    background: url('knowledge_lillustration.png') no-repeat left top;
    background-size: cover;
`

export const FloatLabel = styled(FloatingLabel)`
    font-size: .94em;
    color: var(--gray-400);

    & > label {
        bottom: -.8rem;
    }
`