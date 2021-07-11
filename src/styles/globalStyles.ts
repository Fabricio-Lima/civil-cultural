import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@300&family=STIX+Two+Math&display=swap');  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textArea, button, p {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'STIX Two Math', sans-serif;
    font-weight: 600;
  }

  input:focus, button:focus, textArea:focus {
    outline: none;
  }

  button {
    cursor: pointer;
  }
`