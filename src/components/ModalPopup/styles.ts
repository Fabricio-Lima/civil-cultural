import styled  from 'styled-components'
import Popup from 'reactjs-popup'

import { ThemeProps } from 'Contracts/ThemeContext'


export const PopupContainer = styled(Popup).attrs((p: ThemeProps) => ({
  ...p.popup
}))`
  &-overlay {
    z-index: 1000;
    background-color: rgba(51, 51, 51, .8)
  }
  
  &-content {
    position: fixed;
    top: -5rem;
    background: ${p => p.background};
    border-radius: .34rem;
    padding: .5rem;
    color: ${p => p.color};
    box-shadow: 0px 0px 30px rgba(50, 50, 50, .5);
  }
`

export const PopupTitleContainer = styled.div.attrs((p: ThemeProps) => ({
  ...p.popup
}))`
  padding: .5rem;
  border-bottom: ${p => p.borderBottom};
`

export const PopupTitle = styled.h3`
  text-align: center;
  font-size: .9rem;
`

export const PopupContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`

export const PopupContent = styled.p`
  text-align: justify;
  text-justify: inter-cluster;
`

export const PopupFooter = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
`

export const GroupButtons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const PopupButton = styled.button`
  background-color: #22B3D2;
  color: #2a2a2e;
  border: 0;
  border-radius: .5rem;
  padding: .5rem;
  font-weight: 600;
  width: 4em;
  height: 2.4em;
`
