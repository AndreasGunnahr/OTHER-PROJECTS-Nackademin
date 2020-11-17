import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    display: none;
  }

  body {
    overflow-x: hidden;
  }

`;
