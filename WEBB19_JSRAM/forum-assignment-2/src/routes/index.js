import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// IMPORT OF PAGES
import Login from "pages/login";
import Register from "pages/register";
import Posts from "pages/posts";
import PostDetail from "pages/postDetail";
import Home from "pages/home";

const AuthRoute = ({ type, component, ...options }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  if (type === "public" && isAuthenticated) return <Redirect to="/home" />;
  else if (type === "private" && !isAuthenticated)
    return <Redirect to="/login" />;

  return <Route {...options} component={component} />;
};

const Router = () => {
  return (
    <Switch>
      <AuthRoute exact path="/" component={Login} type="public" />
      <AuthRoute exact path="/login" component={Login} type="public" />
      <AuthRoute exact path="/register" component={Register} type="public" />
      <AuthRoute exact path="/posts" component={Posts} type="private" />
      <AuthRoute exact path="/post/:id" component={PostDetail} type="private" />
      <AuthRoute exact path="/home" component={Home} type="private" />
    </Switch>
  );
};

export default Router;
