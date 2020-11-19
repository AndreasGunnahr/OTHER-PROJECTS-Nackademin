import React from "react";
import {
  SidebarContainer,
  SidebarActionBtn,
  TopUserContainer,
  TopUserTitle,
} from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarActionBtn>
        <FontAwesomeIcon icon={faPlus} />
        Create a new post
      </SidebarActionBtn>
      <TopUserContainer>
        <TopUserTitle>Top user</TopUserTitle>
      </TopUserContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
