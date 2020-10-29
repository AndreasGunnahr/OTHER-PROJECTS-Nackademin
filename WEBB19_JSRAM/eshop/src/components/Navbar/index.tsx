import React, { useContext } from "react";
import {
  NavbarContainer,
  LinkWrapper,
  NavLink,
  Logo,
  NrOfItems,
} from "./style";
import { CartContext } from "provider/cartProvider";

const Navbar = () => {
  const { cart }: any = useContext(CartContext);
  return (
    <NavbarContainer>
      <Logo to="/">LOGO</Logo>
      <LinkWrapper>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          <NrOfItems>{cart.items.length}</NrOfItems>Cart
        </NavLink>
      </LinkWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
