import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  NavContainer,
  Logo,
  SearchWrapper,
  SearchField,
  NavLink,
  LoginBtn,
  LogOutBtn,
  Wrapper,
} from "./style";

// import Hamburger from "components/Hamburger";
// import Sidebar from "components/Sidebar";
import { userActions } from "redux/actions/user.action";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    ({ authentication }) => authentication.isAuthenticated
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Logo to={isAuthenticated ? "/home" : "/login"} open={isOpen}>
        Logo
      </Logo>

      {/* <Sidebar isOpen={isOpen} /> */}
      {/* <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {isAuthenticated && (
        <Wrapper>
          <NavLink
            to="/home"
            activeStyle={{
              borderBottom: "3px solid #0066FF",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            activeStyle={{
              borderBottom: "3px solid #0066FF",
            }}
          >
            Posts
          </NavLink>
          <LogOutBtn onClick={() => dispatch(userActions.logout())}>
            Logout
          </LogOutBtn>
        </Wrapper>
      )}
      {!isAuthenticated && (
        <Wrapper>
          <NavLink
            to="/register"
            activeStyle={{
              borderBottom: "3px solid #0066FF",
            }}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            activeStyle={{
              borderBottom: "3px solid #0066FF",
            }}
          >
            Login
          </NavLink>
        </Wrapper>
      )}
    </NavContainer>
  );
};

export default Navbar;
