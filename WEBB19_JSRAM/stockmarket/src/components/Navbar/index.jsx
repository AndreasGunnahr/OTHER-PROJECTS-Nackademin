import React from "react";
import { NavbarContainer, LinkWrapper, NavLink, Logo } from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">LOGO</Logo>
      <LinkWrapper>
        <NavLink to="/crypto">Crypto</NavLink>
        <NavLink to="/currencies">Currencies</NavLink>
        <NavLink to="/indexes">Indexes</NavLink>
        <NavLink to="/markets">Markets</NavLink>
      </LinkWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
