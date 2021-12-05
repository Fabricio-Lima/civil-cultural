import styled from 'styled-components'

import { FloatingLabel, Form } from 'react-bootstrap'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


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

export const FormSelect = styled(Form.Select)`
    height: calc(3.40rem + 2px) !important;
    background-color: ${t => t.theme.background};
    color: ${t => t.theme.type === 'dark' ? 'var(--gray-200)' : 'var(--gray-600)'};

    &:focus {
        border: 1px solid var(--green-600);
        box-shadow: 0 0 0 .25rem #00CF5D12;
    }
`

export const FormTextarea = styled(Form).attrs({
    className: 'form-control',
    as: 'textarea'
})`
    height: 100px !important;
    background: ${t => t.theme.background};
    color: ${t => t.theme.colors.grayLight};

    &:focus {
        border: 1px solid var(--green-600);
        box-shadow: 0 0 0 .25rem #00CF5D12 !important;
        background: ${t => t.theme.background};
        color: ${t => t.theme.colors.grayLight};
    }
`

export const BoxIcon = styled.span`
    position: absolute;
    top: 1.5em;
    right: 1px;
`

export const IconEye = styled(AiFillEye)`
    width: 1.1rem;
    height: 1.1rem;

    &:active {
        color: #4D4E51;
    }
`

export const IconEyeInvisible = styled(AiFillEyeInvisible)`
    width: 1.1rem;
    height: 1.1rem;

    &:active {
        fill: #4D4E51;
    }
`