import React from "react"
import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "./src/constants"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
