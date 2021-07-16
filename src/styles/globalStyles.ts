import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`  
  :root {
    --white: #FFFFFF;
    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #DFDFDF;
    --gray-300: #afb2b1;
    --gray-400: #696969;
    --gray-600: #333333;
    --gray-700: #2A2A2E;

    --blue-300: #729BD3;
    --blue-400: #4681D3;
    --blue-500: #3478D4;
    --blue-600: #206DD5;

    --green-300: #87FFBC;
    --green-400: #5DFFA5;
    --green-500: #04D361;
    --green-600: #00CF5D;
  
    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --purple-600: #6F48C9;

    --red-300: #FF5037;
    --red-400: #FF472D;
    --red-500: #FF3A1E;
    --red-600: #F72C10;

    --yellow-300: #FFF460;
    --yellow-400: #FFF23F;
    --yellow-500: #FFF028;
    --yellow-600: #F9E910;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
  }

  body, input, textArea, button, p {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, title {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 600;
    color: ${p => p.theme.title}
  }

  input:focus, button:focus, textArea:focus, select:focus {
    outline: none;
  }
  
  button, a {
    cursor: pointer;
  }

  a {
    color: ${p => p.theme.link};
  }
`