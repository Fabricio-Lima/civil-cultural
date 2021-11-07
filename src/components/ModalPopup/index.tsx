import { forwardRef, Ref, useContext, useState } from 'react';
import * as ReactIs from 'react-is'
import { ModalPopupProps } from 'Contracts/ModalPopup'
import { IconBase } from 'react-icons/lib'
import { PopupActions } from 'reactjs-popup/dist/types'
import { ThemeContext } from 'Context/ThemeContext'


import {
  PopupContainer,
  PopupTitle,
  PopupTitleContainer,
  PopupContentContainer,
  PopupContent,
  PopupFooter,
  GroupButtons,
  PopupButton
} from 'Components/ModalPopup/styles'

export const ModalPopup = forwardRef((modalProps: ModalPopupProps, ref?: Ref<PopupActions>) => {
  const {
    icon,
    open,
    iconClose,
    title,
    content,
    footer,
    children,
    stateless,
    ...props
  } = modalProps

  const { theme } = useContext(ThemeContext)
  
  const [ openPopup, setOpenPopup ] = stateless ? stateless : useState(false)

  const closeModal = () => setOpenPopup(false)

  const ModalElements = () => {
    return (
      <>
        {
          title && (
            ReactIs.isElement(title) ?
              title :
              (
                <PopupTitleContainer {...theme}>
                  <PopupTitle>{icon && (ReactIs.isElement(icon) || icon instanceof IconBase) ? icon : ''} {title}</PopupTitle>
                </PopupTitleContainer>
              )
          )
        }
        {
          ReactIs.isElement(content) ?
            content :
            (
              <PopupContentContainer {...theme}>
                <PopupContent>{content}</PopupContent>
              </PopupContentContainer>
            )
        }
        {
          footer && (
            ReactIs.isElement(footer) ?
              footer :
                (
                  <PopupFooter>
                    <GroupButtons>
                      <PopupButton onClick={closeModal}>{footer}</PopupButton>
                    </GroupButtons>
                  </PopupFooter>
                )
          )
        }
      </>
    )
  }

  return (
    <PopupContainer
      ref={ref}
      open={openPopup}
      onClose={() => setOpenPopup(false)}
      modal
      closeOnDocumentClick
      closeOnEscape
      position='top center'
      {...props}
      {...theme}
    >
      {children ?? ModalElements}
    </PopupContainer>
  )
})