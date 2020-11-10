import GlobalStyle from "constants/GlobalStyle";
import theme from "constants/theme";
import { GlobalProvider } from "store/globalProvider";
import { ThemeProvider } from "styled-components";
import Routes from "routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
