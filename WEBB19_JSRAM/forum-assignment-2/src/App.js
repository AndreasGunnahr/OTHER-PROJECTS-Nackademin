
import { GlobalStyle } from "constants/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import Routes from "routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
