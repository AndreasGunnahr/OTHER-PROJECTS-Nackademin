import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// IMPORT OF PAGES
import Landing from "pages/landing";
import Login from "pages/login";
import Register from "pages/register";
import Posts from "pages/posts";
import PostDetail from "pages/postDetail";

const PublicRoute = ({ component, ...options }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(isAuthenticated);

  if (!isAuthenticated) return <Route {...options} component={component} />;
  return <Redirect to="/posts" />;
};

const PrivateRoute = ({ component, ...options }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  if (isAuthenticated) return <Route {...options} component={component} />;
  return <Redirect to="/login" />;
};

const Router = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Landing} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/posts" component={Posts} />
      <PrivateRoute exact path="/posts/:id" component={PostDetail} />
    </Switch>
  );
};

export default Router;
