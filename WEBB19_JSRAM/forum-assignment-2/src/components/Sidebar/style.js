import styled from "styled-components";
import { NavA } from "components/Shared";
// import { OrangeButton } from "components/Button";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarWrapper = styled.div``;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 60px);
  text-align: center;

  @media screen and (min-width: 480px) {
    grid-template-rows: repeat(4, 80px);
  }
`;

export const SidebarLink = styled(NavA)`
  margin: 0 auto;
  display: inline-block;

  font-size: 1.5rem;
  margin-top: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
`;

export const SidebarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// export const SidebarBtn = styled(OrangeButton)`
//   width: 200px;
//   text-decoration: underline;
// `;

// export const LogOutBtn = styled(OrangeButton)`
//   width: 200px;
//   text-decoration: underline;
//   height: 45px;
//   font-size: 1rem;
// `;
