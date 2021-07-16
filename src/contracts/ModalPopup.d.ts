import { Dispatch, SetStateAction, ReactElement,  ReactNode,  ReactPortal } from 'react';
import { IconType } from 'react-icons/lib';
import { PopupProps, PopupActions } from 'reactjs-popup/dist/types';

export interface ModalPopupProps extends PopupProps {
  icon?: IcstatelessonType | JSX.Element 
  iconClose?: IconType;
  title?: JSX.Element | string ;
  content: JSX.Element | string;
  footer?: JSX.Element | string;
  children?: ReactNode,
  stateless?: [boolean, Dispatch<SetStateAction<boolean>>]
}