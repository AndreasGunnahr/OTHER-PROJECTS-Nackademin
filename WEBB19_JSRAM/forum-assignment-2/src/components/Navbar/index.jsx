import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  NavContainer,
  Logo,
  SearchWrapper,
  SearchField,
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
      <Logo to="/" open={isOpen}>
        Logo
      </Logo>

      {/* <Sidebar isOpen={isOpen} /> */}
      {/* <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} /> */}

      {isAuthenticated && (
        <SearchWrapper>
          <SearchField placeholder="&#xF002;  Search for posts" />
        </SearchWrapper>
      )}
      {isAuthenticated && (
        <Wrapper>
          <LogOutBtn onClick={() => dispatch(userActions.logout())}>
            Logout
          </LogOutBtn>
        </Wrapper>
      )}
      {!isAuthenticated && (
        <LoginBtn
          onClick={() =>
            dispatch(
              userActions.login({
                email: "pelle@willandskill.se",
                password: "pellesvanslos",
              })
            )
          }
        >
          Login
        </LoginBtn>
      )}
    </NavContainer>
  );
};

export default Navbar;
