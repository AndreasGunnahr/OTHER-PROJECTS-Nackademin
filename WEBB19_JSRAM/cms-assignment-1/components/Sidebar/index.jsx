import { useEffect } from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
  SidebarBtn,
} from "./style";

import linkData from "components/Navbar/LinkData";

const Sidebar = ({ isOpen }) => {
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
            <SidebarLink key={key} href={to}>
              {name}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarBtn href="/login">Sign In</SidebarBtn>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
