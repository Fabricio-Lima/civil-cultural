import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(4, 15fr);
  grid-template-rows: auto;
  grid-template-areas: 
  "header header header header"
  "menu main status"
  "footer footer footer footer";
`