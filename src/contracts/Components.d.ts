import { Dispatch, SetStateAction, ReactElement,  ReactNode,  ReactPortal } from 'react'
import { PopupProps, PopupActions } from 'reactjs-popup/dist/types'
import { ImageProps as NextImageProps } from 'next/image'
import { IconType } from 'react-icons/lib'

export interface ModalPopupProps extends PopupProps {
  icon?: IcstatelessonType | JSX.Element 
  iconClose?: IconType;
  title?: JSX.Element | string ;
  content: JSX.Element | string;
  footer?: JSX.Element | string;
  children?: ReactNode;
  stateless?: [boolean, Dispatch<SetStateAction<boolean>>];
}

export interface ImageProps extends NextImageProps {
  width?: string | number;
  height?: string | number;
  src?: string;
}