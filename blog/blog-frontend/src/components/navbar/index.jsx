import React from "react";
import { Container, NavLink } from "./style";

const Navbar = () => {
  return (
    <Container>
      <NavLink to="/">Posts</NavLink>
      <NavLink to="/create">Create post</NavLink>
    </Container>
  );
};

export default Navbar;
