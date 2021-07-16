import styled, { keyframes, css } from 'styled-components'

import { IoMdSearch, IoMdClose, IoMdMenu } from 'react-icons/io'
import { AiFillAudio } from 'react-icons/ai'
import { HiInformationCircle } from 'react-icons/hi'

// Styles global Header
export const HeaderContainer = styled.header`
  grid-area: header;
  position: fixed;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  top: 0;
  padding-bottom: .5rem;
  box-shadow: 0 0 10px ${p => p.theme.type == 'light' ? 'rgba(51,51,51,.2)' : 'rgba(0, 0, 0, .4)'};
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
  color: ${p => p.theme.title};
  vertical-align: middle;
`

export const Button = styled.button`
  background: transparent;
  border: 0;
`

export const IconInfo = styled(HiInformationCircle)`
  fill: #5C9AF9;
  font-size: 1.1rem;
  vertical-align: middle;
`
/** ----------------------------- */


// Styles from InputSearch
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: .2rem;  
  border-radius: .5rem;
  background-color: ${p => p.theme.backgroundInput};
`

export const BoxIcon = styled.div`
  width: ${(props: {  width?: string; height?: string; }) => props.width ?? ''};
  height: ${(props: {  width?: string; height?: string; }) => props.height ?? ''};
  padding: .2rem;
`

export const ButtonSearch = styled(Button)`
  height: 100%;
  background-color: #3799F4;
  padding: .7rem 1.2rem;
  border-radius: 0 .5rem .5rem 0;

  &:hover {
    filter: saturate(85%);
  }
`

export const IconSearch = styled(IoMdSearch)`
  font-size: 1.5rem;
  color: #ffffff;
  vertical-align: middle;
`

export const ButtonAudio = styled(Button)`
  padding: 0 .5rem;
`

export const IconAudio = styled(AiFillAudio)`
  ${Icon}
  transition: color .3s ease-out;

  &:hover {
    color: #729BD3;
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
  border: 0px solid;
  background-color: ${p => p.theme.backgroundInput};
  color: ${p => p.theme.title};

  &::placeholder {
    color: ${p => p.theme.title};
  }
`
/** ----------------------------- */


//Styles from accessibility
// export const AccessibilityContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: .5rem;
// `

export const SwitchContainer = styled(Button)`
  width: 3.3rem;
  height: 1.5rem;
  position: relative;
  border-radius: 15px 15px;
  overflow: hidden;

  background-color: ${(p: { background?: string }) => p.background};
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
  width: 39%;
  height: 84%;
  background: #c0c0c0;
  border-radius: 100%;
  transition: transform .4s ease; 
  transform: translateX(0);


  position: absolute;
  z-index: 2;
  left: 3px;
  top: 2px;

  background: linear-gradient(var(--purple-400), var(--purple-300));

  &::after {
    content: '';

    position: absolute;
    left: 15%;
    top: 15%;
    border-radius: inherit;
    width: 70%;
    height: 70%;

    background: linear-gradient(120deg,var(--purple-600), var(--purple-300));
  }

  &.active-switch{
    transform: translateX(125%);
  }

  &:hover {
    box-shadow: 0 0 10px #73FF75;
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
  flex-wrap: wrap;
  margin: 2px -5px;
  font-size: 1em;
`


export const DropdownMenuContainer = styled.div`
  padding: .2rem;
`

export const DropdownButton = styled(Button)`
  font-size: .95rem;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  color: ${p => p.theme.link};

  &:hover {
    color: #729BD3;
  }
`

export const Dropdown = styled.div`
  width: 14rem;
  background: ${p => p.theme.colors.gray};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: .8rem;

  position: absolute;
  top: 2rem;
  right: 3rem;
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
  border-bottom: 1px solid #DFDFDF;
  text-align: center;
  text-decoration: none;
  color: #696969;
  padding: 1rem 1.5rem;
  display: block;

  &:hover {
    color: #729BD3;
    cursor: pointer;
  }
`
/** ----------------------------- */


//Styles from navbar and logo
const FadeIn = keyframes`
    from{ 
      opacity: 0;
      transform: rotate(-35deg);
    }
    to{ 
      transform: rotate(0deg);
      opacity: 1;
      display: inline-block; 
    }
`

const Rotate = keyframes`
  from{ 
    transform: rotate(-45deg);
  }
  to{ 
    transform: rotate(0deg);
  }
`
const RotateInverse = keyframes`
  from{ 
    transform: rotate(45deg);
  }
  to{ 
    transform: rotate(0deg);
  }
`

export const BoxIconMenu = styled(BoxIcon)`
  border-radius:  4em;
  padding: .3em;

  &:hover {
    background: rgba(54, 54, 54,.1);
  }
`

export const IconMenu = styled(IoMdMenu)`
  ${Icon}

  &:hover {
    cursor: pointer;
  }

  &.visible {
    animation: 
      ${FadeIn} .3s cubic-bezier(0.47, 0.21, 0.57, 0.51) both,
      ${RotateInverse} .3s cubic-bezier(0.47, 0.21, 0.57, 0.51) both;
  }
`

export const IconMenuClose = styled(IoMdClose)`
  ${Icon}

  &:hover {
    cursor: pointer;
  }

  &.visible {
    animation: 
      ${FadeIn} .3s cubic-bezier(0.47, 0.21, 0.57, 0.51) both,
      ${Rotate} .3s cubic-bezier(0.47, 0.21, 0.57, 0.51) both;
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
`

export const NavItem = styled.li`
  margin: .5rem;
  list-style-type: none;
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

  &:hover {
    color: var(--white);
    filter: saturate(80%);
  }
`

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
