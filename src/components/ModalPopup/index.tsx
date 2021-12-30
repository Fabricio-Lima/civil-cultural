/* Resources */
import { forwardRef, Ref, useContext, useState } from 'react';
import * as ReactIs from 'react-is'
import { ThemeContext } from 'Context/ThemeContext'

/* Components */
import Popup from 'reactjs-popup'
import { ModalPopupProps } from 'Contracts/ModalPopup'
import { IconBase } from 'react-icons/lib'
import { PopupActions } from 'reactjs-popup/dist/types'

/* Styles */
import styles from 'Components/ModalPopup/styles.module.scss'

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
                <div className={styles.popupTitleContainer} >
                  <h3 className={styles.popupTitle}>{icon && (ReactIs.isElement(icon) || icon instanceof IconBase) ? icon : ''} {title}</h3>
                </div>
              )
          )
        }
        {
          ReactIs.isElement(content) ?
            content :
            (
              <div className={styles.popupContentContainer} >
                <p className={styles.popupContent}>{content}</p>
              </div>
            )
        }
        {
          footer && (
            ReactIs.isElement(footer) ?
              footer :
                (
                  <p className={styles.popupFooter}>
                    <div className={styles.groupButtons}>
                      <button className={styles.popupButton} onClick={closeModal}>{footer}</button>
                    </div>
                  </p>
                )
          )
        }
      </>
    )
  }

  return (
    <Popup
      className={styles.popupContainer}
      ref={ref}
      open={openPopup}
      onClose={() => setOpenPopup(false)}
      modal
      closeOnDocumentClick
      closeOnEscape
      position='top center'
      {...props}
    >
      {children ?? ModalElements}
    </Popup>
  )
})