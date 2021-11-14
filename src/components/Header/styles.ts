/* Resources */
import styled, { keyframes, css } from 'styled-components'

/* Components */
import { IoMdSearch, IoMdClose } from 'react-icons/io'
import { AiFillAudio } from 'react-icons/ai'
import { HiInformationCircle } from 'react-icons/hi'
import { MdMenu } from 'react-icons/md'
import { Popover } from 'react-bootstrap'

// Styles global Header
export const HeaderContainer = styled.header`
  grid-area: header;
  position: fixed;
  width: 100%;
  height: 4.8rem;
  margin: 0;
  padding: 1px 0;
  top: 0;
  box-shadow: 0 0 10px ${t => t.theme.tons.primary};
  background: ${t => t.theme.background};
  z-index: 1000;
`

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 0 .5rem;
`

export const BoxItem = styled.div`
  padding: .3rem;
`

const Icon = css`
  font-size: 1.5rem;
  color: ${t => t.theme.title};
  vertical-align: middle;
`

export const Button = styled.button`
  background: transparent;
  border: 0;
`

export const ButtonClear = styled(Button)`
  &:hover{
    background-image: none;
  }
`

export const IconInfo = styled(HiInformationCircle)`
  fill: #5C9AF9;
  font-size: 1.1rem;
  vertical-align: middle;
`
/** ----------------------------- */


// Styles from InputSearch
export const SearchContainer = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  padding-left: .2rem;  
  border-radius: .5rem;
  background-color: transparent;
  background-color: ${t => t.theme.backgroundInput};
`

export const BoxIcon = styled.div`
  width: ${(props: {  width?: string; height?: string; }) => props.width ?? ''};
  height: ${(props: {  width?: string; height?: string; }) => props.height ?? ''};
  padding: .2rem;
`

export const ButtonSearch = styled(Button)`
  height: 100%;
  background-color: var(--blue-500);
  padding: .7rem 1.2rem;
  border-radius: 0 .5rem .5rem 0;
`

export const IconSearch = styled(IoMdSearch)`
  font-size: 1.5rem;
  color: #ffffff;
  vertical-align: middle;
`

export const ButtonAudio = styled(Button)`
  padding: 0 .5rem;

  &:hover {
    background-image: none;
  }
`

const animationListening = keyframes`
  from {
    color: var(--gray-500);
    opacity: .6;
  }

  to {
    color: var(--green-600);
    opacity: 1;
  }
`

export const IconAudio = styled(AiFillAudio)`
  ${Icon}
  transition: color .3s ease-out;
  color: ${t => t.theme.type == 'dark' ? 'var(--gray-100)' : 'var(--gray-400)'};

  &:hover {
    color: #729BD3;
  }

  &.listening {
    animation: ${animationListening} 1.4s cubic-bezier(0.67, -0.18, 0.16, 1.06) infinite;
  }
`

export const IconClear = styled(IoMdClose)`
  ${Icon}
  transition: color .3s ease-out;

  &:hover {
    color: #F45D4E; 
  }
`

export const Search = styled.input.attrs(() => ({
  type: 'text'
}))`
  width: 28rem;
  padding: .85rem;
  border-radius: .5rem;
  border: 0px;
  background-color: ${t => t.theme.backgroundInput};
  color: ${t => t.theme.title};
  font-size: 1.1rem;
  font-size: 600;

  
  &::placeholder {
    color: ${t => t.theme.title};
    font-weight: 600;
    font-size: 1rem;
  }
`
/** ----------------------------- */

/* SWITCH */
export const SwitchContainer = styled(Button)`
  width: 3.3rem;
  height: 1.68rem;
  position: relative;
  border-radius: 15px 15px;
  overflow: hidden;

  background-color: ${t => t.theme.type == 'dark' ? 'var(--gray-400)' : 'var(--gray-300)'} ;
`

export const InputCheck = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  display: block;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  opacity: 0;
  cursor: pointer;
