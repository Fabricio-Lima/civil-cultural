import styled, { createGlobalStyle } from "styled-components"


export default createGlobalStyle`  
/* Variable colors */
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
    --green-800: #00B04F;
    --green-dark: #00B024;
  
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

/* Global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
  }

  body, input, textArea, button, p {
    font: 500 1rem 'Fira Sans', sans-serif;
    color: ${p => p.theme.text};
  }

/* Inputs */

  input:focus, button:focus, textArea:focus, select:focus {
    outline: none;
  }

/* Buttons */
  
  button, a {
    cursor: pointer;
  }
  
  input[type=button], button:hover {
    background-image: linear-gradient(rgb(0 0 0 / 0%),rgb(0 0 0 / 5%) 40%,rgb(0 0 0 / 10%));
  }

/* Height and width */
  .h-full {
    height: 100vh;
  }

  .w-full {
    width: 100vw;
  }


/* Text */
  h1, h2, h3, h4, h5, h6, title {
    font:  600 1.2rem 'Fira Sans', sans-serif;
    color: ${p => p.theme.title};
  }

  a {
    color: ${p => p.theme.link};
  }

  .text-error {
    font-size: .9rem;
    font-weight: 500;
    color: var(--red-300);
  }

  .cursor-pointer {
    cursor: pointer;
  }
`