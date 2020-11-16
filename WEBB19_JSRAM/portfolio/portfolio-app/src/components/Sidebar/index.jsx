import React, { useEffect } from "react"

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
} from "./sidebar.styled"

const Sidebar = ({ isOpen, siteLinks }) => {
  useEffect(() => {
    isOpen
      ? (document.getElementsByTagName("body")[0].style.overflowY = "hidden")
      : (document.getElementsByTagName("body")[0].style.overflowY = "scroll")
  }, [isOpen])

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          {siteLinks.map(({ link, name }, key) => (
            <SidebarLink
              key={key}
              to={link}
              activeStyle={{
                borderBottom: "3px solid #FF7235",
              }}
            >
              {name}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtnWrapper></SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
