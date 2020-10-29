import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  ::-webkit-scrollbar {
    display: none;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    background: black;
    overflow-x: hidden;
  }

  h1, a {
    font-family: "Montserrat", "sans-serif"
  }

  span, p {
    font-family: "Raleway", "sans-serif"
  }
`;

export default GlobalStyle;
