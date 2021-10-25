import styled from 'styled-components'
import ButtonBST from 'react-bootstrap/Button'

export const ButtonCustomized = styled(ButtonBST)`
    background: var(--green-dark);
    border: 1px solid #00B012;
    color: var(--white);
    font-weight: 600;
    padding: .6rem;

    &:hover, &:focus {
        background-color: var(--green-dark);
        border: 1px solid #00B012;
        box-shadow: none;
    }

    &:active {
        background-color: var(--green-dark);
        border: 1px solid #00B012;
        box-shadow: none;
        filter: opacity(90%);
    }
`