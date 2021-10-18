import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 50fr);
  grid-template-rows: auto;
  grid-template-areas: 
  "header header header header"
  "sidebar main main sidebarTopics"
  "footer footer footer footer";
`

export const Main = styled.main`
  grid-area: main;
`