import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.blackGrey};
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

  button, a {
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    color: ${({ theme }) => theme.colors.white}
  }
`;
