import GlobalStyle from "constants/GlobalStyle";
import theme from "constants/theme";
import { GlobalProvider } from "store/globalProvider";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default MyApp;