`
export const StateSwitch = styled.div`
  display: block;
  width: 40%;
  height: 82%;
  background: #c0c0c0;
  border-radius: 100%;
  transition: transform .4s ease; 
  transform: translateX(0);


  position: absolute;
  z-index: 2;
  left: 3px;
  top: 2.55px;

  background: linear-gradient(var(--purple-400), var(--purple-300));

  &.active-switch{
    transform: translateX(118%);
  }

  &::after {
    content: '';

    position: absolute;
    left: 15%;
    top: 18%;
    border-radius: inherit;
    width: 70%;
    height: 70%;

    background: linear-gradient(31deg,var(--purple-600), var(--purple-300));
  }
`

export const FlexSwitch = styled(FlexContainer)`
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0;
`

export const ContainerMoon = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
`

export const ContainerSun = styled.div`
  background: transparent; 
  height: 100%;
  width: 100%;
`

export const Span = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-wrap: nowrap;
  vertical-align: middle;
  margin: .25em .2em;
  font-size: 1em;
`

/* DROPDOWN */
export const DropdownMenuContainer = styled.div`
  padding: .2rem;
`

export const DropdownButton = styled(Button)`
  font-size: .95rem;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  color: ${t => t.theme.link};

  &:hover {
    background-image: none;
    filter: ${ t => t.theme.type == 'dark' ? 'sepia(45%)' : 'brightness(60%)'};
  }
`

export const Dropdown = styled.div`
  width: 14rem;
  background: ${t => t.theme.background};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: .8rem;

  position: absolute;
  top: 3.9rem;
  right: 7rem;
  z-index: 900;
  
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity .3s ease, transform .3s ease, visibility 0.3s;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

export const Select = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 0; 
`

export const Option = styled.span`
  text-align: center;
  text-decoration: none;
  color: ${t => t.theme.title};
  padding: .8rem 1.3rem;
  display: block;
  box-sizing: content-box;
  border-bottom: 1px solid ${t => t.theme.type == 'dark' ? 'var(--gray-400)' : 'var(--gray-200)'};



  &:hover {
    filter: blur(40%);
    cursor: pointer;
  }

  &:last-child {
    border-bottom: 0;
  }
`
/** ----------------------------- */


/* ICON NAVBAR  */
export const BoxIconMenu = styled(BoxIcon)`
  border-radius:  4em;
  padding: .3em;

  &:hover {
    background: #3478D418;
  }
`

const visible = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

`

export const IconMenu = styled(MdMenu)`
  ${Icon}

  &:hover {
    cursor: pointer;
  }

  &.open {
    color: var(--blue-300);
  }
`
/** ----------------------------- */

/** Styles from Navigation header */

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-content: center;
`

export const NavRow = styled.ul`
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  justify-items: center;
  align-items: center;
  list-style-type: none;
`

export const NavItem = styled.li`
  margin-right: .9rem;
  margin-top: .9rem;
`
export const Link = styled.a`
  height: 100%;
  padding: .7rem;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    color: var(--blue-500);
  }
`

export const ButtonLogin = styled(Link)`
  color: var(--white);
  font-weight: 600;
  background: var(--blue-500);
  padding: .6rem .9rem;
  border-radius: 10px;

  width: 90%;
  height: 90%;

  &:hover {
    color: var(--white);
    background-image: linear-gradient(rgb(0 0 0 / 0%),rgb(0 0 0 / 5%) 40%,rgb(0 0 0 / 10%));
  }
`
/** ----------------------------- */

/** Styles from Logo */
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
  margin-left: 1px;
`
export const Typography = styled.p`
  font: 600 1.4rem 'Noto Sans JP', sans-serif;
  text-align: center;
  margin-left: .7rem;
`
/** ----------------------------- */


/* Popover */

export const PopoverContainer = styled(Popover)`
  background: ${t => t.theme.popup.background};
  border: transparent;
  border-radius: 10px;

  & > .popover-arrow::after {
    border-bottom-color: ${t => (t.theme.type == 'dark') ? '#4F526590' : '#FDFDFD'};
  }
`

export const PopoverBody = styled(Popover.Body)`
  color: ${t => t.theme.text};
  background: ${t => t.theme.popup.background};
  padding: .7rem;
  border: 1px solid #96969620;
  border-radius: 10px;
`

export const PopoverTitle = styled.p`
  font-size: .9rem,
`