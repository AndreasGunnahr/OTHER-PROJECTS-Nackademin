import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.color.background};
    }
`
export default GlobalStyle
