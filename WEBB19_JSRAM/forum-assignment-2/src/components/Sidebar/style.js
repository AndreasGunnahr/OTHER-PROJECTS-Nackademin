import styled from "styled-components";
import { H1, P, headerFont, FlexColCenter, Span } from "components/Shared";
import { Button } from "components/Button";

export const SidebarContainer = styled(FlexColCenter)`
  justify-content: flex-start;
  width: 100%;
  grid-column: 3;
`;

export const SidebarActionBtn = styled(Button)``;

export const UserContainer = styled(FlexColCenter)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  margin-top: 2rem;
  background: white;
  height: 500px;
  width: 100%;
  border-radius: 5px;
`;

export const UserTitle = styled(H1)`
  width: 100%;
  font-size: 1.5rem;
`;

export const UserLabel = styled(H1)`
  font-size: 1rem;
  display: flex;
  margin-top: 2rem;
`;

export const UserTag = styled(P)`
  margin-left: 5px;
  /* font-style: italic; */
  text-transform: none;
  color: ${({ theme }) => theme.color.blue};
  &:first-letter {
    text-transform: uppercase;
  }
`;
