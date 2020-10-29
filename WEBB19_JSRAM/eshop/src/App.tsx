import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "globalStyle";

import { ProductPage, ProductDetailPage, CartPage } from "pages";
import { Navbar } from "components";
import CartProvider from "provider/cartProvider";

const App: FC = () => (
  <>
    <GlobalStyle />
    <CartProvider>
      <Router>
        <Navbar />
        <Route exact path="/" component={ProductPage} />
        <Route exact path="/product/:id" component={ProductDetailPage} />
        <Route exact path="/cart" component={CartPage} />
      </Router>
    </CartProvider>
  </>
);

export default App;
