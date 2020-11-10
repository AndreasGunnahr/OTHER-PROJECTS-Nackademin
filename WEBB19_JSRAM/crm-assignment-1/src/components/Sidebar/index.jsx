import { useEffect } from "react";
import { useGlobalContext } from "store/globalContext";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
  SidebarBtn,
  LogOutBtn,
} from "./style";

import linkData from "components/Navbar/LinkData";

const Sidebar = ({ isOpen }) => {
  const { isAuthenticated, dispatch } = useGlobalContext();

  useEffect(() => {
    isOpen
      ? (document.getElementsByTagName("body")[0].style.overflowY = "hidden")
      : (document.getElementsByTagName("body")[0].style.overflowY = "scroll");
  }, [isOpen]);

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          {linkData.map(({ to, name }, key) => (
            <SidebarLink
              key={key}
              to={to}
              activeStyle={{
                borderBottom: "3px solid #FF7235",
              }}
            >
              {name}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtnWrapper>
          {isAuthenticated ? (
            <LogOutBtn onClick={() => dispatch({ type: "SIGN_OUT" })}>
              Logout
            </LogOutBtn>
          ) : (
            <SidebarBtn to="/login">Sign In</SidebarBtn>
          )}
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
