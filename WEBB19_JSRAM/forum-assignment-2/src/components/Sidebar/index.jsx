import React from "react";
import {
  SidebarContainer,
  SidebarActionBtn,
  UserContainer,
  UserTitle,
  UserTag,
  UserLabel,
} from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Sidebar = ({ section, show }) => {
  const user = useSelector((state) => state.authentication.user);
  console.log(user);

  return (
    <SidebarContainer>
      {section === "posts" && (
        <>
          <SidebarActionBtn onClick={() => show()}>
            <FontAwesomeIcon icon={faPlus} />
            Create a new post
          </SidebarActionBtn>
        </>
      )}

      <UserContainer>
        <UserTitle>Signed in user</UserTitle>
        {user && (
          <>
            <UserLabel>
              Firstname:
              <UserTag>
                {user.firstName ? user.firstName : "Not entered"}
              </UserTag>
            </UserLabel>
            <UserLabel>
              Lastname:
              <UserTag>{user.lastName ? user.lastName : "Not entered"}</UserTag>
            </UserLabel>
            <UserLabel>
              Email:
              <UserTag>{user.email ? user.email : "Not entered"}</UserTag>
            </UserLabel>
          </>
        )}
      </UserContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
