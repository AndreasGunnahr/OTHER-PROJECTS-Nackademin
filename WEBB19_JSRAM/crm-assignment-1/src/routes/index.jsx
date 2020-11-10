import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useGlobalContext } from "store/globalContext";

// IMPORT OF PAGES
import Landing from "pages/landing";
import Customers from "pages/customers";
import Login from "pages/login";
import Register from "pages/register";
import CustomerDetail from "pages/customerDetail";

const PublicRoute = ({ component, ...options }) => {
  const { isAuthenticated } = useGlobalContext();
  if (!isAuthenticated) return <Route {...options} component={component} />;
  return <Redirect to="/customers" />;
};

const PrivateRoute = ({ component, ...options }) => {
  const { isAuthenticated } = useGlobalContext();
  if (isAuthenticated) return <Route {...options} component={component} />;
  return <Redirect to="/login" />;
};

const Router = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Landing} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/customers" component={Customers} />
      <PrivateRoute exact path="/customers/:id" component={CustomerDetail} />
    </Switch>
  );
};

export default Router;
