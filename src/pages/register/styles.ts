import styled from 'styled-components'

import { FloatingLabel, Form } from 'react-bootstrap'


export const FloatLabel = styled(FloatingLabel)`
    font-size: .94em;
    color: ${t => t.theme.colors.grayLight};

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
    color: ${t => t.theme.colors.grayLight};

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