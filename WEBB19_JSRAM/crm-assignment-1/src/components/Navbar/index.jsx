import { useState } from "react";
import { useGlobalContext } from "store/globalContext";
import linkData from "./LinkData";

import {
  NavContainer,
  Logo,
  LinkWrapper,
  NavLink,
  LoginBtn,
  LogOutBtn,
  SignedInUser,
  Wrapper,
} from "./style";

import Hamburger from "components/Hamburger";
import Sidebar from "components/Sidebar";

const Navbar = () => {
  const { user, isAuthenticated, dispatch } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Logo to="/" open={isOpen}>
        CRM
      </Logo>

      <Sidebar isOpen={isOpen} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

      {isAuthenticated && (
        <LinkWrapper>
          {linkData.map(({ to, name }, key) => (
            <NavLink
              key={key}
              activeStyle={{
                borderBottom: "3px solid #FF7235",
              }}
              to={to}
            >
              {name}
            </NavLink>
          ))}
        </LinkWrapper>
      )}
      {isAuthenticated && (
        <Wrapper>
          <SignedInUser>
            {`User: ${user.firstName} ${user.lastName}`} <br />
            {`Email:  ${user.email}`}
          </SignedInUser>
          <LogOutBtn onClick={() => dispatch({ type: "SIGN_OUT" })}>
            Logout
          </LogOutBtn>
        </Wrapper>
      )}
      {!isAuthenticated && <LoginBtn to="/login">Sign In</LoginBtn>}
    </NavContainer>
  );
};

export default Navbar;
