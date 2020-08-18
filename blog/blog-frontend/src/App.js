import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages/home";
import CreatePost from "pages/createPost";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={CreatePost} />
    </Router>
  );
};

export default App;
