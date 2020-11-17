import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// IMPORT OF PAGES
import Landing from "pages/landing";
import Login from "pages/login";
import Register from "pages/register";
import Dashboard from "pages/dashboard";
import PostDetail from "pages/postDetail";

const AuthRoute = ({ type, component, ...options }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  console.log(isAuthenticated);
  if (type === "public" && isAuthenticated) return <Redirect to="/dashboard" />;
  else if (type === "private" && !isAuthenticated)
    return <Redirect to="/login" />;

  return <Route {...options} component={component} />; // console.log("Auth: ", isAuthenticated);

  // if (!isAuthenticated) return <Route {...options} component={component} />;
  // return <Redirect to="/dashboard" />;
};

// const PrivateRoute = ({ component, ...options }) => {
//   const isAuthenticated = useSelector(
//     (state) => state.authentication.isAuthenticated
//   );
//   console.log("Auth: ", isAuthenticated);

//   if (isAuthenticated) return <Route {...options} component={component} />;
//   return <Redirect to="/login" />;
// };

const Router = () => {
  return (
    <Switch>
      <AuthRoute exact path="/" component={Landing} type="public" />
      <AuthRoute exact path="/login" component={Login} type="public" />
      <AuthRoute exact path="/register" component={Register} type="public" />
      <AuthRoute exact path="/dashboard" component={Dashboard} type="private" />
      <AuthRoute exact path="/post/:id" component={PostDetail} type="private" />
    </Switch>
  );
};

export default Router;
