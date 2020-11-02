import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  CryptoPage,
  CurrenciesPage,
  IndexesPage,
  MarketsPage,
  DetailPage,
  MarketPage,
  HomePage,
} from "pages";
import { Navbar } from "components";
import { StockProvider } from "providers";

import theme from "constants/theme";
import GlobalStyle from "constants/globalStyle";

const App = () => {
  return (
    <StockProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/crypto" component={CryptoPage} />
          <Route exact path="/crypto/:name" component={DetailPage} />
          <Route exact path="/currencies" component={CurrenciesPage} />
          <Route exact path="/currencies/:name" component={DetailPage} />
          <Route exact path="/indexes" component={IndexesPage} />
          <Route exact path="/indexes/:name" component={DetailPage} />
          <Route exact path="/markets" component={MarketsPage} />
          <Route exact path="/markets/:name" component={MarketPage} />
          <Route exact path="/markets/:market/:name" component={DetailPage} />
        </ThemeProvider>
      </Router>
    </StockProvider>
  );
};
export default App;
