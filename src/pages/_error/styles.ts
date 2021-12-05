import styled from "styled-components"

import { Col } from 'react-bootstrap'


export const ErrorContainer = styled(Col)`
    height: 100vh;
    background: #E3E8EC;
    font-family: 'Dongle', sans-serif;
`

export const ErrorContent = styled(Col)`
    text-align: center;
    padding: .5rem;
    border: 3px solid #54647590;
    border-radius: 18px;
    position: relative;
    margin-top: 5rem;
`

export const ErrorStatusCode = styled.p`
    color: #546475;
    font-size: 9rem;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
`

export const BoxImg = styled(Col)`
    width: 86px;
    height: 86px;
    position: absolute;
    bottom: -20%;
    right: -4%;
`

export const ErrorBadge = styled.span`
    text-transform: uppercase;
    color: #546475;
    font-size: 2rem;
    font-weight: 600;
    background: #E3E8EC;
    padding: .1rem .5rem;
    position: absolute;
    top: -11.5%;
    left: 5%;
`

export const LinkBack = styled.a`
    color: var(--blue-300);
    font-size: 1rem;

    &:hover {
        color: var(--blue-500);
    }
`