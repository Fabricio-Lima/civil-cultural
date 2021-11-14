import styled from "styled-components"

import { Col, Card, ListGroup } from 'react-bootstrap'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  grid-area: main;
`

export const DivHeader = styled.div`
  height: 5.5rem;
`

/* CARD ARTICLE */

export const CardContainer = styled(Card)`
  background: ${t => t.theme.background};
  overflow: hidden;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  border-top: 1px solid ${t => t.theme.type == 'dark' ? '#5D5D5D' : '#C3C3C3'} !important;
`

export const BoxImg = styled(Col)`
  background: transparent;
  position: relative;
  height: 70%;
  width: 60%;
  margin-top: 1.3rem;
  border-radius: 5px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #33333360;
    opacity: 0.5;
  }
`

export const CardTitle = styled(Card.Title)`
  color: ${t => t.theme.title};
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
`

export const CardText = styled(Card.Text)`
  color: ${t => t.theme.colors.grayDark};
  font-size: .9rem;
  font-weight: 400;
`

export const CardTextDate = styled(Card.Text)`
  color: ${t => t.theme.type == 'dark' ? 'var(--gray-300)' : 'var(--gray-400)'};
  font-size: .7rem;
  font-weight: 500;
`

export const CardLink = styled(Card.Link)`
  color: ${t => t.theme.type == 'dark' ? 'var(--white-ice)' : '#464646'};
  text-decoration: none;

  &:hover {
    color: ${t => t.theme.type == 'dark' ? 'var(--white-ice)' : '#545454'} !important;
    text-decoration: underline;
  }
`
/* SECTION OTHERS */
export const SectionOthers = styled.section`
  background: ${t => t.theme.type == 'dark' ? `var(--gray-600)`: `var(--light)`};
  border: 1px solid ${t => t.theme.type == 'dark' ? 'var(--gray-600)' : '#C3C3C3'} !important;
  border-radius: 5px;
  padding: 0;
  margin-bottom: 1.4rem;
`

export const BoxTitleMenu = styled(Col)`
  border-bottom: 1px solid ${t => t.theme.type == 'dark' ? '#5D5D5D' : '#C3C3C3'} !important;
  padding-top: .9rem;
  padding-bottom: .9rem;
`

export const TitleMenu = styled.h3`
  color: ${t => t.theme.type == 'dark' ? 'var(--gray-300)' : 'var(--gray-400)'};
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
`

export const List = styled(ListGroup).attrs(props => ({...props}))`
  background: transparent !important;
  padding: 0 .5rem;
`
export const ListItem = styled(ListGroup.Item)`
  background: transparent !important;
  border: 0 !important;
  padding-left: .4rem;
  padding-right: .3rem;
`

/* SECTION CATEGORIES */
export const SectionCategories = styled.section`
  background: ${t => t.theme.type == 'dark' ? `var(--gray-600)`: `var(--light)`};
  border: 1px solid ${t => t.theme.type == 'dark' ? 'var(--gray-600)' : '#C3C3C3'} !important;
  border-radius: 5px;
  padding: 0;
`

export const BadgeCategories = styled.span`
  background: ${t => t.theme.type == 'dark' ? `var(--gray-600)`: `var(--light)`};
  border: 1px solid ${t => t.theme.type == 'dark' ? '#5D5D5D' : '#C3C3C3'};
  border-radius: 15px;
  padding: .3rem .5rem;
  margin-bottom: .4rem;
`

export const BadgeLink =  styled.a`
  color: ${t => t.theme.type == 'dark' ? 'var(--white-ice)' : '#464646'};
  text-align: center;
  font-size: .7em;
  font-weight: 500;
  font-weight: 700;
  text-decoration: none;
  vertical-align: middle;

  &:hover {
    color: ${t => t.theme.type == 'dark' ? 'var(--white-ice)' : '#454545'};
  }
`