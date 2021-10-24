import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
   * {
    font-family: 'Rubik', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: 'Rubik', sans-serif;
  }

  button {
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
