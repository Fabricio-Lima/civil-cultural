import styled from 'styled-components'

import Form from 'react-bootstrap/Form' 

export const InputCustomized = styled(Form.Control)`
    background: transparent !important;
    height: 2.9rem !important;
    border: 0;
    border-bottom: 1px solid var(--gray-300);
    border-radius: 0;
    padding-left: .5em !important;
    padding-right: .5em !important;
    color: ${t => t.theme.text} !important;

    &:focus {
        border: 0;
        border-bottom: 1px solid var(--green-600);      
        box-shadow: 0 .25rem 0  0  #00CF5D12;
    }
`